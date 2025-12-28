import { useEffect, useRef, useState } from "react";
import { Figma, Layers, Users, Code, MessageSquare, Clock, Palette, Workflow, PenTool, Layout, Brain, Lightbulb, Target, Handshake } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Figma,
      name: "Figma",
      category: "Design Tools",
      color: "primary"
    },
    {
      icon: Palette,
      name: "Adobe XD",
      category: "Design Tools",
      color: "secondary"
    },
    {
      icon: PenTool,
      name: "Canva",
      category: "Design Tools",
      color: "primary"
    },
    {
      icon: Layers,
      name: "Prototyping",
      category: "Skills",
      color: "secondary"
    },
    {
      icon: Layout,
      name: "Wireframing",
      category: "Skills",
      color: "primary"
    },
    {
      icon: Users,
      name: "User Research",
      category: "Research",
      color: "secondary"
    },
    {
      icon: Code,
      name: "HTML/CSS",
      category: "Development",
      color: "primary"
    },
    {
      icon: Brain,
      name: "Problem Solving",
      category: "Soft Skills",
      color: "secondary"
    },
    {
      icon: MessageSquare,
      name: "Communication",
      category: "Soft Skills",
      color: "primary"
    },
    {
      icon: Clock,
      name: "Time Management",
      category: "Soft Skills",
      color: "secondary"
    },
    {
      icon: Handshake,
      name: "Collaboration",
      category: "Soft Skills",
      color: "primary"
    },
    {
      icon: Lightbulb,
      name: "Creative Thinking",
      category: "Soft Skills",
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-secondary/5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-border/50 glass rounded-full">
            <Layers className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">My Toolkit</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of design tools, research methods, and collaborative skills that help me create meaningful user experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 border border-border/50 glass rounded-2xl hover-lift cursor-default transition-all duration-500 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                skill.color === 'primary' 
                  ? 'bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20' 
                  : 'bg-secondary/10 group-hover:bg-secondary/20 group-hover:shadow-lg group-hover:shadow-secondary/20'
              }`}>
                <skill.icon className={`w-8 h-8 transition-transform duration-300 group-hover:scale-110 ${
                  skill.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`} />
              </div>

              <h3 className="text-lg font-semibold mb-1 text-foreground">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;