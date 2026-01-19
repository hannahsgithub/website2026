import { Github, Linkedin, Mail, Underline } from "lucide-react";

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
        {/* <div className="w-32 h-32 rounded-full bg-sticky-blue border-4 border-foreground/20 overflow-hidden flex items-center justify-center">
          <span className="text-6xl">👩‍💻</span>
        </div> */}
        <div className="flex items-center justify-center"><img src="/images/me.png" alt="Me" className="w-40 h-40 overflow-hidden" /></div>

        {/* Intro */}
        <div className="space-y-4">
          <h1 className="text-5xl font-handwritten font-bold text-foreground">
            Hi! I'm <span className="text-primary">Hannah Song</span>
          </h1>

          <ul className="font-sketch text-xl text-foreground/80 space-y-2 ml-6 list-disc">
            <li>Systems Design Engineering @ UWaterloo</li>
            {/* <li>Prev. SWE intern @ <span className="underline text-primary"><a href="http://shopify.com" target="_blank">Shopify</a></span></li> */}
            <li>Looking for <span className="underline">Summer 2026 Internship + 2027 New Grad roles!</span></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          <a
            href="http://github.com/hannahsgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-sticky-purple/80 rounded-lg hand-drawn-border hover:scale-110 transition-transform"
          >
            <Github size={24} className="text-foreground" />
          </a>
          <a
            href="http://linkedin.com/in/hannah-song-uw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-sticky-blue/80 rounded-lg hand-drawn-border hover:scale-110 transition-transform"
          >
            <Linkedin size={24} className="text-foreground" />
          </a>
          <a
            href="mailto:h9song@uwaterloo.ca"
            className="p-3 bg-sticky-pink/80 rounded-lg hand-drawn-border hover:scale-110 transition-transform"
          >
            <Mail size={24} className="text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
