import HeroBook from "@/components/books/HeroBook";
import EventBody from "@/components/events/EventBody";
import Navbar from "@/components/Navbar";

export default function Bookings() {
    return (
      <div>
          <div className="sticky top-4 z-10">
          <Navbar/>
        </div>
        <HeroBook/>
        <EventBody/>
      </div>
    );
  }
  