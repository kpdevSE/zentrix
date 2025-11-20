import CompanyHistory from "../assets/history.jpg";
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

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-8 h-64 w-64 rounded-full bg-gray-200/70 blur-3xl" />
        <div className="absolute right-8 bottom-8 h-80 w-80 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 space-y-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.5em] text-gray-400">
              About Zentrix
            </p>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Remote-first engineers and designers crafting confident software.
            </h1>
            <p className="text-lg text-gray-600">
              Our founding partners still lead discovery and stay close to the
              craft. Every engagement gets a senior pod covering product
              strategy, experience, engineering, QA, and release ops.
            </p>
            <div className="grid gap-6 rounded-[32px] border border-gray-100 bg-white/90 p-6 shadow-xl md:grid-cols-2">
              {leadership.map((person) => (
                <div key={person.name}>
                  <p className="text-sm font-semibold text-gray-400">Partner</p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600">
                    {person.title}
                  </p>
                  <p className="text-gray-600">{person.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-gray-100 bg-white shadow-2xl">
            <img
              src={CompanyHistory}
              alt="Zentrix team"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-6 text-white">
              <p className="text-sm font-semibold text-white/80">
                Colombo · Toronto · Remote pods
              </p>
              <p className="text-2xl font-semibold">
                15+ specialists across product, design, engineering, QA, and
                ops.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-gray-100 bg-white/95 p-8 shadow-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-gray-400">
                Mission
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Build digital products that feel inevitable—and keep compounding
                value.
              </h2>
            </div>
            <Button className="rounded-full bg-black px-6 py-4 text-sm font-semibold text-white hover:bg-gray-900">
              Download capability brief
            </Button>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {credos.map((credo) => (
              <li
                key={credo}
                className="rounded-2xl border border-gray-100 bg-gray-50/90 p-4 text-gray-700"
              >
                {credo}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {timeline.map((event, idx) => (
            <div
              key={event.year}
              className="rounded-[28px] border border-gray-100 bg-white/90 p-6 shadow-md"
            >
              <p className="text-sm font-semibold text-gray-400">
                Phase 0{idx + 1}
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {event.year}
              </h3>
              <p className="text-base font-semibold text-gray-800">
                {event.summary}
              </p>
              <p className="text-gray-600">{event.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
