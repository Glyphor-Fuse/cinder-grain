import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    id: 1,
    category: "01. PRIMAL",
    title: "Dry-Aged Ribeye",
    price: "85",
    provenance: "45-Day Age / Hickory Smoke",
    image: "/images/dish-steak.jpg",
    description: "Bone-in ribeye seared over white oak embers, finished with marrow butter and flakes of volcanic salt."
  },
  {
    id: 2,
    category: "02. OCEAN",
    title: "Charred Octopus",
    price: "42",
    provenance: "Atlantic Wild / Binchotan",
    image: "/images/dish-octopus.jpg",
    description: "Slow-braised then flash-grilled octopus, ink emulsion, pickled fennel, and burnt citrus dust."
  },
  {
    id: 3,
    category: "03. FLORA",
    title: "Smoked Beets",
    price: "28",
    provenance: "Heirloom / Hay Smoked",
    image: "/images/dish-vegetable.jpg",
    description: "Salt-roasted beets smoked in hay, goat curd, hazelnut praline, and dill oil."
  },
  {
    id: 4,
    category: "04. LIQUID",
    title: "The Alchemist",
    price: "22",
    provenance: "Rye / Smoked Maple",
    image: "/images/dish-cocktail.jpg",
    description: "Rye whiskey, smoked maple syrup, angostura bitters, served in a cedar-smoked glass."
  }
];

export default function MenuMap() {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="min-h-screen bg-background text-foreground py-20 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-0 h-full min-h-[600px] border border-border">
        
        {/* Left: Menu List */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center border-r border-border backdrop-blur-sm bg-background/95 z-10">
          <span className="font-mono text-accent text-xs tracking-widest mb-12 uppercase">
            // Interactive Menu Map
          </span>
          
          <div className="space-y-8">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer relative"
                onMouseEnter={() => setActiveId(item.id)}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className={cn(
                    "font-serif text-3xl md:text-4xl transition-colors duration-300",
                    activeId === item.id ? "text-accent" : "text-foreground group-hover:text-foreground/80"
                  )}>
                    {item.title}
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground">{item.price}</span>
                </div>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out border-l border-accent/50 ml-1 pl-4",
                  activeId === item.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <p className="font-mono text-xs text-accent uppercase mb-1">{item.category} — {item.provenance}</p>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Preview (The "Heat Map" Effect) */}
        <div className="relative hidden lg:block overflow-hidden bg-neutral-900">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                activeId === item.id ? "opacity-100" : "opacity-0"
              )}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
              
              {/* Overlay Details */}
              <div className="absolute bottom-12 right-12 text-right pointer-events-none">
                <span className="font-mono text-[100px] leading-none text-white/5 font-bold select-none">
                  0{item.id}
                </span>
              </div>
            </div>
          ))}
          
          {/* Grid Overlay Lines */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-3 gap-0 opacity-20">
             <div className="border-r border-white/20 h-full" />
             <div className="border-r border-white/20 h-full" />
             <div className="border-r border-white/20 h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
