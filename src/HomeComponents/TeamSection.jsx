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
    <div className="py-2">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Meet the talented individuals behind Zentrix, dedicated to delivering
          innovative software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
        {teamMembers.map((member, index) => (
          <article
            key={member.email}
            className="group relative rounded-[32px] border border-gray-100 bg-white/90 p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/3">
                <div className="relative rounded-3xl bg-gray-50 p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-48 w-full rounded-2xl object-cover shadow-lg"
                  />
                  <span className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg">
                    <User size={16} />
                    Lead
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-400">Partner</p>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2 text-base font-semibold text-gray-900">
                    <Briefcase size={16} className="text-gray-500" />
                    {member.role}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <GraduationCap size={16} className="text-gray-500" />
                    {member.position}
                  </div>
                </div>
                <p className="text-gray-600">{member.bio}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <Mail size={16} />
                    {member.email}
                  </a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-900">
                        View profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[720px] max-h-[85vh] overflow-y-auto rounded-2xl">
                      <DialogHeader>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <DialogTitle className="text-3xl font-semibold text-gray-900">
                              {member.name}
                            </DialogTitle>
                            <DialogDescription className="text-base text-gray-600">
                              {member.role} · {member.position}
                            </DialogDescription>
                          </div>
                          <div className="text-sm text-gray-500">
                            <p className="font-semibold text-gray-900">
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
                            className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5"
                          >
                            <h4 className="text-lg font-semibold text-gray-900">
                              {section.title}
                            </h4>
                            <ul className="mt-3 space-y-2 text-gray-700">
                              {section.points.map((point, pointIndex) => (
                                <li
                                  key={pointIndex}
                                  className="flex items-start gap-2 text-sm leading-relaxed"
                                >
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black" />
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

      <div className="rounded-[32px] border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-100 p-10 text-center shadow-xl">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-sm font-semibold text-gray-500">Careers soon</p>
          <h2 className="text-3xl font-bold text-gray-900">
            We&apos;re assembling the next wave of product talent.
          </h2>
          <p className="text-lg text-gray-600">
            If you love owning craft, collaborating with founders, and shipping
            meaningful work, drop us a note. We open new roles in product,
            design, and engineering every quarter.
          </p>
          <Button className="rounded-full bg-black px-8 py-6 text-base font-semibold text-white hover:bg-gray-900">
            Notify me when roles open
          </Button>
        </div>
      </div>
    </div>
  );
}
