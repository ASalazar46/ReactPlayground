import { Navbar } from "../components/Navbar";
import { ListEssays } from "../components/ListEssays";

function EssayPage() {
  return (
    <div className="w-screen h-auto bg-pink-400">
      <Navbar />
      <ListEssays />
    </div>
  );
}

export default EssayPage;