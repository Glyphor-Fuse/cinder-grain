import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ReservationCTA() {
  return (
    <section className="py-24 bg-neutral-900 text-foreground relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="/images/texture-charcoal.jpg" alt="Charcoal texture" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-5xl md:text-6xl text-white mb-2">Secure Your Table</h2>
          <p className="font-mono text-accent text-sm tracking-widest uppercase">
            Limited Seating • Reservations Recommended
          </p>

          <div className="bg-background/5 p-8 border border-white/10 backdrop-blur-md mt-12">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1 text-left">
                <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">Date</label>
                <Input type="date" className="bg-background/20 border-white/10 text-white rounded-none h-12" />
              </div>
              
              <div className="space-y-1 text-left">
                <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">Guests</label>
                <select className="flex h-12 w-full items-center justify-between rounded-none border border-white/10 bg-background/20 px-3 py-2 text-sm text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6+ Guests</option>
                </select>
              </div>

              <div className="space-y-1 text-left">
                <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">Time</label>
                <select className="flex h-12 w-full items-center justify-between rounded-none border border-white/10 bg-background/20 px-3 py-2 text-sm text-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button className="w-full h-12 rounded-none bg-accent hover:bg-accent/90 text-accent-foreground font-mono uppercase tracking-widest border border-accent">
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
