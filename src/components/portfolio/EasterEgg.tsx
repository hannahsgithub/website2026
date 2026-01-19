import { useState } from "react";
import { Sparkles } from "lucide-react";

const EasterEgg = () => {
  const [revealed, setRevealed] = useState(false);
  const [currentText, setCurrentText] = useState("");

  const textItems = [
    "What is the nicest building on UWaterloo campus? Answer: Engineering 7",
    "I ran out of question ideas",
    "Uhhh",
    "Will I be employed? Answer: YES YES YES PLEASE HIRE ME",
    "What is the best major in the world? Answer: Systems Design Engineering",
  ];

  const handleClick = () => {
    const newRevealed = !revealed;
    setRevealed(newRevealed);
    if (newRevealed) {
      const randomText = textItems[Math.floor(Math.random() * textItems.length)];
      setCurrentText(randomText);
    }
  };

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
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 mb-3">
          <h3 className="font-handwritten text-xl font-bold text-foreground">
            {revealed ? "question.." : "click me!"}
          </h3>
        </div>

        <p className="font-sketch text-sm text-foreground/80">
          {revealed ? currentText : "for random trivia"}
        </p>
      </div>

      {/* End decoration */}
      <div className="mt-12 text-center">
        <p className="font-sketch text-muted-foreground text-sm">
          end of the whiteboard
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="text-2xl">A</span>
          <span className="text-2xl">B</span>
          <span className="text-2xl">C</span>
        </div>
      </div>
    </section>
  );
};

export default EasterEgg;
