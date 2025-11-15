import { Card, CardContent } from "@/components/ui/card";
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
      email: "lahirufirst1@gmail.com",
      image: Lahiru,
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 hover:border-black"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 md:p-8">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-black text-white rounded-full p-2 shadow-lg">
                      <User size={20} />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center gap-4">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase size={16} className="text-gray-500" />
                      <span className="text-lg font-semibold text-black">
                        {member.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap size={16} className="text-gray-500" />
                      <span className="text-gray-700 font-medium">
                        {member.position}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex-1">
                      <Mail size={18} className="text-black shrink-0" />
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-700 hover:text-black transition-colors font-medium break-all"
                      >
                        {member.email}
                      </a>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-black text-white hover:bg-gray-800 flex-shrink-0">
                          View Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[640px] max-h-[85vh] overflow-y-auto rounded-2xl">
                        <DialogHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <DialogTitle className="text-2xl">
                                {member.name}
                              </DialogTitle>
                              <DialogDescription className="text-base">
                                {member.role} · {member.position}
                              </DialogDescription>
                            </div>
                            <div className="text-sm text-gray-500">
                              <span className="font-semibold text-black">
                                Experience Summary
                              </span>
                              <p>Full-stack Delivery & Leadership</p>
                            </div>
                          </div>
                        </DialogHeader>

                        <div className="space-y-5">
                          {member.expertise.map((section, sectionIndex) => (
                            <div
                              key={sectionIndex}
                              className="rounded-xl border border-gray-100 bg-gray-50/60 p-4"
                            >
                              <h4 className="text-lg font-semibold mb-3 text-black">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.points.map((point, pointIndex) => (
                                  <li
                                    key={pointIndex}
                                    className="flex items-start gap-2 text-gray-700 leading-relaxed"
                                  >
                                    <span className="mt-1 h-2 w-2 rounded-full bg-black"></span>
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Join Our Team Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 md:p-12 rounded-2xl text-center border-2 border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We're always looking for talented individuals to join our growing
            team. If you're passionate about technology and innovation, we'd
            love to hear from you.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
            Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
}
