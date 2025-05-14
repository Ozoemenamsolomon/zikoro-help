"use client";
import EventsCreate from "@/components/events/EventCreate";
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
      <EventsCreate/>
    </div>
  );
}
