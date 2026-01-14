import { useRef, useEffect } from "react";
import QuickNav from "@/components/portfolio/QuickNav";
import HeroSection from "@/components/portfolio/HeroSection";
import WhiteboardCanvas from "@/components/portfolio/WhiteboardCanvas";
import PhotoGallery from "@/components/portfolio/PhotoGallery";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EasterEgg from "@/components/portfolio/EasterEgg";

const Index = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle horizontal scroll with mouse wheel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Only convert vertical scroll to horizontal if not inside canvas
      const target = e.target as HTMLElement;
      if (target.tagName === "CANVAS") return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
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

      {/* Scroll hint at bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg">
          <p className="font-sketch text-sm text-muted-foreground flex items-center gap-2">
            <span>←</span>
            <span>scroll or use nav</span>
            <span>→</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;