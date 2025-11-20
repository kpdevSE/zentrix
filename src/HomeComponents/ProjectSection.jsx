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
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute -top-10 right-10 h-48 w-48 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-gray-200/40 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
              Case studies
            </p>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Tailored digital products with measurable outcomes
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Every project starts with a real business problem. We pair
              human-centered design with engineering discipline to ship
              meaningful software faster.
            </p>
          </div>
          <div className="grid flex-shrink-0 grid-cols-2 gap-4 sm:gap-6">
            {highlightStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/60 bg-white/90 p-5 text-center shadow-lg shadow-black/5 backdrop-blur"
              >
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
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
                  ? "border-black bg-black text-white shadow-sm"
                  : "border-gray-200 bg-white/70 text-gray-700 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.length === 0 && (
            <div className="col-span-full rounded-3xl border border-dashed border-gray-200 bg-white/70 p-12 text-center">
              <p className="text-lg font-semibold text-gray-700">
                No projects in this category yet.
              </p>
              <p className="mt-2 text-gray-500">
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
                className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white/90 shadow-xl shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    In production
                  </div>
                </div>

                <CardHeader className="space-y-5">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <Badge className="bg-gray-900 text-white">
                      {project.category}
                    </Badge>
                    <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-emerald-500">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready to scale
                    </span>
                  </div>

                  <div>
                    <CardTitle className="text-2xl text-gray-900">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base leading-relaxed text-gray-600">
                      {project.description}
                    </CardDescription>
                  </div>

                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {techStack.slice(0, 3).map((tech) => (
                        <span
                          key={`${project.id}-${tech}`}
                          className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {extraTechCount > 0 && (
                        <span className="rounded-full bg-gray-900/5 px-3 py-1 text-xs font-semibold text-gray-700">
                          +{extraTechCount} more
                        </span>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardFooter className="mt-auto pt-0">
                  <Button
                    onClick={() => onProjectClick(project)}
                    className="w-full gap-2 rounded-2xl bg-gray-900 text-white hover:bg-black"
                  >
                    Dive into the build
                    <ArrowRight size={18} />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-gray-200 bg-white px-8 py-10 text-center shadow-lg">
          <p className="text-lg font-semibold text-gray-900">
            Have a challenge we can solve together?
          </p>
          <p className="mt-2 text-gray-600">
            Share your idea and we&apos;ll craft a roadmap, strategy, and team
            to bring it to market.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button className="bg-black text-white hover:bg-gray-900">
              Start a project
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              Download capabilities deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
