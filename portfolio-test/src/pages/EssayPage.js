import { Navbar } from "../components/Navbar";
import { ListEssays } from "../components/ListEssays";

function EssayPage() {
  return (
    <div className="w-screen h-screen bg-pink-400 overflow-auto overscroll-auto">
      <Navbar />
      <ListEssays />
    </div>
  );
}

export default EssayPage;