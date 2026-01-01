import { Button } from "@/components/ui/button";
import wtsapp from "../assets/WhatsAppButtonGreenMedium.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ChevronRight } from "lucide-react";

export default function ServiceSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#11162a_0%,_#050915_55%,_#010307_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-emerald-200/70">
            What we ship
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Modular product pods tuned for modern technology stacks.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            From AI-native MVPs to enterprise-grade platforms, we architect
            resilient software with automation, motion, and security baked in.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              className="flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_-45px_rgba(6,182,212,0.9)] backdrop-blur transition-all hover:-translate-y-1 hover:border-emerald-300/50"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span>0{index + 1}</span>
                  <span className="text-emerald-300 font-semibold">
                    Core pod
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                    Scope highlights
                  </p>
                  <ul className="mt-4 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-white/80"
                      >
                        <span className="mt-1 rounded-full bg-emerald-400/30 p-1 text-emerald-200">
                          <ChevronRight size={12} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black hover:opacity-90">
                      Learn more
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-2xl border border-white/10 bg-[#050915] text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-white">
                        Learn more about packages
                      </DialogTitle>
                      <DialogDescription className="text-white/70">
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

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_30px_120px_-60px_rgba(79,70,229,0.9)] backdrop-blur">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200/70">
                Delivery rhythm
              </p>
              <h2 className="text-3xl font-semibold">
                Our build cadence in four focused loops.
              </h2>
            </div>
            <Button className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-6 py-4 text-sm font-semibold text-black hover:opacity-90">
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
                className="rounded-3xl border border-white/10 bg-black/30 p-5 text-left"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                  Phase {process.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {process.title}
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
