import { useEffect, useRef, useState } from "react";
import { ExternalLink, Globe, Utensils, Leaf, Play, Layers, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import projectPasumai from "@/assets/project-pasumai-fruits.png";
import projectInfinity from "@/assets/project-infinity-scrolling.png";
import projectFood from "@/assets/project-food-app.png";
import project404 from "@/assets/project-404-error.png";

const Projects = () => {
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

  const projects = [
    {
      title: "Pasumai Fruit App",
      subtitle: "Farm-to-Consumer Platform",
      icon: Leaf,
      color: "primary",
      image: projectPasumai,
      video: null,
      problem: "Local farmers struggle to connect directly with consumers, leading to dependency on middlemen and reduced profits.",
      solution: "Designed a mobile app that creates a direct bridge between farmers and consumers, emphasizing transparent sourcing and sustainable agriculture.",
      tools: ["Figma", "User Research", "Prototyping"],
      outcome: "Created intuitive user flows that simplified the purchasing process, focusing on accessibility and trust-building through transparent sourcing information.",
      features: ["Direct farmer-consumer connection", "Transparent sourcing", "Sustainable agriculture focus", "Intuitive mobile UI"]
    },
    {
      title: "Infinity Scrolling",
      subtitle: "Interactive Slider Component",
      icon: Layers,
      color: "primary",
      image: projectInfinity,
      video: "/videos/project-infinity-demo.mp4",
      problem: "Static content displays fail to engage users and showcase multiple items effectively.",
      solution: "Designed an infinite scrolling slider with smooth animations and intuitive navigation for seamless content browsing.",
      tools: ["Figma", "Prototyping", "Animation Design"],
      outcome: "Created an engaging interactive component that showcases content dynamically with smooth transitions.",
      features: ["Smooth animations", "Infinite loop", "Touch-friendly", "Responsive design"]
    },
    {
      title: "Food Ordering App",
      subtitle: "Complete Mobile Prototype",
      icon: Utensils,
      color: "secondary",
      image: projectFood,
      video: null,
      problem: "Complex navigation and cluttered interfaces in food apps create friction in the ordering process.",
      solution: "Created a clean, minimal food ordering prototype emphasizing smooth navigation, quick ordering, and delightful user experience.",
      tools: ["Figma", "Prototyping", "UI Design"],
      outcome: "Delivered a complete mobile prototype with seamless ordering flow, reducing cognitive load and improving task completion rates.",
      features: ["Smooth navigation", "Clean UI design", "Quick ordering flow", "Restaurant discovery"]
    },
    {
      title: "404 Error Web Page",
      subtitle: "Creative Error Page Design",
      icon: AlertTriangle,
      color: "secondary",
      image: project404,
      video: "/videos/project-404-demo.mp4",
      problem: "Standard 404 error pages are boring and frustrate users, leading to higher bounce rates.",
      solution: "Designed a creative, friendly 404 error page with engaging visuals and clear navigation back to the main site.",
      tools: ["Figma", "UI Design", "Illustration"],
      outcome: "Created an engaging error page that turns a frustrating experience into a delightful moment while guiding users back to the site.",
      features: ["Friendly character design", "Clear messaging", "Easy navigation", "Brand consistency"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-border/50 glass rounded-full">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my design journey — from identifying user problems to crafting intuitive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="relative border border-border/50 glass rounded-2xl hover-lift h-full overflow-hidden">
                    {/* Project Image */}
                    {project.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        
                        {/* Play Button Overlay */}
                        {project.video && (
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                              <Play className="w-6 h-6 text-primary-foreground ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Video Thumbnail for video-only projects */}
                    {!project.image && project.video && (
                      <div className="relative h-48 overflow-hidden bg-muted flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        project.color === 'primary' 
                          ? 'bg-primary/10 group-hover:bg-primary/20' 
                          : 'bg-secondary/10 group-hover:bg-secondary/20'
                      }`}>
                        <project.icon className={`w-6 h-6 ${
                          project.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.slice(0, 3).map((tool, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* View Case Study */}
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <span>View Case Study</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Decorative Gradient */}
                    <div className={`absolute inset-x-0 bottom-0 h-1 transition-all duration-300 ${
                      project.color === 'primary' 
                        ? 'bg-gradient-to-r from-primary to-primary/50' 
                        : 'bg-gradient-to-r from-secondary to-secondary/50'
                    } opacity-0 group-hover:opacity-100`} />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      project.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <project.icon className={`w-7 h-7 ${
                        project.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        {project.subtitle}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                {/* Project Image in Dialog */}
                {project.image && (
                  <div className="relative rounded-xl overflow-hidden my-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}

                {/* Video Player */}
                {project.video && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">PROJECT DEMO</h4>
                    <video 
                      controls 
                      className="w-full rounded-xl border border-border"
                      poster={project.image}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">THE PROBLEM</h4>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-2">THE SOLUTION</h4>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">OUTCOME</h4>
                    <p className="text-muted-foreground">{project.outcome}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">KEY FEATURES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-muted rounded-full text-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">TOOLS USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm border border-border rounded-full text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
