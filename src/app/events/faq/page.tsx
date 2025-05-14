"use client";
import EventsFaq from "@/components/events/EventsFaq";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <div>
      {" "}
      <div className="sticky top-4 z-10">
        <Navbar />
      </div>
      <Hero />
      <EventsFaq/>
    </div>
  );
}
