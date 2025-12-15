import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181824] text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-xl sm:text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
            >
              Pratik Kanojiya
            </button>
            <p className="text-background/70 mt-2 text-xs sm:text-sm">
              3D Web Developer & Full-Stack Engineer (MERN · Three.js · WebXR)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="https://linkedin.com/in/pratik-kanojiya-060250252"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://github.com/skullpratik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:pratikkanojiya9324@gmail.com"
              className="p-2 sm:p-3 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/70 text-xs sm:text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with{" "}
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-red-400 animate-pulse" />{" "}
              by Pratik Kanojiya
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-background/60 text-xs">
            Built with React, TypeScript, Tailwind, and Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;