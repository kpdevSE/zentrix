import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import HeroImage from "../assets/heroimage.jpg";
import { FaWhatsapp } from "react-icons/fa";

const impactStats = [
  { label: "Platforms live", value: "42" },
  { label: "Avg. launch time", value: "5.5 weeks" },
  { label: "Client retention", value: "93%" },
];

const collaborationModes = [
  {
    title: "Product ignition",
    copy: "Zero-to-one discovery, user research, and prototype validation for new bets.",
  },
  {
    title: "Growth sprints",
    copy: "Dedicated squads scaling existing platforms with new journeys and integrations.",
  },
  {
    title: "Experience refresh",
    copy: "Brand and marketing sites rebuilt with modern stacks, animation, and CMS.",
  },
];

const principles = [
  "Every engagement ships with measurable success metrics.",
  "Design systems extend across product, marketing, and ops surfaces.",
  "We plug into your team, tools, and rituals—remote-first, async-friendly.",
  "Post-launch support keeps iterating with telemetry and experiments.",
];

export default function HomeSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-20 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-gray-200/60 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
              Zentrix · Product studio · Colombo / Remote
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Software partners shaping launches, replatforms, and bold MVPs.
              </h1>
              <p className="text-lg text-gray-600">
                We embed with founders, CTOs, and marketing leads to take
                digital products from napkin sketch to production velocity.
                Strategy, design, engineering, and release ops under one
                accountable team.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2 rounded-full bg-black px-6 py-5 text-base font-semibold">
                Book an intro call
                <ArrowUpRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-300 px-6 py-5 text-base font-semibold text-gray-900 hover:bg-gray-100"
              >
                Explore case studies
              </Button>
              <a
                href="https://wa.me/+94715644565"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button
                  variant="outline"
                  className="gap-2 rounded-full border-emerald-200 bg-emerald-50 px-6 py-5 text-base font-semibold text-emerald-700 hover:bg-emerald-100"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp us
                </Button>
              </a>
            </div>
            <div className="grid gap-6 rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-lg md:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-gray-100 via-white to-gray-200 blur-2xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-2xl">
              <img
                src={HeroImage}
                alt="Zentrix product work"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-8 text-white">
                <p className="text-sm font-semibold text-white/80">
                  Currently shipping
                </p>
                <p className="text-2xl font-semibold">
                  Mobility booking platform · Canada
                </p>
                <p className="text-white/80">
                  Reimagining student arrivals, operations dashboards, and
                  real-time logistics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-gray-400">
              How we collaborate
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Integrated pods for strategic launches or targeted optimizations.
            </h2>
            <div className="mt-8 space-y-6">
              {collaborationModes.map((mode, idx) => (
                <div key={mode.title} className="pl-5">
                  <p className="text-sm font-semibold text-gray-400">
                    0{idx + 1}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {mode.title}
                  </h3>
                  <p className="text-gray-600">{mode.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-400">
              Operating principles
            </p>
            <ul className="space-y-4">
              {principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3 p-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                  <span className="text-gray-700">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
