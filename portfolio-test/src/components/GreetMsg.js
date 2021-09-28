import React from "react";
import placeImg from "../images/placeholder.jpg";

export class GreetMsg extends React.Component {
  render() {
    return (
      <div className="container w-10/12 h-3/4 mx-auto mt-16 mb-16 bg-gray-500 
      rounded-xl grid grid-cols-2">
        <div className="col-start-1 place-self-center">
          <img className="p-4 mx-auto w-9/12 rounded-xl" src={placeImg} alt="placeholder" />
        </div>
        <div className="p-4 col-start-2 place-self-center">
          <p className="font-mono 
          sm:text-base md:text-lg lg:text-2xl">
            Hi, my name is [name], and this is my portfolio!
            <br />
            <br />
            I am a sentence that describes me. I am a second
            sentence that describes me. I am a third sentence
            that describes me, if I want to add it in here.
          </p>
        </div>
      </div>  
    );
  }
}

/* 
  return (
    <div className="w-screen h-screen bg-pink-400">
      <Navbar />
      <div className="grid grid-cols-2 h-5/6 place-items-center mt-4">
        <div className="w-3/4">
          <img src={placeImg} alt="placeholder" />
        </div>
        <div>
          <p className="font-mono sm:text-xl md:text-4xl lg:text-6xl">Hi, my name is [Insert name here]!</p>
          <br/>
          <br/> 
          <p className="font-mono sm:text-lg md:text-2xl lg:text-5xl">[Insert summary here]</p>
        </div>
      </div>
    </div>
  );
*/
