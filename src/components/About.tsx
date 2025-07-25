import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Code, Trophy } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: GraduationCap,
      title: "Education",
      value: "B.Tech CSE",
      description: "2021-2025"
    },
    {
      icon: Code,
      title: "Projects",
      value: "3+",
      description: "Learning Projects"
    },
    {
      icon: Users,
      title: "Team Work",
      value: "Collaborative",
      description: "Team Player"
    },
    {
      icon: Trophy,
      title: "Status",
      value: "Fresher",
      description: "Ready to Learn"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            About Me
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-purple-200">
              Hi, I'm Pratik Kanojiya — a fresh Computer Science graduate eager to start my career in web development.
            </h3>
            
            <p className="text-blue-100 leading-relaxed">
              As a fresher, I'm excited to apply my academic knowledge to real-world challenges. 
              I recently completed my B.Tech in Computer Science from United College of Engineering 
              and Management, Prayagraj, and I'm passionate about learning new technologies and 
              building meaningful web applications.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-purple-200">Education</h4>
                <p className="text-gray-100">
                  <strong>B.Tech in Computer Science</strong><br />
                  United College of Engineering and Management, Prayagraj<br />
                  2021–2025
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h4 className="font-semibold text-purple-200">Focus Areas</h4>
                <p className="text-gray-100">
                  Mastering full-stack web development with a focus on the MERN stack and 3D web integration. Eager to build efficient, interactive, and visually engaging applications.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-200 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-1">
                    {stat.title}
                  </p>
                  <p className="text-xs text-gray-100">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;