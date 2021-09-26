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
        <div>
          <p className="font-mono sm:text-xl md:text-4xl lg:text-7xl">Hi, my name is [Insert name here]!</p>
          <br/>
          <br/> 
          <br/>
          <br/>
          <p className="font-mono sm:text-base md:text-2xl lg:text-5xl">[Insert summary here]</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
