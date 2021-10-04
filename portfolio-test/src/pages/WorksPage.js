import { Navbar } from "../components/Navbar";
import { ListWorks } from "../components/ListWorks";

function WorksPage() {
  return (
    <div className="w-screen h-screen bg-pink-400 overflow-auto overscroll-auto">
      <Navbar />
      <ListWorks />
    </div> 
  );
}

export default WorksPage;