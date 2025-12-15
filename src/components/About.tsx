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
      value: "5+",
      description: "Full-Stack & 3D"
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
      value: "Employed",
      description: "3D Web Developer @ Tiki tech"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            Profile Summary
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-5xl mx-auto px-4">
            Full-Stack Developer with hands-on experience building SaaS platforms featuring real-time 3D product configurators and asset management systems. Skilled in React, Node.js, Express, MongoDB, React Three Fiber, Three.js, AWS S3, and JWT authentication. Strong focus on creating secure, scalable, and user-centric applications with optimized performance, clean architecture, and responsive UI. Passionate about solving real-world problems using modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 lg:space-y-6 animate-fade-in order-2 lg:order-1">

            <div className="space-y-3 lg:space-y-4">
              <div className="border-l-4 border-primary pl-3 sm:pl-4">
                <h4 className="font-semibold text-purple-200 text-sm sm:text-base">Current Role</h4>
                <p className="text-gray-100 text-xs sm:text-sm">
                  <strong>Tiki Tech – Junior Full Stack Developer</strong> (November 2025 – Present)<br />
                  • Developing a SaaS platform using MERN with role-based access, REST APIs, JWT auth, and AWS S3 storage.<br />
                  • Building 3D visualization features using React Three Fiber & Three.js to enhance product configuration.<br />
                  • Creating secure, scalable applications with optimized performance and responsive UI.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-3 sm:pl-4">
                <h4 className="font-semibold text-purple-200 text-sm sm:text-base">Training Experience</h4>
                <p className="text-gray-100 text-xs sm:text-sm">
                  <strong>Tiki Tech – Developer Trainee</strong> (Aug 2025 – Oct 2025)<br />
                  • Assisted in building 3D configurators using React, Three.js & R3F for enterprise demos.<br />
                  • Enhanced GLTF/GLB assets and WebXR previews, reducing 3D model load time by ~35%.<br />
                  • Improved AR/VR rendering smoothness across devices with optimized asset handling.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-slide-up order-1 lg:order-2">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-3 sm:p-4 lg:p-6">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-primary rounded-lg mb-2 sm:mb-3 lg:mb-4">
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-200 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-primary mb-1">
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