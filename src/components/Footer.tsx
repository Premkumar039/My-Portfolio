import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prem Kumar R. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Designed by Prem Kumar R
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;