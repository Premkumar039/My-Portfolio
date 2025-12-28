import { useEffect, useRef, useState } from "react";
import { Sparkles, Target, Lightbulb, Users, GraduationCap, Briefcase, Calendar } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Target,
      title: "User-Focused",
      description: "Every design decision centered on user needs and behavior"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into intuitive solutions"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working seamlessly with teams to bring visions to life"
    }
  ];

  const education = [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      institution: "Nandha Engineering College",
      period: "2022 – 2026",
      status: "In Progress"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Higher Secondary School, Vellankovil",
      period: "2021 – 2022",
      status: "Completed"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Government Higher Secondary School, Vellankovil",
      period: "2019 – 2020",
      status: "Completed"
    }
  ];

  const training = {
    title: "UI/UX Industry Training Program",
    organization: "Novitech Pvt. Ltd.",
    period: "30 Days Intensive",
    description: "Gained hands-on experience in user research, wireframing, and prototyping. Worked on real-time UI/UX tasks following design thinking principles.",
    highlights: ["User Research", "Wireframing", "Prototyping", "Design Thinking"]
  };

  return (
    <section id="about" className="py-32 relative" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-border/50 glass rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Designing experiences that{" "}
              <span className="text-gradient">make an impact</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a passionate UI/UX Designer from Tamil Nadu, currently pursuing B.Tech in AI & Data Science. 
                My journey in design started with a simple curiosity about how people interact with digital products.
              </p>
              <p>
                Today, I specialize in crafting user-centric digital experiences using 
                <span className="text-foreground font-medium"> Figma</span> and 
                <span className="text-foreground font-medium"> Adobe XD</span>. 
                I believe great design is invisible — it just works.
              </p>
              <p>
                Beyond pixels and prototypes, I'm deeply interested in 
                <span className="text-foreground font-medium"> sustainable design solutions</span> and 
                <span className="text-foreground font-medium"> accessible interfaces</span> that serve everyone.
              </p>
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 border border-border/50 glass rounded-2xl hover-lift cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Training Section */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Training Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Training</h3>
              </div>

              <div className="p-6 border border-border/50 glass rounded-2xl hover-lift">
                <h4 className="text-xl font-semibold text-foreground mb-1">{training.title}</h4>
                <p className="text-primary font-medium mb-2">{training.organization}</p>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{training.period}</span>
                </div>

                <p className="text-muted-foreground mb-4">{training.description}</p>

                <div className="flex flex-wrap gap-2">
                  {training.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 rounded-full text-primary"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                {education.map((item, index) => (
                  <div key={index} className="relative pl-12 pb-6 last:pb-0">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-secondary/20 border-4 border-background flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                    </div>

                    <div className="p-4 border border-border/50 glass rounded-xl hover-lift">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h4 className="text-base font-semibold text-foreground">{item.degree}</h4>
                        <span className={`px-2 py-0.5 text-xs rounded-full flex-shrink-0 ${
                          item.status === 'In Progress' 
                            ? 'bg-secondary/20 text-secondary' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
