import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, User, Briefcase, GraduationCap } from "lucide-react";
import Lahiru from "../assets/lahiru.jpg";
import Pasindu from "../assets/pasindu.jpeg";

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
    },
    {
      name: "Lahiru Lakshan Liyanage",
      role: "Co-Founder",
      position: "Frontend Developer, UI/UX Designer",
      bio: "Completed Higher Diploma in Computing and Software Engineering at Cardiff Metropolitan University in UK. Currently following a BSc in Computing and Software Engineering.",
      email: "lahirufirst1@gmail.com",
      image: Lahiru,
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
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
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

                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail size={18} className="text-black" />
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-700 hover:text-black transition-colors font-medium"
                    >
                      {member.email}
                    </a>
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
