import { Mail, MapPin, Phone, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import wtsapp from "../assets/WhatsAppButtonGreenMedium.png";
import { useMemo, useState } from "react";

const calculateRatingSummary = (reviews) => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const average = total / reviews.length;

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((review) => {
    const roundedRating = Math.floor(review.rating);
    ratingCounts[roundedRating] += 1;
  });

  return {
    average: average.toFixed(1),
    totalReviews: reviews.length,
    ratingCounts,
  };
};

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex text-emerald-300">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="fill-current" size={18} />
      ))}
      {hasHalfStar && <StarHalf className="fill-current" size={18} />}
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} size={18} />
      ))}
    </div>
  );
};

export default function ContactSection({ onSubmit }) {
  const reviewsData = [
    {
      id: 1,
      name: "Manik Bandara",
      rating: 5,
      date: "April 15, 2025",
      service: "Software Development",
      comment:
        "I had the pleasure of using the web application and I must say, it exceeded my expectations. The interface is clean, responsive, and very user-friendly. Everything works smoothly.",
    },
    {
      id: 2,
      name: "Udana Pramod",
      rating: 4.5,
      date: "March 28, 2025",
      service: "Software Development",
      comment:
        "The UI is exceptionally well-designed—clean, intuitive, and highly responsive. Navigation is seamless and functionalities operate smoothly with thoughtful planning.",
    },
    {
      id: 3,
      name: "Kanishka Pasindu",
      rating: 5,
      date: "March 10, 2025",
      service: "Custom Portfolio",
      comment:
        "I couldn't be happier with the custom portfolio website! It's sleek, professional, and built using modern technologies like React, Tailwind CSS, and Next.js.",
    },
    {
      id: 4,
      name: "Pansilu Rathnayake",
      rating: 4,
      date: "February 22, 2025",
      service: "Software Development",
      comment:
        "The design is modern, clean, and fully responsive. Navigation is seamless, UI is intuitive, and everything works flawlessly.",
    },
    {
      id: 5,
      name: "Amasha Jayalath",
      rating: 4,
      date: "February 22, 2025",
      service: "Software Development",
      comment:
        "The travel platform provides everything needed for a perfect trip with real-time data and intuitive flows. It's a one-stop solution that simplifies planning.",
    },
  ];

  const [filter, setFilter] = useState("all");
  const ratingSummary = useMemo(
    () => calculateRatingSummary(reviewsData),
    [reviewsData]
  );

  const filteredReviews =
    filter === "all"
      ? reviewsData
      : reviewsData.filter((review) => review.service === filter);

  const filters = [
    { label: "All Reviews", value: "all" },
    { label: "Software Development", value: "Software Development" },
    { label: "Custom Portfolio", value: "Custom Portfolio" },
    { label: "Technical Assignment", value: "Technical Assignment" },
  ];

  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#12172a_0%,_#060a16_55%,_#010307_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute left-6 top-12 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-emerald-200/70">
            Contact
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Let’s shape your next release.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            Share your idea, introduce your team, or ping us for a quick
            consult. We respond across email, phone, and WhatsApp with next-step
            clarity in under 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200/70">
                Get in touch
              </p>
              <p className="text-white/70">
                Have a project, partnership, or idea? Send the brief and we’ll
                align on scope, team, and investment quickly.
              </p>
            </div>

            <div className="space-y-6 text-white/80">
              {[
                {
                  label: "Email",
                  value: "zentrixtechceo@gmail.com",
                  icon: Mail,
                },
                {
                  label: "Phone / WhatsApp",
                  value: "+94 715 644 565",
                  icon: Phone,
                  extra: (
                    <a
                      href="https://wa.me/+94715644565"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      <img
                        src={wtsapp}
                        alt="WhatsApp"
                        className="mt-3 w-40 rounded-xl border border-white/10 bg-white/5 p-2"
                      />
                    </a>
                  ),
                },
                {
                  label: "Location",
                  value: "Colombo, Sri Lanka",
                  icon: MapPin,
                },
              ].map(({ label, value, icon: Icon, extra }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-200">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                      {label}
                    </p>
                    <p className="text-lg text-white">{value}</p>
                    {extra}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-white/80">
              <h3 className="text-lg font-semibold text-white">
                Feedback loop
              </h3>
              <p className="mt-2 text-sm">
                We evolve playbooks every sprint. Drop ideas, praise, or
                friction and we’ll respond within a day.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full border-white/40 text-black hover:bg-white/10"
                onClick={onSubmit}
              >
                Leave feedback
              </Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  Client reviews
                </h2>
                <p className="text-sm text-white/60">Realtime NPS snapshots</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-semibold text-white">
                  {ratingSummary.average}
                </div>
                <RatingStars rating={parseFloat(ratingSummary.average)} />
                <p className="text-xs text-white/60 mt-1">
                  Based on {ratingSummary.totalReviews} reviews
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-2">
              {[5, 4, 3, 2, 1].map((num) => {
                const count = ratingSummary.ratingCounts[num];
                const percentage =
                  (count / ratingSummary.totalReviews) * 100 || 0;
                return (
                  <div
                    key={num}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <span className="w-6">{num}</span>
                    <div className="h-2 flex-1 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {filters.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    filter === value
                      ? "bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black shadow-lg shadow-emerald-500/30"
                      : "border border-white/10 bg-white/5 text-white/80 hover:border-white/40"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-6 max-h-[560px] overflow-y-auto pr-2">
              {filteredReviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-white/80"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {review.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {review.date}
                      </p>
                    </div>
                    <div className="text-right text-sm text-white/60">
                      <p>{review.service}</p>
                      <RatingStars rating={review.rating} />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
