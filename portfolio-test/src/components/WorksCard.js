import React from 'react';
import imgholder from '../images/placeholder.jpg';

export class WorksCard extends React.Component {
  render() {
    return (
      <div className="container grid grid-cols-5 w-3/6 bg-white rounded-xl">
        <div className="col-start-1 self-center">
          <img className="p-4" src={imgholder} alt="placeholder" />
        </div>
        <div className="col-start-2 col-span-4 self-center p-4">
          <p className="text-center text-base">{this.props.meta.title}</p>
          <p className="text-center text-sm">{this.props.meta.date}</p>
          <p className="text-center text-sm">{this.props.meta.summary}</p>
        </div>
      </div>  
    );  
  }
}
