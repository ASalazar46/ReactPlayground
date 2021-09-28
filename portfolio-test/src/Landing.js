import { Navbar } from "./components/Navbar";
import { GreetMsg } from "./components/GreetMsg";

function Landing() {
  return (
    <div className="w-screen h-screen bg-pink-400">
      <Navbar />
      <GreetMsg />
    </div>
  );
}

export default Landing;
