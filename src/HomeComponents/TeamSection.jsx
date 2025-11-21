import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, User, Briefcase, GraduationCap } from "lucide-react";
import Lahiru from "../assets/lahiru.jpg";
import Pasindu from "../assets/pasindu.jpeg";
import ayodya from "../assets/ayodya.jpeg";

export default function TeamSection() {
  // Team Members
  const teamMembers = [
    {
      name: "Kanishka Pasindu Mudithananda",
      role: "CEO & Founder",
      position: "Fullstack Software Engineer, Web Developer",
      bio: "Completed Higher Diploma in Computing and Software Engineering at Cardiff Metropolitan University in UK. Currently following a BSc in Computing and Software Engineering.",
      email: "kanishkapasindu6@gmail.com",
      image: Pasindu,
      expertise: [
        {
          title: "Programming Languages & Frameworks",
          points: [
            "HTML5, CSS3, JavaScript (ES6+), TypeScript",
            "React.js, Next.js, Node.js, Express.js",
            "PHP, Java",
            "Frontend, Backend & Full-Stack Development",
          ],
        },
        {
          title: "Databases",
          points: [
            "MongoDB, MySQL, Firebase, Supabase",
            "Database design & architecture",
            "CRUD operations & data modeling",
          ],
        },
        {
          title: "Version Control",
          points: [
            "Git & GitHub daily workflows",
            "Branching strategies & pull requests",
            "Code reviews & collaboration",
          ],
        },
        {
          title: "Testing",
          points: ["Postman for API testing & automation"],
        },
        {
          title: "Deployment",
          points: [
            "Vercel, Netlify, GitHub Pages",
            "Cloud deployment & CI/CD pipelines",
            "Serverless deployments & monitoring",
          ],
        },
      ],
    },
    {
      name: "Lahiru Lakshan Liyanage",
      role: "Co-Founder",
      position: "Frontend Developer, UI/UX Designer,Backend Developer",
      bio: "Completed Higher Diploma in Computing and Software Engineering at Cardiff Metropolitan University in UK. Currently following a BSc in Computing and Software Engineering.",
      email: "lahirufirst1@gmail.com",
      image: Lahiru,
      expertise: [
        {
          title: "Programming Languages & Frameworks",
          points: [
            "HTML5, CSS3, JavaScript (ES6+), TypeScript",
            "React.js, Next.js, Node.js, Express.js",
            "PHP, Java",
            "Frontend, Backend & Full-Stack Development",
          ],
        },
        {
          title: "Databases",
          points: [
            "MongoDB, MySQL, Firebase, Supabase",
            "Database design & architecture",
            "CRUD operations & data modeling",
          ],
        },
        {
          title: "Version Control",
          points: [
            "Git & GitHub daily workflows",
            "Branching strategies & pull requests",
            "Code reviews & collaboration",
          ],
        },
        {
          title: "Testing",
          points: ["Postman for API testing & automation"],
        },
        {
          title: "Deployment",
          points: [
            "Vercel, Netlify, GitHub Pages",
            "Cloud deployment & CI/CD pipelines",
            "Serverless deployments & monitoring",
          ],
        },
      ],
    },
    {
      name: "Ayodya Pasandul Bandara",
      role: "Frontend Developer",
      position: "Frontend Developer, UI/UX Designer",
      bio: "Completed Higher Diploma in Computing and Software Engineering at Cardiff Metropolitan University in UK. Currently following a BSc in Computing and Software Engineering.",
      email: "ayodyapasandul123@gmail.com",
      image: ayodya,
      expertise: [
        {
          title: "Programming Languages & Frameworks",
          points: [
            "HTML5, CSS3, JavaScript (ES6+), TypeScript",
            "React.js, Next.js,",
            "Frontend, ",
          ],
        },

        {
          title: "Version Control",
          points: [
            "Git & GitHub daily workflows",
            "Branching strategies & pull requests",
            "Code reviews & collaboration",
          ],
        },

        {
          title: "Deployment",
          points: [
            "Vercel, Netlify, GitHub Pages",
            "Cloud deployment & CI/CD pipelines",
            "Serverless deployments & monitoring",
          ],
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#141a2f_0%,_#060b16_55%,_#010307_100%)]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:140px_140px]" />
        <div className="absolute right-10 top-0 h-[360px] w-[360px] rounded-full bg-purple-500/20 blur-[140px]" />
        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[180px]" />
      </div>

      <div className="relative z-10 space-y-16">
        <div className="text-center space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.6em] text-emerald-200/70">
            Our operators
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Humans behind the launch console.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Meet the engineers, designers, and delivery leads building software
            with a product-obsessed mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.email}
              className="group relative rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_120px_-60px_rgba(14,165,233,0.9)] backdrop-blur transition hover:-translate-y-1 hover:border-emerald-200/60"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-48 w-full rounded-2xl object-cover shadow-lg shadow-black/50"
                    />
                    <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-4 py-2 text-sm font-medium text-black shadow-lg">
                      <User size={16} />
                      Lead
                    </span>
                  </div>
                </div>
                <div className="md:w-2/3 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/50">
                      Partner
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {member.name}
                    </h3>
                  </div>
                  <div className="space-y-2 text-white/70">
                    <div className="flex items-center gap-2 text-base font-semibold text-white">
                      <Briefcase size={16} className="text-emerald-300" />
                      {member.role}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap size={16} className="text-cyan-300" />
                      {member.position}
                    </div>
                  </div>
                  <p className="text-white/70">{member.bio}</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
                    >
                      <Mail size={16} />
                      {member.email}
                    </a>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-5 py-2 text-sm font-semibold text-black hover:opacity-90">
                          View profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[720px] max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#050915] text-white">
                        <DialogHeader>
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <DialogTitle className="text-3xl font-semibold text-white">
                                {member.name}
                              </DialogTitle>
                              <DialogDescription className="text-base text-white/70">
                                {member.role} · {member.position}
                              </DialogDescription>
                            </div>
                            <div className="text-sm text-white/60">
                              <p className="font-semibold text-white">
                                Focus areas
                              </p>
                              Full-stack delivery & leadership
                            </div>
                          </div>
                        </DialogHeader>

                        <div className="space-y-6">
                          {member.expertise.map((section, sectionIndex) => (
                            <div
                              key={sectionIndex}
                              className="rounded-2xl border border-white/10 bg-white/5 p-5"
                            >
                              <h4 className="text-lg font-semibold text-white">
                                {section.title}
                              </h4>
                              <ul className="mt-3 space-y-2 text-white/80">
                                {section.points.map((point, pointIndex) => (
                                  <li
                                    key={pointIndex}
                                    className="flex items-start gap-2 text-sm leading-relaxed"
                                  >
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/5 via-white/0 to-white/5 p-10 text-center shadow-[0_30px_120px_-60px_rgba(56,189,248,0.6)] backdrop-blur">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
              Careers soon
            </p>
            <h2 className="text-3xl font-semibold text-white">
              We&apos;re assembling the next wave of product talent.
            </h2>
            <p className="text-lg text-white/70">
              If you love owning craft, collaborating with founders, and
              shipping meaningful work, drop us a note. We open new roles in
              product, design, and engineering every quarter.
            </p>
            <Button className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-8 py-6 text-base font-semibold text-black hover:opacity-90">
              Notify me when roles open
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
