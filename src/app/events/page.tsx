"use client";
import EventsBody from "@/components/events/EventBody";
import HelpBody from "@/components/HelpBody";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Events() {
  return (
    <div>
      {" "}
      <div className="sticky top-4 z-10">
        <Navbar />
      </div>
      <Hero/>
      <EventsBody/>
    </div>
  );
}
