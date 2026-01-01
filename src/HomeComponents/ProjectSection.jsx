import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const highlightStats = [
  { label: "Projects delivered", value: "35+" },
  { label: "Industries served", value: "12" },
  { label: "Avg. delivery", value: "4 weeks" },
  { label: "Client retention", value: "92%" },
];

export default function ProjectSection({
  projects,
  selectedCategory,
  setSelectedCategory,
  onProjectClick,
}) {
  const categories = [
    "All",
    "Software Development",
    "Custom Portfolio",
    "Technical Assignments",
  ];

  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#141b2f_0%,_#070c17_55%,_#010307_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute left-10 top-0 h-[360px] w-[360px] rounded-full bg-emerald-400/20 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[160px]" />
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:120px_120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-200/70">
              Case studies
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Tailored digital products with measurable outcomes.
            </h2>
            <p className="text-lg text-white/70">
              Every project starts with a real business problem. We pair
              human-centered design with engineering discipline, AI copilots,
              and automation to ship meaningful software faster.
            </p>
          </div>
          <div className="grid flex-shrink-0 grid-cols-2 gap-4 sm:gap-6">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-[0_25px_80px_-50px_rgba(16,185,129,0.8)] backdrop-blur"
              >
                <div className="text-3xl font-semibold text-white">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "border-emerald-400/80 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black shadow-lg shadow-emerald-500/30"
                  : "border-white/20 bg-white/10 text-white/80 hover:border-white/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.length === 0 && (
            <div className="col-span-full rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center">
              <p className="text-lg font-semibold text-white">
                No projects in this category yet.
              </p>
              <p className="mt-2 text-white/60">
                Try selecting another filter to explore our recent work.
              </p>
            </div>
          )}

          {projects.map((project) => {
            const techStack = (project.technologies || []).filter(Boolean);
            const extraTechCount =
              techStack.length > 3 ? techStack.length - 3 : 0;

            return (
              <Card
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_120px_-60px_rgba(59,130,246,0.9)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/60"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    In production
                  </div>
                </div>

                <CardHeader className="space-y-5 text-white">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <Badge className="bg-white/20 text-white backdrop-blur">
                      {project.category}
                    </Badge>
                    <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-emerald-300">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to scale
                    </span>
                  </div>

                  <div>
                    <CardTitle className="text-2xl text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base leading-relaxed text-white/70">
                      {project.description}
                    </CardDescription>
                  </div>

                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {techStack.slice(0, 3).map((tech) => (
                        <span
                          key={`${project.id}-${tech}`}
                          className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {extraTechCount > 0 && (
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                          +{extraTechCount} more
                        </span>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardFooter className="mt-auto pt-0">
                  <Button
                    onClick={() => onProjectClick(project)}
                    className="w-full gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black hover:opacity-90"
                  >
                    Dive into the build
                    <ArrowRight size={18} />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-8 py-10 text-center shadow-[0_25px_100px_-60px_rgba(14,165,233,0.9)] backdrop-blur">
          <p className="text-lg font-semibold text-white">
            Have a challenge we can solve together?
          </p>
          <p className="mt-2 text-white/70">
            Share your idea and we&apos;ll craft a roadmap, strategy, and team
            to bring it to market.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 text-black hover:opacity-90">
              Start a project
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Download capabilities deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
