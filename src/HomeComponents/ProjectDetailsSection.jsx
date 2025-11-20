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
    <section className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-60 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2 border-transparent bg-transparent px-0 text-sm font-semibold text-gray-500 hover:text-black"
        >
          <ArrowRight className="rotate-180" size={16} />
          Back to work index
        </Button>

        <div className="mt-10 space-y-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[40px]">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
              <img
                src={image}
                alt={title}
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/80">
                  <Badge className="bg-white/90 text-gray-900">
                    {category}
                  </Badge>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Case #{id}
                  </span>
                </div>
                <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg text-white/90">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center border-l border-dashed border-gray-300 pl-8">
              <p className="text-sm font-semibold text-gray-500">
                Engagement snapshot
              </p>
              <p className="mt-4 text-2xl font-semibold text-gray-900">
                Integrated product squad delivering measurable outcomes in
                weeks, not quarters.
              </p>
              <div className="mt-8 space-y-6">
                {metrics.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 border-b border-gray-200 pb-4"
                  >
                    <div className="rounded-full border border-gray-200 p-3 text-gray-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        {label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900">
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
              <p className="text-sm font-semibold text-gray-500">
                Stack decisions
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={`${id}-${tech}`}
                    className="border border-gray-200 px-5 py-2 text-sm font-medium text-gray-700"
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
                    <div className="h-5 w-5 rounded-full border border-black bg-white" />
                    {index < 2 && (
                      <div className="mt-2 h-full w-px bg-gradient-to-b from-black to-transparent" />
                    )}
                  </div>
                  <p className="text-base font-semibold text-gray-600">
                    {label}
                  </p>
                  <p className="mt-3 text-lg text-gray-800">{content}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-gray-600">
                  Key initiatives
                </p>
                <span className="text-sm font-medium text-gray-400">
                  {keyFeatures.length} deliverables
                </span>
              </div>
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={`${id}-feature-${index}`}
                    className="flex items-start gap-4 border-t border-gray-200 pt-4"
                  >
                    <span className="text-sm font-semibold text-gray-400">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-gray-900">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-gray-200 pt-10">
            <div>
              <p className="text-sm font-semibold text-gray-500">
                Next engagement
              </p>
              <p className="mt-3 text-2xl font-semibold text-gray-900">
                Let&apos;s architect your next release with the same rigor and
                velocity.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-none bg-black px-8 py-3 text-white hover:bg-black/90">
                Start a project
              </Button>
              <Button
                variant="outline"
                className="rounded-none border-gray-300 px-8 py-3 text-gray-900 hover:bg-gray-100"
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
