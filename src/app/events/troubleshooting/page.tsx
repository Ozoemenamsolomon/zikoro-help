"use client";
import EventsTroublshoot from "@/components/events/EventsTroubleshooting";
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
      <EventsTroublshoot/>
    </div>
  );
}
