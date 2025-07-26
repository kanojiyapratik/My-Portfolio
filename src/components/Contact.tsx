import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pratikkanojiya9324@gmail.com",
      href: "mailto:pratikkanojiya9324@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9324125329",
      href: "tel:+919324125329"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, Maharashtra",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            Get In Touch
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 border border-cyan-400/20 backdrop-blur-lg animate-fade-in order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-semibold text-cyan-200">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-200 text-sm sm:text-base">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-200 text-sm sm:text-base">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-purple-200 text-sm sm:text-base">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-200 text-sm sm:text-base">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400 text-sm sm:text-base resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white hover:from-cyan-300 hover:to-purple-400 border-0 group font-bold text-sm sm:text-base"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up order-1 lg:order-2">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-200 mb-4">
                Let's Connect
              </h3>
              <p className="text-blue-100 text-sm sm:text-base mb-6">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-6">
                    <a
                      href={info.href}
                      className="flex items-center space-x-4 group"
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-purple-200 font-semibold text-sm sm:text-base">{info.title}</h4>
                        <p className="text-blue-100 text-xs sm:text-sm truncate">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-left">
              <h4 className="text-purple-200 font-semibold mb-4 text-sm sm:text-base">Follow me on social media</h4>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://linkedin.com/in/pratik-kanojiya-060250252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="https://github.com/skullpratik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-gradient-to-br from-cyan-700 via-blue-800 to-purple-900 text-cyan-100 rounded-full hover:scale-110 hover:bg-cyan-800/80 transition-all duration-300"
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;