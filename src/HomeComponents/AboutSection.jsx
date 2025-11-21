import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "Kanishka Pasindu",
    title: "CEO · Product Engineering",
    focus:
      "Architects scalable platforms and leads technical delivery across pods.",
  },
  {
    name: "Lahiru Lakshan",
    title: "Co-founder · Experience & Delivery",
    focus: "Owns UX direction, interface systems, and sprint execution.",
  },
];

const timeline = [
  {
    year: "2019",
    summary: "Studio established",
    detail:
      "Began as a bespoke dev team helping local brands digitize operations.",
  },
  {
    year: "2021",
    summary: "Pods & playbooks",
    detail:
      "Created multidisciplinary squads for SaaS, healthcare, and education.",
  },
  {
    year: "2024",
    summary: "Global launches",
    detail:
      "Trusted across Sri Lanka, Canada, and the UK for regulated platforms.",
  },
];

const credos = [
  "Software ships only when we can prove it moves a metric.",
  "Delivery pods stay attached through discovery, build, and iteration.",
  "Documentation, async updates, and transparent tooling keep partners aligned.",
];

const opsSignals = [
  {
    label: "Studios online",
    value: "Colombo · Toronto · Remote",
    detail: "Follow-the-sun pods with 20-hour overlap windows.",
  },
  {
    label: "Regulated ready",
    value: "SOC2 · ISO 27001",
    detail: "Security, privacy, and release governance baked in.",
  },
  {
    label: "Tooling spine",
    value: "Linear · Notion · Vercel",
    detail: "Shared telemetry, async rituals, automated status updates.",
  },
];

const stackMaturity = [
  {
    title: "Strategy & Research",
    score: "93%",
    detail: "Sprint zero, user labs, KPI baselines.",
  },
  {
    title: "Design Systems",
    score: "89%",
    detail: "Tokenized libraries, motion, content ops.",
  },
  {
    title: "Platform Engineering",
    score: "96%",
    detail: "CI/CD, observability, platform playbooks.",
  },
];

const studioStats = [
  {
    value: "10+ launches",
    label: "Products shipped",
    detail: "Enterprise SaaS, marketing sites, and ops tooling.",
  },
  {
    value: "4 continents",
    label: "Clients supported",
    detail: "Fintech, healthcare, education, mobility ecosystems.",
  },
  {
    value: "5 specialists",
    label: "Embedded pod",
    detail: "Strategy, design, engineering, QA, and release ops.",
  },
];

const disciplines = [
  {
    title: "Strategy pods",
    detail:
      "Partner-level leads run discovery, KPI modeling, and stakeholder workshops before any sprint kicks off.",
  },
  {
    title: "Experience systems",
    detail:
      "Design languages, motion, and content ops stay synchronized across marketing, product, and operations surfaces.",
  },
  {
    title: "Engineering platform",
    detail:
      "IaC, CI/CD, and observability templates accelerate every build while keeping compliance and reliability in check.",
  },
  {
    title: "Lifecycle care",
    detail:
      "Post-launch pods stay attached for telemetry reviews, growth experiments, and support queues.",
  },
];

const partnershipTenets = [
  "Quarterly roadmap and KPIs reviewed with founders and business leads.",
  "Async status rituals—daily Looms, weekly memos, public dashboards.",
  "Embedded tooling access so your team can audit work in real time.",
  "Every engagement includes enablement docs, handover kits, and playbooks.",
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_#101826_0%,_#060b16_55%,_#020409_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute right-8 bottom-12 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 space-y-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-wrap items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-white/60">
              <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">
                Since 2019
              </span>
              <span className="rounded-full border border-white/20 px-4 py-1 text-white/70">
                Remote-first studio
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Remote-first engineers and designers crafting confident software.
            </h1>
            <p className="text-lg text-white/70">
              Our founding partners still lead discovery and stay close to the
              craft. Every engagement gets a senior pod covering product
              strategy, experience, engineering, QA, and release ops.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {leadership.map((person) => (
                <div
                  key={person.name}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-50px_rgba(6,182,212,0.8)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                    Partner
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-200">
                    {person.title}
                  </p>
                  <p className="mt-3 text-white/70">{person.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/60">
                Ops console
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Signal-driven teams with measurable rituals.
              </p>
              <p className="mt-2 text-white/70">
                We operate like an embedded product org—weekly telemetry, async
                updates, and founders on every standing call.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {opsSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/5 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200/80">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {signal.value}
                  </p>
                  <p className="text-sm text-white/70">{signal.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
                Stack maturity
              </p>
              <div className="mt-5 space-y-4">
                {stackMaturity.map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <p>{item.title}</p>
                      <span className="text-emerald-300 font-semibold">
                        {item.score}
                      </span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                        style={{ width: item.score }}
                      />
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {studioStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-white shadow-[0_20px_80px_-60px_rgba(16,185,129,0.9)]"
            >
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
                {stat.label}
              </p>
              <p className="mt-3 text-white/70">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-emerald-200/70">
                  Mission
                </p>
                <h2 className="text-3xl font-semibold text-white">
                  Build digital products that feel inevitable—and keep
                  compounding value.
                </h2>
              </div>
              <Button className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-6 py-4 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:opacity-90">
                Download capability brief
              </Button>
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {credos.map((credo) => (
                <li
                  key={credo}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-white/80"
                >
                  {credo}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-emerald-200/70">
              Operating disciplines
            </p>
            <div className="mt-6 space-y-4">
              {disciplines.map((discipline) => (
                <div
                  key={discipline.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/5 p-5"
                >
                  <p className="text-sm font-semibold text-emerald-200">
                    {discipline.title}
                  </p>
                  <p className="mt-2 text-white/70">{discipline.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-emerald-200/70">
              Growth blueprint
            </p>
            <div className="mt-6 space-y-8">
              {timeline.map((event, idx) => (
                <div key={event.year} className="relative pl-10">
                  <div className="absolute left-0 top-1 flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-300 text-xs font-semibold text-emerald-200">
                      0{idx + 1}
                    </span>
                    {idx < timeline.length - 1 && (
                      <span className="mt-1 h-16 w-px bg-gradient-to-b from-emerald-300/60 to-transparent" />
                    )}
                  </div>
                  <p className="text-sm font-semibold text-white/60">
                    {event.year}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {event.summary}
                  </p>
                  <p className="text-white/70">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-emerald-200/70">
              Partnership tenets
            </p>
            <ul className="mt-6 space-y-4">
              {partnershipTenets.map((tenet) => (
                <li
                  key={tenet}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-5 text-white/80"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                  <span>{tenet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
