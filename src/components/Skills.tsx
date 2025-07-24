import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design", "Three.js"],
      color: "bg-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication", "Database Design"],
      color: "bg-green-500"
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Chrome DevTools", "Blender"],
      color: "bg-orange-500"
    }
  ];

  const coreSkills = [
    { name: "Data Structures", level: 85 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Problem Solving", level: 88 },
    { name: "Three.js", level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#181824] via-[#232946] to-[#1a1a2e] scroll-mt-16 relative overflow-hidden">
      {/* SVG code pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse z-0" style={{pointerEvents:'none'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><path fill="#00bcd4" fillOpacity="0.2" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,181.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/></svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-200 mb-4 font-mono">
            Skills & Expertise
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-center">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 border border-cyan-400/20 backdrop-blur-lg hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in group">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-purple-200 mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Skills with Progress */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-cyan-200 mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <div key={index} className="space-y-2 animate-slide-up">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 font-medium">{skill.name}</span>
                  <span className="text-purple-200 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2.5">
                  <div 
                    className="bg-gradient-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;