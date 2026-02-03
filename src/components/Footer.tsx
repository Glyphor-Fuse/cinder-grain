import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-16 border-t border-border font-mono text-xs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-white">Cinder & Grain</h4>
            <p className="text-muted-foreground">
              Industrial Noir Dining.<br/>
              Est. 2024
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-accent uppercase tracking-widest">Location</h5>
            <p className="text-muted-foreground">
              88 Obsidian Avenue<br/>
              Iron District, NY 10012
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-accent uppercase tracking-widest">Hours</h5>
            <div className="space-y-1 text-muted-foreground">
              <p>Tue - Thu: 17:00 - 23:00</p>
              <p>Fri - Sat: 17:00 - 01:00</p>
              <p>Sun: 16:00 - 22:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-accent uppercase tracking-widest">Connect</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-muted-foreground pt-4 opacity-50">
              © 2024 Cinder & Grain.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
