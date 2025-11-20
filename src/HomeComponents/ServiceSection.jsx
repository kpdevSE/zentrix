import { Button } from "@/components/ui/button";
import wtsapp from "../assets/WhatsAppButtonGreenMedium.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronRight } from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="py-2">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {[
          {
            title: "Software Development",
            description:
              "End-to-end development of custom software applications tailored to your business requirements.",
            features: [
              "Web Applications",
              "Mobile Apps",
              "Enterprise Software",
              "API Development",
            ],
          },
          {
            title: "Technical Assignments",
            description:
              "Expert assistance with complex technical projects and specialized assignments.",
            features: [
              "Algorithm Implementation",
              "System Architecture",
              "Performance Optimization",
              "Technical Documentation",
            ],
          },
          {
            title: "Custom Portfolios",
            description:
              "Showcase your work with beautifully designed and functional portfolio websites.",
            features: [
              "Responsive Design",
              "Interactive Galleries",
              "Content Management",
              "SEO Optimization",
            ],
          },
          {
            title: "Social Media Marketing & Website Maintenance",
            description:
              "Comprehensive social media management and website maintenance services to keep your online presence active and engaging.",
            features: [
              "YouTube Management",
              "TikTok Management",
              "Instagram Management",
              "Facebook Management",
              "Daily Content Updates",
              "Website Maintenance",
            ],
          },
        ].map((service, index) => (
          <article
            key={service.title}
            className="flex h-full flex-col justify-between rounded-[28px] border border-gray-100 bg-white/90 p-6 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>0{index + 1}</span>
                <span className="text-emerald-500 font-semibold">Core pod</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Scope highlights
                </p>
                <ul className="mt-3 space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <ChevronRight size={16} className="text-black" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full rounded-full bg-black text-white hover:bg-gray-900">
                    Learn more
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Learn More About packages</DialogTitle>
                    <DialogDescription>
                      Contact us on WhatsApp to explore scope, timelines, and
                      investment for this service.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <a
                      href="https://wa.me/+94715644565"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={wtsapp}
                        alt="WhatsApp contact"
                        className="mx-auto h-auto w-2/3"
                      />
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-[32px] border border-gray-100 bg-white/90 p-10 shadow-xl">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gray-400">
              Delivery rhythm
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Our build cadence in four focused loops.
            </h2>
          </div>
          <Button className="rounded-full bg-black px-6 py-4 text-sm font-semibold text-white hover:bg-gray-900">
            Download process deck
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Discovery",
              description:
                "We work with you to understand your business goals and requirements.",
            },
            {
              step: "2",
              title: "Planning",
              description:
                "We create a detailed roadmap and technical specification for your project.",
            },
            {
              step: "3",
              title: "Development",
              description:
                "Our team builds your solution using agile methodologies and best practices.",
            },
            {
              step: "4",
              title: "Delivery & Support",
              description:
                "We deploy your solution and provide ongoing maintenance and support.",
            },
          ].map((process) => (
            <div
              key={process.step}
              className="rounded-3xl border border-gray-100 bg-gray-50/80 p-5 text-left"
            >
              <span className="text-sm font-semibold text-gray-400">
                Phase {process.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">
                {process.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
