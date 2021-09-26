import { Navbar } from "./components/Navbar";
import placeImg from "./placeholder.jpg";

function Landing() {
  return (
    <div className="App w-screen h-screen bg-pink-400">
      <Navbar />
      <div className="grid grid-cols-2 h-5/6 place-items-center mt-4">
        <div className="w-3/4">
          <img src={placeImg} alt="placeholder" />
        </div>
        <div className="">
          <h1>[Insert name here]</h1>
          <br />
          <h2>[Insert summary here]</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
