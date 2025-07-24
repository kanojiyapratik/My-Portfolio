import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, Recycle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "SKLdrycleaner's – Online Laundry Service Platform",
      description:
        "A full-stack MERN web application built for SKLdrycleaner's, streamlining laundry service management for both customers and admins. The platform enables users to register, book services, track orders, and make payments online, while providing admins with a powerful dashboard to manage bookings and business operations. Designed with a modern, mobile-friendly UI and a focus on automation, SKLdrycleaner's brings local laundry services into the digital age.",
      status: "In Progress",
      statusColor: "bg-orange-500",
      icon: Clock,
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "Customer registration & secure login",
        "Online booking and real-time order tracking",
        "Integrated payment system",
        "Admin dashboard for managing all bookings and payments",
        "Clean, responsive, and user-friendly interface",
      ],
      github: "https://github.com/skullpratik/Online-laundry-service",
      live: "https://6873481af0a864273768c3ec--amazing-monstera-60ff65.netlify.app/",
      screenshots: [
        "/Screenshot 2025-07-24 203844.png",
        "/Screenshot 2025-07-24 204155.png",
        "/Screenshot 2025-07-24 204255.png",
        "/Screenshot 2025-07-24 204518.png",
      ],
    },
    {
      title: "PasteX – Modern Paste Application",
      description:
        "PasteX is a sleek, modern web application for creating, editing, and managing text snippets (\"pastes\") right in your browser. Built with React, Redux, and Tailwind CSS, PasteX features a beautiful dark UI, glassmorphism effects, instant search, and a focus on privacy. All your pastes are stored locally for speed and security—no accounts, no servers, just you and your notes.",
      status: "Completed",
      statusColor: "bg-green-500",
      icon: Recycle,
      technologies: ["React.js (Vite)", "Redux Toolkit", "Tailwind CSS", "Lucide Icons", "React Hot Toast"],
      features: [
        "Create, edit, and view pastes instantly",
        "Modern dark UI with glassmorphism",
        "Instant search and one-click copy",
        "Local storage for privacy—no accounts needed",
        "Responsive and animated design",
      ],
      github: "https://github.com/skullpratik/paste-application",
      live: "https://steady-blancmange-d8e627.netlify.app/",
      screenshots: [
        "/pastex-1.png",
        "/pastex-2.png",
      ],
    },
    {
      title: "3D Advertisement with Responsive Webpage",
      description:
        "Developed a dynamic and fully responsive 3D product visualization interface using Three.js, enabling users to interact with 3D models in real-time within a clean and intuitive web environment.",
      status: "Completed",
      statusColor: "bg-green-500",
      icon: Clock, // You can change this to another icon if you prefer
      technologies: ["HTML", "CSS", "JavaScript", "Three.js", "Blender"],
      features: [
        "Integrated optimized GLB/GLTF models exported from Blender for efficient rendering and performance.",
        "Implemented custom camera controls, lighting effects, and precise model positioning to elevate visual engagement.",
        "Built a modular UI panel to dynamically switch models and configurations without page reloads, enhancing user experience and flexibility.",
        "Focused on performance optimization, cross-browser compatibility, and responsive design across devices.",
        "June 2023 – July 2023"
      ],
      github: "https://github.com/skullpratik/Refridgerator--3d",
      live: "https://refridgerator-3d.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            My Projects
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Here are the major projects I've worked on during my learning journey as a fresher developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in group
                ${index === 0 ? 'lg:col-span-2 border-2 border-yellow-400/60 shadow-xl relative' : ''}
                ${index === 1 ? 'border-2 border-blue-400/60 shadow-lg relative bg-white/20 backdrop-blur-2xl' : ''}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-cyan-200 group-hover:text-yellow-300 transition-colors">
                        {project.title}
                      </CardTitle>
                      {index === 1 && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded bg-blue-300 text-blue-900 shadow-sm animate-pulse ml-2">Modern App</span>
                      )}
                      {index === 0 && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-bold rounded bg-yellow-300 text-yellow-900 shadow-sm animate-pulse ml-2">Featured Project</span>
                      )}
                    </div>
                  </div>
                  <Badge className={`${project.statusColor} text-white`}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Screenshot Carousel for PasteX Project */}
                {index === 1 && project.screenshots && (
                  <div className="mb-4">
                    <Carousel className="relative w-full max-w-xl mx-auto">
                      <CarouselContent>
                        {project.screenshots.map((src, i) => (
                          <CarouselItem key={i} className="flex justify-center items-center">
                            <img
                              src={src}
                              alt={`PasteX screenshot ${i + 1}`}
                              className="rounded-lg shadow-lg object-contain max-h-56 w-full border border-blue-400/30 bg-white/10"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                )}
                <p className="text-blue-100 leading-relaxed text-lg">
                  {index === 0 ? (
                    <>
                      <span className="font-semibold text-yellow-200">SKLdrycleaner's</span> is a full-stack MERN web application that transforms traditional laundry services into a seamless digital experience. Customers can register, book services, track orders, and pay online, while admins manage all bookings and business operations from a powerful dashboard. The platform is designed for real-world business needs, with a focus on automation, security, and a modern, mobile-friendly UI.
                    </>
                  ) : index === 1 ? (
                    <>
                      <span className="font-semibold text-blue-200">PasteX</span> is a modern, privacy-first paste manager for quickly creating, editing, and searching text snippets in your browser. Enjoy a beautiful dark UI, glassmorphism effects, and instant usability—no accounts, no servers, just you and your notes.
                    </>
                  ) : project.description}
                </p>
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-purple-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 rounded bg-purple-200/40 text-purple-100 text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-purple-200 mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-blue-100">
                        <span className="w-2 h-2 bg-purple-300 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Business Impact Section */}
                {index === 0 && (
                  <div className="bg-cyan-900/30 border-l-4 border-yellow-300 p-4 rounded-lg shadow-inner">
                    <h4 className="text-yellow-200 font-semibold mb-1">Business Impact</h4>
                    <ul className="list-disc pl-5 text-blue-100 text-sm space-y-1">
                      <li>Automates bookings, payments, and order tracking for both customers and staff</li>
                      <li>Reduces manual errors and increases operational efficiency</li>
                      <li>Improves customer satisfaction with real-time updates and easy access</li>
                      <li>Enables business growth by supporting online and offline workflows</li>
                    </ul>
                  </div>
                )}
                {/* Tech Stack & Integrations Section */}
                {index === 0 && (
                  <div className="bg-gradient-to-r from-cyan-800/40 to-purple-900/30 border-l-4 border-cyan-400 p-4 rounded-lg mt-2">
                    <h4 className="text-cyan-200 font-semibold mb-1">Tech Stack & Integrations</h4>
                    <ul className="list-disc pl-5 text-blue-100 text-sm space-y-1">
                      <li>MERN stack: MongoDB, Express.js, React.js, Node.js</li>
                      <li>Authentication & authorization for secure access</li>
                      <li>Payment gateway integration for online transactions</li>
                      <li>Responsive design with Tailwind CSS</li>
                      <li>Admin dashboard for business analytics and control</li>
                    </ul>
                  </div>
                )}
                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
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
                </div>
              </CardContent>
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
