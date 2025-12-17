import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Github, Linkedin, Mail } from "lucide-react";
import ThreeSolarSystem from './ThreeSolarSystem';

const profileImage = "/mypic.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16">
      {/* 3D Solar System Background */}
      <ThreeSolarSystem />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Content */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1 text-center lg:text-left pt-8 lg:pt-0">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                    Pratik Kanojiya
                  </span>{" "}
                  <br />
                  <span className="text-yellow-300 text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold whitespace-nowrap">Full-Stack Developer · Three.js Developer</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-cyan-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  I craft scalable full-stack applications with React, Node.js, and MongoDB—plus immersive 3D experiences using Three.js and WebXR. Specialized in AR/WebXR product configurators and production-ready MERN applications.
                </p>
              </div>

              {/* Experience Badge */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-700 via-blue-800 to-purple-900/80 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-cyan-100 border border-cyan-400/30 shadow-lg">
                  <span className="text-lg sm:text-xl font-bold mr-2 text-cyan-300">💻</span>
                  <span className="text-xs sm:text-sm font-medium">Full-Stack MERN</span>
                </div>
                <div className="inline-flex items-center bg-gradient-to-r from-purple-700 via-blue-800 to-cyan-900/80 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-cyan-100 border border-purple-400/30 shadow-lg">
                  <span className="text-lg sm:text-xl font-bold mr-2 text-yellow-300">🎨</span>
                  <span className="text-xs sm:text-sm font-medium">3D · AR/WebXR</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToProjects}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white hover:from-cyan-300 hover:to-purple-400 border-0 group font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 btn-glow-hover"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white hover:from-cyan-300 hover:to-purple-400 border-0 group font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 btn-glow-hover"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 sm:space-x-5 justify-center lg:justify-start">
                <a
                  href="https://linkedin.com/in/pratik-kanojiya-060250252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300 shadow-lg hover:shadow-xl icon-rotate-hover"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://github.com/skullpratik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300 shadow-lg hover:shadow-xl icon-rotate-hover"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="mailto:pratikkanojiya9324@gmail.com"
                  className="p-3 sm:p-4 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300 shadow-lg hover:shadow-xl icon-rotate-hover"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in mt-4 lg:mt-0 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-lg opacity-30 scale-110"></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-card">
                  <img
                    src={profileImage}
                    alt="Pratik Kanojiya"
                    className="w-full h-full object-cover scale-150 object-center"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-full p-3 sm:p-4 shadow-card animate-float">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary">B.Tech</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Computer Science</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;