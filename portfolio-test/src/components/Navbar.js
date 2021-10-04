import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <div
        className="h-12 min-w-full bg-gradient-to-r from-blue-400 to-indigo-400 
      grid grid-cols-10 place-content-stretch text-center place-items-center rounded-xl"
      >
        <button className="col-start-1 col-span-2 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          <Link to="/">Portfolio Test</Link>
        </button>
        <button className="col-start-7 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          <Link to="/aboutme">About Me</Link>
        </button>
        <button className="col-start-8 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          <Link to="/essays">Essays</Link>
        </button>
        <button className="col-start-9 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          <Link to="/works">Works </Link>
        </button>
        <button className="col-start-10 hover:bg-blue-100 font-mono text-sm md:text-lg lg:text-2xl">
          <Link to="/resume">Resume </Link>
        </button>
      </div>
    );
  }
}
