import { useEffect, useRef, useState } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumePreview from "@/assets/resume-preview.png";

const Resume = () => {
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

  return (
    <section id="resume" className="py-32 relative" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-border/50 glass rounded-full">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">My Resume</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Resume Preview Card */}
          <div className="border border-border/50 glass rounded-2xl overflow-hidden">
            {/* Resume Preview */}
            <div className="relative bg-card p-4 md:p-8">
              <div className="aspect-[8.5/11] bg-background rounded-lg shadow-2xl overflow-hidden border border-border/30">
                <img 
                  src={resumePreview} 
                  alt="Prem Kumar R - UI/UX Designer Resume"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-6 md:p-8 bg-card/50 border-t border-border/30">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/resume.pdf" 
                  download="Prem_Kumar_R_Resume.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:scale-110" />
                      Download Resume
                    </span>
                    {/* Animated background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-30 transition-opacity" />
                  </Button>
                </a>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-border/50 hover:bg-muted group"
                  >
                    <Eye className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                    Open in New Tab
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
