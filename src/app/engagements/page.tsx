import EngBody from "@/components/engage/EngBody";
import HeroEng from "@/components/engage/HeroEng";
import Navbar from "@/components/Navbar";

export default function Engagements() {
  return (
    <div>
        <div className="sticky top-4 z-10">
          <Navbar />
        </div>
      <HeroEng />
      <EngBody />
    </div>
  );
}
