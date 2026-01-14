import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Voser",
    description: "AI-powered voting platform for communities",
    tags: ["React", "TypeScript", "AI"],
    color: "bg-sticky-blue",
    rotation: "-rotate-1",
  },
  {
    id: 2,
    title: "CodeCanvas",
    description: "Visual code editor for creative coding",
    tags: ["Canvas API", "WebGL", "Node.js"],
    color: "bg-sticky-green",
    rotation: "rotate-2",
  },
  {
    id: 3,
    title: "MoodTracker",
    description: "Daily mood journaling with insights",
    tags: ["React Native", "Firebase", "Charts"],
    color: "bg-sticky-pink",
    rotation: "-rotate-2",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-w-[800px] h-full flex flex-col justify-center px-8 py-8"
    >
      <h2 className="text-4xl font-handwritten text-foreground mb-8 text-center">
        🛠️ Projects
      </h2>

      <div className="flex gap-6 justify-center items-start flex-wrap max-w-[750px]">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`
              ${project.color} ${project.rotation}
              sticky-note
              p-5 w-56
              cursor-pointer
            `}
          >
            <h3 className="font-handwritten text-2xl font-bold text-foreground mb-2">
              {project.title}
            </h3>

            <p className="font-sketch text-sm text-foreground/80 mb-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-sketch bg-foreground/10 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <a
                href="#"
                className="p-1.5 bg-foreground/10 rounded hover:bg-foreground/20 transition-colors"
                aria-label="View project"
              >
                <ExternalLink size={16} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-1.5 bg-foreground/10 rounded hover:bg-foreground/20 transition-colors"
                aria-label="View source"
              >
                <Github size={16} className="text-foreground" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-12 right-12">
        <svg width="30" height="30" viewBox="0 0 30 30" className="text-draw-purple opacity-50">
          <circle cx="15" cy="15" r="12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsSection;
