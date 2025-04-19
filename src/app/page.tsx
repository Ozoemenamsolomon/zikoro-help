import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HelpBody from "@/components/HelpBody";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HelpFooter from "@/components/HelpFooter";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <HelpBody/>
    <HelpFooter/>
    <Footer/>
   </div>
  );
}
