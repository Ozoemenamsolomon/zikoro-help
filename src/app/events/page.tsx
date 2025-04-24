import EventBody from "@/components/events/EventBody";
import HeroEvent from "@/components/events/HeroEvent";
import Navbar from "@/components/Navbar";

export default function Events() {
  return (
    <div className="">
        <div className="sticky top-4 z-10">
          <Navbar/>
        </div>
      <HeroEvent />
      <EventBody />
    </div>
  );
}
