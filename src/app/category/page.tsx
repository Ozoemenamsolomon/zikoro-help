import CategoryBody from "@/components/category/CategoryBody";
import Navbar from "@/components/Navbar";

export default function Category() {
  return (
    <div>
        <div className="sticky top-4 z-10">
          <Navbar />
        </div>
      <CategoryBody />
    </div>
  );
}
