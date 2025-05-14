"use client";
import EventsBody from "@/components/events/EventBody";
import EventsAnalytics from "@/components/events/EventsAnalytics";
import HelpBody from "@/components/HelpBody";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Analytics() {
  return (
    <div>
      {" "}
      <div className="sticky top-4 z-10">
        <Navbar />
      </div>
      <Hero/>
      <EventsAnalytics/>
    </div>
  );
}
