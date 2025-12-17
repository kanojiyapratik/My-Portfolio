import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useState } from "react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const projects = [
    {
      title: "3D Model Configuration SaaS Platform (Tikitech - Enterprise Project)",
      description:
        "Comprehensive full-stack SaaS platform for 3D model configuration and management. Built from scratch as an independent project during 3-month training period, featuring multi-tenant architecture, role-based access control, real-time 3D visualization, and cloud deployment.",
      status: "Completed",
      statusColor: "bg-blue-600",
      icon: Clock,
      technologies: [
        "React",
        "React Three Fiber",
        "Three.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS S3",
        "SendGrid",
        "JWT",
        "Tailwind CSS"
      ],
      features: [
        "Multi-User Role System: Admin, Manager, Employee, and custom role combinations with granular permissions.",
        "3D Viewer & Configuration: React Three Fiber + Three.js for interactive model manipulation (rotation, zoom, pan).",
        "Dynamic UI Widgets: Real-time configuration tools for doors, drawers, textures, lighting, and material customization.",
        "Authentication & Security: JWT-based auth, bcrypt password hashing, role-based access control (RBAC), password reset with OTP.",
        "Model Management: Upload, manage, and delete 3D models with AWS S3 integration and automatic asset cleanup.",
        "Configuration Persistence: Save/load user customizations with texture files and real-time collaboration features.",
        "Activity Logging & Audit Trails: Tamper-evident hashing for complete activity monitoring and accountability.",
        "Email Integration: SendGrid/Nodemailer for notifications, password resets, and user communications.",
        "Admin Dashboard: Complete user management, analytics, and system monitoring capabilities.",
        "Cloud Deployment: Production-ready setup on Render with proper environment configuration.",
        "Full-Stack: Handled all technical decisions independently with minimal guidance—requirements to deployment.",
        "October 2024 – Present"
      ],
      github: "",
      live: "",
      screenshots: [
        "3dsaas1.png",
        "3dsaas2.png",
        "3dsaas3.png",
        "3dsaas4.png",
      ],
    },
    {
      title: "SKLdrycleaner's – Online Laundry Service Platform",
      description:
        "Production-ready full-stack web application digitizing laundry services with scalable backend, interactive frontend, and real-time order management—enhancing customer engagement and operational efficiency.",
      status: "Completed",
      statusColor: "bg-green-500",
      icon: Clock,
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      features: [
        "RESTful Backend: Express.js server with middleware, authentication, and scalable API routes.",
        "Database Design: MongoDB with Mongoose ODM for efficient data modeling and queries.",
        "State Management: Redux for centralized, predictable state and seamless data flow.",
        "Production-Ready UI: Fully responsive React frontend with Tailwind CSS for modern UX.",
        "Real-time Features: Service requests, order tracking, and customer interaction in a unified platform.",
        "Performance: Mobile-first design with optimized load times across all devices.",
        "June 2025 – August 2025"
      ],
      github: "https://github.com/skullpratik/Online-laundry-service",
      live: "https://6873481af0a864273768c3ec--amazing-monstera-60ff65.netlify.app/",
      screenshots: [
        "laundry1.png",
        "laundry2.png",
        "laundry3.png",
        "laundry4.png",
      ],
    },
    {
      title: "Industrial 3D Product Configurator (Western Refrigeration Limited – Client Project @ TikiTech)",
      description:
        "Responsive web-based 3D configurator enabling real-time customization of commercial refrigeration models (Visi Coolers, Deep Freezers, and more) for Western Refrigeration Limited.",
      status: "Completed",
      statusColor: "bg-green-500",
      icon: Clock,
      technologies: [
        "React",
        "React Three Fiber",
        "Three.js",
        "Blender",
        "WebXR",
        "MUI",
        "Tailwind CSS"
      ],
      features: [
        "GLTF/GLB model optimization (from Blender) for fast loading and high fidelity across desktop, mobile, and AR.",
        "Modular UI panels with MUI + Tailwind for model switching and instant configuration updates (no reloads).",
        "Immersive AR/WebXR to visualize products in real-world settings via the browser.",
        "Advanced camera controls, dynamic lighting, and environment maps for photorealistic presentation.",
        "Cross-device responsiveness and performance optimization for a polished UX.",
        "August 2025 – October 2025"
      ],
      github: "https://github.com/skullpratik/3D-configurator",
      live: "https://3drefridgerator5.vercel.app/",
      screenshots: [
        "demo1.png",
        "demo2.png",
        "demo3.png",
        "demo4.png",
      ],
    },
  ];

  return (
    <section id="projects" className="py-10 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            My Projects
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Showcasing full-stack MERN applications and immersive 3D web experiences—from scalable backend systems to interactive frontends and AR/WebXR visualizations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in group project-card-float
                ${index === 0 ? 'lg:col-span-2 border-2 border-blue-500/60 shadow-xl relative bg-white/20 backdrop-blur-2xl glow-pulse' : ''}
                ${index === 1 ? 'lg:col-span-2 border-2 border-green-400/60 shadow-xl relative' : ''}
                ${index === 2 ? 'lg:col-span-2 border-2 border-orange-400/60 shadow-xl relative' : ''}`}
            >
              {/* 1. Centered Heading */}
              <div className="w-full text-center pt-4 pb-2 px-4 relative">
                <CardTitle className="text-xl sm:text-2xl font-bold text-cyan-200 pr-16 sm:pr-0">{project.title}</CardTitle>
                {index === 0 && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded bg-blue-300 text-blue-900 shadow-sm animate-pulse ml-2">Enterprise SaaS</span>
                )}
                {index === 1 && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded bg-green-300 text-green-900 shadow-sm animate-pulse ml-2">Full-Stack MERN</span>
                )}
                {index === 2 && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded bg-orange-300 text-orange-900 shadow-sm animate-pulse ml-2">3D Specialist</span>
                )}
              </div>
              {/* 2. Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${project.statusColor}`}>
                  <project.icon className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">{project.status}</span>
                  <span className="sm:hidden">•</span>
                </div>
              </div>

              {/* 3. Main Content Row: Left (content), Right (screenshots) */}
              <div className="flex flex-col lg:flex-row gap-4 px-2 pb-4">
                {/* Left: Content */}
                <div className="flex-1 min-w-0 space-y-2 pl-4 lg:pl-20 pb-8 order-2 lg:order-1">
                  {/* Description */}
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-200 mb-1">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, expandedProject === index ? project.features.length : 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-blue-100">
                          <span className={`w-2 h-2 rounded-full mr-2 flex-shrink-0 ${index === 0 ? 'bg-blue-300' : index === 1 ? 'bg-green-300' : 'bg-orange-300'}`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {project.features.length > 2 && (
                      <button
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="mt-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 flex items-center gap-1 transition-colors"
                      >
                        {expandedProject === index ? 'Show Less' : `Read More (+${project.features.length - 2})`}
                        <ChevronDown className={`w-3 h-3 transition-transform ${expandedProject === index ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-200 mb-1">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 rounded bg-purple-200/40 text-purple-100 text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(project.github || project.live) && (
                    <div className="flex space-x-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Button>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button size="sm" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                  {(!project.github && !project.live) && (
                    <p className="text-xs text-gray-400 italic pt-2">
                      Confidential project - Links unavailable
                    </p>
                  )}
                </div>

                {/* Right: Screenshot Carousel (render only if screenshots exist) */}
                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="flex-1 min-w-0 flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
                      <Carousel className="w-full" plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}>
                        <CarouselContent>
                          {project.screenshots.map((src, i) => (
                            <CarouselItem key={i} className="inline-flex items-center justify-center p-0 m-0">
                              <img
                                src={`/${src}`}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className={`rounded-2xl shadow-lg h-80 w-full object-fill max-w-xl border ${index === 0 ? 'border-blue-400/30' : index === 1 ? 'border-green-400/30' : 'border-orange-400/30'} bg-white/10`}
                              />
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className={`!left-2 ${index === 0 ? 'bg-blue-500 text-white ring-2 ring-white' : index === 1 ? 'bg-green-500 text-white ring-2 ring-white' : 'bg-orange-500 text-white ring-2 ring-white'}`} />
                        <CarouselNext className={`!right-2 ${index === 0 ? 'bg-blue-500 text-white ring-2 ring-white' : index === 1 ? 'bg-green-500 text-white ring-2 ring-white' : 'bg-orange-500 text-white ring-2 ring-white'}`} />
                      </Carousel>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/skullpratik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="group">
              <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
