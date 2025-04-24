import Hero from "@/components/Hero";
import HelpBody from "@/components/HelpBody";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="sticky top-4 z-10">
        <Navbar />
      </div>
      <Hero />
      <HelpBody />
    </div>
  );
}
