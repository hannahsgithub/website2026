interface QuickNavProps {
  onNavigate: (section: string) => void;
}

const QuickNav = ({ onNavigate }: QuickNavProps) => {
  const navItems = [
    { id: "about", label: "About", color: "bg-sticky-purple", rotation: "-rotate-2" },
    { id: "resume", label: "Resume", color: "bg-sticky-yellow", rotation: "rotate-1" },
    { id: "projects", label: "Projects", color: "bg-sticky-green", rotation: "-rotate-1" },
    { id: "photos", label: "Photos", color: "bg-sticky-pink", rotation: "rotate-2" },
  ];

  return (
    <nav className="fixed top-4 left-4 z-50 flex flex-row gap-3">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`
            ${item.color} ${item.rotation}
            sticky-note
            px-4 py-2 
            font-sketch text-foreground text-base
            cursor-pointer
            border-none
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default QuickNav;