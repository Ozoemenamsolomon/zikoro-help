import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HelpBody from "@/components/HelpBody";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HelpFooter from "@/components/HelpFooter";

export default function Home() {
  return (
    <div>
      <div className="sticky top-4 z-10">
        <Navbar />
      </div>
      <Hero />
      <HelpBody />
      <HelpFooter />
      <Footer />
    </div>
  );
}
