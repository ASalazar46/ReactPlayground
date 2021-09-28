import React from "react";
import placeImg from "../images/placeholder.jpg";

export class GreetMsg extends React.Component {
  render() {
    return (
      <div className="container w-11/12 h-auto mx-auto mt-16 mb-16 bg-gray-500 
      rounded-xl grid grid-cols-3">
        <div className="p-4 col-start-1 place-self-center">
          <img className="w-11/12 rounded-xl" src={placeImg} alt="placeholder" />
        </div>
        <div className="font-mono p-4 col-start-2 col-span-2 place-self-center">
          <p className="md:text-xl lg:text-4xl">
            Hi, my name is [name here], and this is my WIP portfolio!
          </p>
          <br />
          <br />
          <br />
          <p className="md:text-xl lg:text-4xl">
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
    <div className="container w-auto h-auto mx-auto mt-16 mb-16 bg-gray-500 
    rounded-xl grid grid-cols-3">
      <div className="p-4 col-start-1 place-self-center">
        <img className="w-9/12 rounded-xl" src={placeImg} alt="placeholder" />
      </div>
      <div className="font-mono p-4 col-start-2 col-span-2 place-self-center">
        <p className="md:text-xl lg:text-4xl">
          Hi, my name is [name here], and this is my WIP portfolio!
        </p>
        <br />
        <br />
        <br />
        <p className="sm:text-base md:text-md lg:text-xl">
          I am a sentence that describes me. I am a second
          sentence that describes me. I am a third sentence
          that describes me, if I want to add it in here.
        </p>
      </div>
    </div>  
  );
*/
