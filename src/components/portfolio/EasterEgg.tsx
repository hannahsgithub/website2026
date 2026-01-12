import { useState } from "react";
import { Sparkles } from "lucide-react";

const EasterEgg = () => {
  const [revealed, setRevealed] = useState(false);

  const funFacts = [
    "I can solve a Rubik's cube in under 2 minutes! 🧩",
    "My first program was a text adventure game 🎮",
    "I've consumed mass amounts of boba tea while coding 🧋",
    "I dream in code sometimes (it's weird) 💭",
    "My rubber duck debugger is named Gerald 🦆",
  ];

  const [currentFact] = useState(() => 
    funFacts[Math.floor(Math.random() * funFacts.length)]
  );

  return (
    <section 
      id="easter-egg" 
      className="min-w-[300px] h-full flex flex-col items-center justify-center px-8 py-8"
    >
      <div 
        className={`
          bg-sticky-orange p-6 sticky-note cursor-pointer
          transition-all duration-500
          ${revealed ? "rotate-0 scale-110" : "rotate-6"}
        `}
        onClick={() => setRevealed(!revealed)}
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={20} className="text-foreground" />
          <h3 className="font-handwritten text-xl font-bold text-foreground">
            {revealed ? "Fun fact!" : "Something funny"}
          </h3>
        </div>

        <p className="font-sketch text-sm text-foreground/80">
          {revealed ? currentFact : "Psst... click me! 👀"}
        </p>
      </div>

      {/* End decoration */}
      <div className="mt-12 text-center">
        <p className="font-sketch text-muted-foreground text-sm">
          ~ end of the whiteboard ~
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-2xl">✨</span>
          <span className="text-2xl">🎨</span>
          <span className="text-2xl">✨</span>
        </div>
      </div>
    </section>
  );
};

export default EasterEgg;
