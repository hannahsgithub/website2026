import { useRef, useEffect, useState } from "react";
import QuickNav from "@/components/portfolio/QuickNav";
import HeroSection from "@/components/portfolio/HeroSection";
import ResumeSection from "@/components/portfolio/ResumeSection";
import WhiteboardCanvas from "@/components/portfolio/WhiteboardCanvas";
import PhotoGallery from "@/components/portfolio/PhotoGallery";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EasterEgg from "@/components/portfolio/EasterEgg";

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Handle horizontal scroll with mouse wheel and track progress
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "CANVAS") return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section && scrollContainerRef.current) {
      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const scrollLeft = scrollContainerRef.current.scrollLeft + sectionRect.left - containerRect.left - 140;

      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Quick Nav - overlays on paper */}
      <QuickNav onNavigate={scrollToSection} />

      {/* Main scrolling canvas */}
      <div
        ref={scrollContainerRef}
        className="horizontal-scroll h-screen"
      >
        <div className="flex h-full min-w-max pt-20 pl-4 paper-texture">

          {/* Content sections */}
          <div className="flex items-stretch relative">
            <HeroSection />

            {/* Divider doodle */}
            <div className="w-px bg-border/50 mx-4 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
                ✿
              </div>
            </div>

            <WhiteboardCanvas />

            {/* Divider doodle */}
            <div className="w-px bg-border/50 mx-4 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
                📎
              </div>
            </div>

            <ResumeSection />

            {/* Divider doodle */}
            <div className="w-px bg-border/50 mx-4 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
                ★
              </div>
            </div>

            <ProjectsSection />

            {/* Divider doodle */}
            <div className="w-px bg-border/50 mx-4 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
                ❀
              </div>
            </div>

            <PhotoGallery />

            {/* Divider doodle */}
            <div className="w-px bg-border/50 mx-4 relative">
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
                ☆
              </div>
            </div>

            <EasterEgg />
          </div>
        </div>
      </div>

      {/* Interactive scroll indicator */}
      <div
        className="fixed bottom-4 z-40 w-60"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Playful label */}
        <div className="mt-8 bg-sticky-yellow p-2 sticky-note max-w-xs">
          <p className={`font-sketch text-center text-sm text-muted-foreground transition-all duration-300 ${isHovering ? 'scale-105' : ''}`}>
            {scrollProgress < 5
              ? "← scroll sideways! →"
              : scrollProgress > 95
                ? "you made it!"
                : `${Math.round(scrollProgress)}% explored~`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;