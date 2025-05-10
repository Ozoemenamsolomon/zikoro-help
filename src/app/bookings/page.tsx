import EventBody from "@/components/events/EventBody";
import Navbar from "@/components/Navbar";

export default function Bookings() {
    return (
      <div>
          <div className="sticky top-4 z-10">
          <Navbar/>
        </div>
        <EventBody/>
      </div>
    );
  }
  