import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181824] text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-secondary bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer"
            >
              Pratik Kanojiya
            </button>
            <p className="text-background/70 mt-2 text-sm">
              Full Stack MERN Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/pratik-kanojiya-060250252"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/skullpratik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:pratikkanojiya9324@gmail.com"
              className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-background/70 text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" />{" "}
              by Pratik Kanojiya
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-xs">
            Built with React.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;