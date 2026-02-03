import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background text-foreground flex flex-col justify-center items-center border-b border-border">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-fire.jpg" 
          alt="Chef cooking over open fire" 
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="font-mono text-accent tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
          Est. 2024 • Industrial Noir Dining
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter text-foreground mb-6 mix-blend-overlay">
          CINDER <span className="text-accent">&</span> GRAIN
        </h1>
        <p className="font-mono text-muted-foreground max-w-xl mx-auto mb-10 text-sm md:text-lg border-l-2 border-accent pl-6 text-left">
          Fire-driven cuisine. Uncompromising provenance. 
          Where the raw elegance of charcoal meets the precision of modern gastronomy.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 px-8 font-mono text-sm tracking-widest uppercase border border-accent">
            Book a Table
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent text-foreground border-foreground/30 hover:bg-foreground/10 hover:text-foreground rounded-none h-14 px-8 font-mono text-sm tracking-widest uppercase">
            View Menus
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}
