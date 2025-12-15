import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Code, Database, Smartphone, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "3D Web & Product Configurators",
      description: "Interactive 3D experiences using Three.js, React Three Fiber, and WebXR for AR-ready product visualization.",
      features: [
        "Three.js & R3F integrations",
        "GLTF/GLB optimization",
        "Advanced camera & lighting",
        "Environment maps & HDRI"
      ]
    },
    {
      icon: Database,
      title: "MERN Stack Development", 
      description: "End-to-end web apps with React, Node.js, Express, and MongoDB using scalable architecture and clean APIs.",
      features: [
        "REST API design",
        "Authentication & state (Redux)",
        "MongoDB schema design",
        "Vite-based tooling"
      ]
    },
    {
      icon: Code,
      title: "UI Systems & Performance",
      description: "Responsive design with Tailwind/MUI, performance optimization, lazy loading, and asset compression.",
      features: [
        "Tailwind CSS & MUI",
        "Lazy loading & code-splitting",
        "Texture compression",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: Smartphone,
      title: "AR/WebXR & XR Interactions",
      description: "Immersive AR previews and XR-based interactions to bridge digital experiences with physical validation.",
      features: [
        "WebXR integration",
        "USDZ export support",
        "Device responsiveness",
        "In-app screenshot export"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            Skills & Learning Areas
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Areas I'm focused on as I begin my journey in web development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-2 animate-fade-in group">
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg font-semibold text-purple-200">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm">
                      <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-semibold text-center text-cyan-200 mb-8 sm:mb-12">
            How I Deliver
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-purple-200">Discover & Scope</h4>
              <p className="text-blue-100 text-sm">
                Align on requirements, scope features, and define KPIs for business impact.
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-purple-200">Design & Implement</h4>
              <p className="text-blue-100 text-sm">
                Build modular UI and services; integrate 3D, APIs, and state with best practices.
              </p>
            </div>

            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-purple-200">Optimize & Ship</h4>
              <p className="text-blue-100 text-sm">
                Optimize performance, validate across devices, and ship with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;