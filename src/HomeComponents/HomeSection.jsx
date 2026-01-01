import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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

const liveSignals = [
  { label: "Deploys this week", value: "18", trend: "+32%" },
  { label: "Latency budget", value: "210ms", trend: "-12%" },
  { label: "Squads active", value: "07", trend: "Global" },
];

const signalFeed = [
  "Launching AI-native travel orchestration MVP in 9 days.",
  "FinOps cockpit shipped for healthcare enterprise rollout.",
  "Composable commerce stack refactor cleared security audit.",
];

export default function HomeSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1a1a2e_0%,_#050915_55%,_#020409_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -left-10 top-32 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              Zentrix · Product studio · Colombo / Remote
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Launching intelligent digital products with measurable velocity.
              </h1>
              <p className="text-lg text-white/70">
                We embed with founders, CTOs, and growth leads to take software
                from napkin sketch to market traction. Strategy, design,
                engineering, AI integration, and release ops under one
                accountable squad.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-8 py-5 text-base font-semibold text-black shadow-[0_15px_35px_-15px_rgba(34,211,238,0.8)] hover:opacity-90">
                Book an intro call
                <ArrowUpRight size={18} />
              </Button>
              <Button
                variant="outline"
                className="rounded-full border border-white/40 bg-white/5 px-8 py-5 text-base font-semibold text-white hover:bg-white/10"
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
                  className="gap-2 rounded-full border border-emerald-300/60 bg-emerald-500/10 px-8 py-5 text-base font-semibold text-emerald-200 hover:bg-emerald-400/20"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp us
                </Button>
              </a>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_70px_-40px_rgba(15,118,110,0.9)] backdrop-blur-md md:grid-cols-3">
              {impactStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[48px] bg-gradient-to-tr from-purple-500/30 via-cyan-400/40 to-transparent blur-3xl" />
            <div className="relative space-y-6 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="grid gap-4 md:grid-cols-3">
                {liveSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                      {signal.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold">
                      {signal.value}
                    </p>
                    <p className="text-sm text-emerald-300">{signal.trend}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
                  Mission control
                </p>
                <ul className="mt-4 space-y-4">
                  {signalFeed.map((line, idx) => (
                    <li
                      key={line}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <span className="mt-1 text-xs text-white/50">
                        0{idx + 1}
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <p className="uppercase tracking-[0.4em] text-white/40">
                    Status
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                    Systems nominal
                  </span>
                </div>
                <p className="mt-3 text-white">
                  New multi-tenant customer OS rolling out across fintech,
                  healthcare, and mobility within 6 weeks.
                </p>
              </div>
            </div>
            <div className="absolute -left-10 top-10 hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/70 backdrop-blur md:flex">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Pulse
                </p>
                <p className="text-lg font-semibold text-white">
                  Live Releases
                </p>
                <p className="text-emerald-300">4 squads active</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-emerald-200/70">
              How we collaborate
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Integrated pods for strategic launches or targeted optimizations.
            </h2>
            <div className="space-y-8">
              {collaborationModes.map((mode, idx) => (
                <div
                  key={mode.title}
                  className="border-l-2 border-emerald-400/60 pl-6"
                >
                  <p className="text-sm font-semibold text-white/60">
                    0{idx + 1}
                  </p>
                  <h3 className="text-xl font-semibold text-white">
                    {mode.title}
                  </h3>
                  <p className="text-white/70">{mode.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200/70">
              Operating principles
            </p>
            <ul className="space-y-4">
              {principles.map((principle) => (
                <li
                  key={principle}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-white/80"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_4px_rgba(45,212,191,0.6)]" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
