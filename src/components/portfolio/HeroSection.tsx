import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="about" 
      className="min-w-[600px] h-full flex flex-col justify-center px-12 py-8"
    >
      {/* Decorative doodles */}
      <div className="absolute top-8 right-8">
        <div className="w-8 h-8 bg-sticky-yellow doodle-star animate-float" />
      </div>
      <div className="absolute bottom-20 right-20">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-draw-pink opacity-70">
          <path 
            d="M20 5 C25 15, 35 15, 35 25 C35 32, 28 37, 20 37 C12 37, 5 32, 5 25 C5 15, 15 15, 20 5" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex flex-col items-start gap-6 relative">
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-sticky-blue border-4 border-foreground/20 overflow-hidden flex items-center justify-center">
          <span className="text-6xl">👩‍💻</span>
        </div>

        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-5xl font-handwritten font-bold text-foreground">
            Hi! I'm <span className="text-primary">Hannah Song</span> ✨
          </h1>
          
          <ul className="font-sketch text-xl text-foreground/80 space-y-2 ml-6 list-disc">
            <li>CS @ UWaterloo</li>
            <li>Former Intern @ Shopify</li>
            <li>Building cool things @ Voser</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-sticky-purple/80 rounded-lg hand-drawn-border hover:scale-110 transition-transform"
          >
            <Github size={24} className="text-foreground" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-sticky-blue/80 rounded-lg hand-drawn-border hover:scale-110 transition-transform"
          >
            <Linkedin size={24} className="text-foreground" />
          </a>
          <a 
            href="mailto:hello@hannah.dev"
            className="p-3 bg-sticky-pink/80 rounded-lg hand-drawn-border hover:scale-110 transition-transform"
          >
            <Mail size={24} className="text-foreground" />
          </a>
        </div>

        {/* Fun note */}
        <div className="mt-8 bg-sticky-yellow p-4 sticky-note max-w-xs">
          <p className="font-sketch text-foreground/80 text-sm">
            ← scroll to explore my world! →
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
