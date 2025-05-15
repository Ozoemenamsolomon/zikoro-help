import BooksBody from "@/components/books/BooksBody";
import Navbar from "@/components/Navbar";

export default function Bookings() {
    return (
      <div>
          <div className="sticky top-4 z-10">
          <Navbar/>
        </div>
        <BooksBody/>
      </div>
    );
  }
  