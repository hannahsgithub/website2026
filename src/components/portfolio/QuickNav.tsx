interface QuickNavProps {
  onNavigate: (section: string) => void;
}

const QuickNav = ({ onNavigate }: QuickNavProps) => {
  const navItems = [
    { id: "about", label: "About", color: "bg-sticky-purple", rotation: "-rotate-2" },
    { id: "resume", label: "Resume", color: "bg-sticky-yellow", rotation: "rotate-1" },
    // { id: "experiences", label: "Experience", color: "bg-sticky-green", rotation: "-rotate-1" },
    { id: "photos", label: "Photos", color: "bg-sticky-pink", rotation: "rotate-2" },
  ];

  return (
    <nav className="fixed top-4 left-4 z-50 flex flex-row gap-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`
            ${item.color} ${item.rotation}
            sticky-note hand-drawn-border
            px-6 py-3 
            font-sketch text-foreground text-lg
            cursor-pointer
            border-2 border-foreground/20
            hover:animate-wiggle
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default QuickNav;