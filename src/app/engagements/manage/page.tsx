"use client";
import EngManage from "@/components/engage/EngManage";
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
      <EngManage />
    </div>
  );
}
