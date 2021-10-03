import React from 'react';
import imgholder from '../images/placeholder.jpg';

export class EssayCard extends React.Component {
  render() {
    return (
      <div className="container grid grid-cols-5 w-3/6 bg-white rounded-xl">
        <div className="col-start-1 self-center">
          <img className="p-4" src={imgholder} alt="placeholder" />
        </div>
        <div className="col-start-2 col-span-4 self-center space-y-1">
          <p className="text-center">I am a title</p>
          <p className="text-center">I am a date</p>
          <p className="text-center">I am a summary</p>
        </div>
      </div>  
    );  
  }
}
