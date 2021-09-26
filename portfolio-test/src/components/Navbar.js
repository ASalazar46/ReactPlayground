import React from 'react';

export class Navbar extends React.Component {
  render() {
    return (
      <div className="h-12 min-w-full bg-gradient-to-r from-blue-400 to-indigo-400 
      grid grid-cols-10 place-content-stretch text-center place-items-center">
        <div className="col-start-1 col-span-2 font-mono text-sm md:text-lg lg:text-2xl">
          Portfolio Test
        </div>
        <div className="col-start-3 col-end-8 font-mono text-sm md:text-lg lg:text-2xl">
          <label>Contact Me:        </label>
          <select>
              <option className="select-text">(###) ### - ####</option>
              <option className="select-text">sample.email@srvcr.ext</option>
              <option className="select-text">linkedin.com/my-prof</option>
          </select>
        </div>
        <button className="col-start-8 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          Essays
        </button>
        <button className="col-start-9 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          Works
        </button>
        <button className="col-start-10 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          Resume
        </button>
      </div>
    );
  }
}