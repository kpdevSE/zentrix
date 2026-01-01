import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetailSection({ project, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project?.id]);

  const {
    id,
    title,
    description,
    image,
    category,
    technologies = [],
    keyFeatures = [],
    projectDetails = {},
  } = project;

  const metrics = [
    {
      label: "Duration",
      value: projectDetails.duration,
      icon: Timer,
    },
    {
      label: "Team Size",
      value: `${projectDetails.teamSize} engineers`,
      icon: Users,
    },
    {
      label: "Client",
      value: projectDetails.clientName,
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#101828_0%,_#050815_55%,_#010407_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/20 via-cyan-400/10 to-transparent blur-[160px]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2 border-white/30 bg-transparent px-0 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white"
        >
          <ArrowRight className="rotate-180" size={16} />
          Back to work index
        </Button>

        <div className="mt-10 space-y-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/30 shadow-[0_30px_140px_-70px_rgba(59,130,246,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
              <img
                src={image}
                alt={title}
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
                  <Badge className="bg-white/20 text-white backdrop-blur">
                    {category}
                  </Badge>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white/80 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Case #{id}
                  </span>
                </div>
                <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg text-white/80">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200/70">
                Engagement snapshot
              </p>
              <p className="mt-4 text-2xl font-semibold text-white">
                Integrated product squad delivering measurable outcomes in
                weeks, not quarters.
              </p>
              <div className="mt-8 space-y-6">
                {metrics.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 border-b border-white/10 pb-4"
                  >
                    <div className="rounded-full border border-white/10 bg-white/5 p-3 text-emerald-200">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white/60">
                        {label}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {technologies.length > 0 && (
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200/70">
                Stack decisions
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={`${id}-${tech}`}
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-14 lg:grid-cols-2">
            <div className="space-y-10">
              {[
                { label: "Challenge", content: projectDetails.challenge },
                { label: "Solution", content: projectDetails.solution },
                { label: "Outcome", content: projectDetails.outcome },
              ].map(({ label, content }, index) => (
                <div key={label} className="relative pl-10">
                  <div className="absolute left-0 top-2 flex h-full flex-col items-center">
                    <div className="h-5 w-5 rounded-full border border-emerald-300 bg-white/10" />
                    {index < 2 && (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-emerald-300/60 to-transparent" />
                    )}
                  </div>
                  <p className="text-base font-semibold uppercase tracking-[0.2em] text-white/60">
                    {label}
                  </p>
                  <p className="mt-3 text-lg text-white/80">{content}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-white">
                  Key initiatives
                </p>
                <span className="text-sm font-medium text-white/60">
                  {keyFeatures.length} deliverables
                </span>
              </div>
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={`${id}-feature-${index}`}
                    className="flex items-start gap-4 border-t border-white/10 pt-4"
                  >
                    <span className="text-sm font-semibold text-white/50">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-white/80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Next engagement
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Let&apos;s architect your next release with the same rigor and
                velocity.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-8 py-3 text-black hover:opacity-90">
                Start a project
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/30 px-8 py-3 text-black hover:bg-white/10"
              >
                Download credentials
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
