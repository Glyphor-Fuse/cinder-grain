import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Philosophy() {
  return (
    <section className="bg-background text-foreground border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Content */}
        <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
          <div className="space-y-8">
            <span className="font-mono text-xs tracking-widest text-accent uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Our Manifesto
            </span>
            
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              We believe in the honest <br/> brutality of fire.
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light text-lg">
              <p>
                Cooking is an act of transformation. At Cinder & Grain, we strip away the unnecessary. No foams, no gels, no distractions. Just the raw interplay of heat, time, and ingredients.
              </p>
              <p>
                We source exclusively from heritage breeds and local foragers. Our charcoal is made in-house from sustainable hardwoods. Every plate tells a story of origin, effort, and respect.
              </p>
            </div>

            <div className="pt-8">
               <div className="grid grid-cols-3 gap-4 font-mono text-xs text-center border-t border-border pt-8">
                 <div className="space-y-2">
                   <span className="block text-2xl font-serif text-foreground">1400°</span>
                   <span className="uppercase text-muted-foreground">Peak Temp</span>
                 </div>
                 <div className="space-y-2 border-l border-border">
                   <span className="block text-2xl font-serif text-foreground">45</span>
                   <span className="uppercase text-muted-foreground">Days Aged</span>
                 </div>
                 <div className="space-y-2 border-l border-border">
                   <span className="block text-2xl font-serif text-foreground">0%</span>
                   <span className="uppercase text-muted-foreground">Compromise</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right: Imagery */}
        <div className="relative min-h-[500px] lg:min-h-auto bg-neutral-900">
           <img 
            src="/images/chef-hands.jpg" 
            alt="Chef plating with precision" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
           />
           <div className="absolute inset-0 grid grid-rows-3 pointer-events-none">
             <div className="border-b border-white/10" />
             <div className="border-b border-white/10" />
           </div>
        </div>
      </div>
    </section>
  );
}
