import { FileText, FolderKanban, Camera, Sparkles } from "lucide-react";

interface QuickNavProps {
  onNavigate: (section: string) => void;
}

const QuickNav = ({ onNavigate }: QuickNavProps) => {
  const navItems = [
    { id: "about", label: "About", icon: Sparkles, color: "bg-sticky-purple", rotation: "-rotate-2" },
    { id: "resume", label: "Resume", icon: FileText, color: "bg-sticky-yellow", rotation: "rotate-1" },
    { id: "projects", label: "Projects", icon: FolderKanban, color: "bg-sticky-green", rotation: "-rotate-1" },
    { id: "photos", label: "Photos", icon: Camera, color: "bg-sticky-pink", rotation: "rotate-2" },
  ];

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`
            ${item.color} ${item.rotation}
            sticky-note
            px-4 py-3 
            font-sketch text-foreground text-lg
            flex items-center gap-2
            cursor-pointer
            border-none
            min-w-[100px]
          `}
        >
          <item.icon size={18} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default QuickNav;
