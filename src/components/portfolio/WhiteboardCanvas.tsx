import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, PencilBrush } from "fabric";
import { Eraser, Trash2 } from "lucide-react";

const COLORS = [
  { name: "black", value: "hsl(0, 0%, 15%)", class: "bg-draw-black" },
  { name: "blue", value: "hsl(210, 90%, 50%)", class: "bg-draw-blue" },
  { name: "red", value: "hsl(0, 80%, 55%)", class: "bg-draw-red" },
  { name: "green", value: "hsl(140, 70%, 40%)", class: "bg-draw-green" },
  { name: "yellow", value: "hsl(50, 95%, 55%)", class: "bg-draw-yellow" },
  { name: "orange", value: "hsl(30, 90%, 55%)", class: "bg-draw-orange" },
  { name: "pink", value: "hsl(330, 80%, 65%)", class: "bg-draw-pink" },
  { name: "purple", value: "hsl(270, 70%, 60%)", class: "bg-draw-purple" },
];

const WhiteboardCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState(COLORS[0].value);
  const [brushSize, setBrushSize] = useState(3);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 500,
      height: 500,
      backgroundColor: "transparent",
      isDrawingMode: true,
    });

    const brush = new PencilBrush(canvas);
    brush.color = activeColor;
    brush.width = brushSize;
    canvas.freeDrawingBrush = brush;

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas || !fabricCanvas.freeDrawingBrush) return;
    fabricCanvas.freeDrawingBrush.color = activeColor;
    fabricCanvas.freeDrawingBrush.width = brushSize;
  }, [activeColor, brushSize, fabricCanvas]);

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "transparent";
    fabricCanvas.renderAll();
  };

  return (
    <section
      id="whiteboard"
      className="min-w-[600px] h-full flex flex-col items-center justify-center px-8 pb-8"
    >
      <div className="relative">
        {/* Title */}
        <h2 className="text-3xl font-handwritten text-foreground mb-4 text-center">
          draw anything and I will email it to you
        </h2>

        {/* Canvas container */}
        <div
          ref={containerRef}
          className="relative bg-paper rounded-lg border-2 border-foreground/20 shadow-lg overflow-hidden"
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />

          <canvas ref={canvasRef} className="relative z-10 cursor-crosshair" />
        </div>

        {/* Color palette */}
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          {COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(color.value)}
              className={`
                w-8 h-8 rounded-full border-2 transition-all
                ${activeColor === color.value
                  ? "border-foreground scale-125 shadow-lg"
                  : "border-foreground/30 hover:scale-110"
                }
              `}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name} color`}
            />
          ))}

          {/* Brush size */}
          <div className="ml-4 flex items-center gap-2">
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-20 accent-primary"
            />
            <span className="font-sketch text-sm text-foreground/70">{brushSize}px</span>
          </div>

          {/* Clear button */}
          <button
            onClick={handleClear}
            className="ml-4 p-2 bg-sticky-pink rounded-lg hover:scale-110 transition-transform hand-drawn-border"
            aria-label="Clear canvas"
          >
            <Trash2 size={20} className="text-foreground" />
          </button>
        </div>

        {/* Fun sticky note */}
        <div className="absolute -top-4 -right-8 bg-sticky-green p-2 sticky-note rotate-12">
          <p className="font-sketch text-xs text-foreground/80">be creative!</p>
        </div>
      </div>
    </section>
  );
};

export default WhiteboardCanvas;