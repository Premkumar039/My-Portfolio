import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, CheckCircle, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import certAccenture from "@/assets/cert-accenture.jpg";
import certGoogleUx from "@/assets/cert-google-ux.png";
import certUdemyUx from "@/assets/cert-udemy-ux.png";
import certUdemyHtmlCss from "@/assets/cert-udemy-html-css.png";
import certUdemyFigmaXd from "@/assets/cert-udemy-figma-xd.png";

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
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

  const certifications = [
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      platform: "Coursera",
      highlight: true,
      image: certGoogleUx
    },
    {
      title: "Digital Skills: User Experience - Accenture",
      issuer: "Accenture",
      platform: "FutureLearn",
      highlight: true,
      image: certAccenture
    },
    {
      title: "UIUX with Figma and Adobe XD",
      issuer: "Udemy",
      platform: "Udemy",
      highlight: true,
      image: certUdemyFigmaXd
    },
    {
      title: "Essentials User Experience Design Adobe XD UI UX Design",
      issuer: "Udemy",
      platform: "Udemy",
      highlight: false,
      image: certUdemyUx
    },
    {
      title: "HTML and CSS for Beginners From Basic to Advance",
      issuer: "Udemy",
      platform: "Udemy",
      highlight: false,
      image: certUdemyHtmlCss
    }
  ];

  return (
    <section id="certifications" className="py-32 relative" ref={sectionRef}>
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-96 bg-secondary/5 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-border/50 glass rounded-full">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Achievements</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise in UI/UX design. Click on any card to view the certificate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => cert.image && setSelectedCert(cert.image)}
              className={`group p-6 border border-border/50 glass rounded-2xl hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${cert.highlight ? 'ring-1 ring-primary/50' : ''} ${cert.image ? 'cursor-pointer' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${cert.highlight ? 'bg-primary/20' : 'bg-muted'}`}>
                  <Award className={`w-6 h-6 ${cert.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground leading-tight">
                      {cert.title}
                    </h3>
                    {cert.highlight && (
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </div>
                  
                  <p className="text-primary font-medium text-sm mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.platform}</p>
                  
                  {cert.image && (
                    <p className="text-xs text-primary mt-2 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      Click to view certificate
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Image Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-background border-border">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          {selectedCert && (
            <img 
              src={selectedCert} 
              alt="Certificate" 
              className="w-full h-auto object-contain max-h-[90vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;
