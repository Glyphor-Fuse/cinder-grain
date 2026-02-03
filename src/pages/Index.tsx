import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import MenuMap from "@/components/MenuMap";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Philosophy />
      <MenuMap />
      <ReservationCTA />
      <Footer />
    </main>
  );
}