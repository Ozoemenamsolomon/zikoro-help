import CredBody from "@/components/cred/CredBody";
import Navbar from "@/components/Navbar";

export default function Credentials() {
  return (
    <div>
      <div className="sticky top-4 z-10">
        <Navbar />
      </div>
      <CredBody />
    </div>
  );
}
