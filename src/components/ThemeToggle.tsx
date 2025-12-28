import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full bg-muted border border-border/50 transition-all duration-300 hover:border-primary/50 group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background gradient animation */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full" />
      </div>
      
      {/* Toggle circle */}
      <div
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ease-out ${
          isDark 
            ? 'left-0.5 bg-primary shadow-lg shadow-primary/50' 
            : 'left-[calc(100%-1.625rem)] bg-secondary shadow-lg shadow-secondary/50'
        }`}
      >
        {/* Icon container with rotation animation */}
        <div className={`transition-transform duration-500 ${isDark ? 'rotate-0' : 'rotate-180'}`}>
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-primary-foreground" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-secondary-foreground" />
          )}
        </div>
      </div>

      {/* Stars animation for dark mode */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <span className="absolute top-1 right-2 w-1 h-1 bg-foreground/30 rounded-full animate-pulse" />
        <span className="absolute top-3 right-4 w-0.5 h-0.5 bg-foreground/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
    </button>
  );
};

export default ThemeToggle;