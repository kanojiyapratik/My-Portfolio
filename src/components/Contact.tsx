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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            Get In Touch
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 border border-cyan-400/20 backdrop-blur-lg animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-cyan-200">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-purple-200">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-purple-200">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-purple-200">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-purple-200">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-[#232946]/80 text-blue-100 placeholder:text-blue-200 border border-transparent focus:border-purple-400 focus:ring-purple-400"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-200 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-200 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply have a conversation about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-[#232946]/80 border border-white/10 rounded-lg hover:bg-[#232946]/90 transition-colors group backdrop-blur-md"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-200 group-hover:text-purple-200">{info.title}</h4>
                    <p className="text-blue-100 group-hover:text-blue-100">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-cyan-200 mb-4">Follow me on</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/pratik-kanojiya-060250252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg text-white hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/skullpratik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg text-white hover:scale-110 transition-transform"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">Ready to start a project?</h4>
                <p className="text-white/90 text-sm mb-4">
                  Let's discuss your requirements and turn your ideas into reality.
                </p>
                <Button variant="secondary" size="sm">
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;