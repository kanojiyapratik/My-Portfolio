import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";
const profileImage = "/lovable-uploads/37b42b33-ab28-49d7-9dce-4ccf5b67270e.png";

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

  useEffect(() => {
    const canvas = document.getElementById("hero-bg-canvas") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = document.getElementById("home")?.offsetHeight || window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Solar system parameters
    const sun = { x: () => canvas.width / 2, y: () => canvas.height / 2, r: 40 };
    const planets = [
      { r: 8, orbit: 80, speed: 0.004, color: "#4fc3f7", angle: 0 },
      { r: 12, orbit: 140, speed: 0.0025, color: "#ffd54f", angle: 1 },
      { r: 6, orbit: 200, speed: 0.0015, color: "#81c784", angle: 2 },
    ];

    function drawUniverse() {
      // Background
      ctx.fillStyle = "#0a0a23";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Stars
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = "rgba(255,255,255," + Math.random() * 0.8 + ")";
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1.2, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    function drawSun() {
      ctx.save();
      ctx.shadowColor = "#fffde4";
      ctx.shadowBlur = 40;
      ctx.beginPath();
      ctx.arc(sun.x(), sun.y(), sun.r, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffe066";
      ctx.fill();
      ctx.restore();
    }

    function drawPlanets(time) {
      planets.forEach((planet, i) => {
        const angle = planet.angle + time * planet.speed;
        const x = sun.x() + Math.cos(angle) * planet.orbit;
        const y = sun.y() + Math.sin(angle) * planet.orbit;
        ctx.beginPath();
        ctx.arc(x, y, planet.r, 0, 2 * Math.PI);
        ctx.fillStyle = planet.color;
        ctx.shadowColor = planet.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        // Orbit path
        ctx.beginPath();
        ctx.arc(sun.x(), sun.y(), planet.orbit, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(255,255,255,0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    }

    function animate(time) {
      drawUniverse();
      drawSun();
      drawPlanets(time);
      animationId = requestAnimationFrame(animate);
    }
    animate(0);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16">
      {/* 3D Solar System Background */}
      {/* Canvas Background */}
      <canvas
        id="hero-bg-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-primary/20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-accent/20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Hello, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                    Pratik Kanojiya
                  </span>{" "}
                  <br />
                  <span className="text-yellow-300 text-2xl sm:text-3xl lg:text-4xl font-semibold">Full Stack MERN Developer & 3D Web Integrator</span>
                </h1>
                <p className="text-base sm:text-lg text-cyan-100 max-w-2xl">
                  Full Stack MERN & 3D Web Developer building modern web applications with integrated interactive 3D models. Passionate about creating dynamic, user-friendly, and visually stunning digital experiences.
                </p>
              </div>

              {/* Experience Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-700 via-blue-800 to-purple-900/80 backdrop-blur-sm rounded-full px-4 py-2 text-cyan-100 border border-cyan-400/30">
                <span className="text-2xl font-bold mr-2 text-yellow-300">1+</span>
                <span className="text-sm">Year Experience</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToProjects}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white hover:from-cyan-300 hover:to-purple-400 border-0 group font-bold"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white hover:from-cyan-300 hover:to-purple-400 border-0 group font-bold"
                >
                  <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/pratik-kanojiya-060250252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/skullpratik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:pratikkanojiya9324@gmail.com"
                  className="p-3 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in mt-8">




              <div className="relative">
                <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-lg opacity-30 scale-110"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-card">
                  <img
                    src={profileImage}
                    alt="Pratik Kanojiya"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-card animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">B.Tech</div>
                    <div className="text-sm text-muted-foreground">Computer Science</div>
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