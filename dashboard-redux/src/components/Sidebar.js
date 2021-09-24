import React from "react";

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="grid grid-col-1 grid-row-6">
                <div className="row-start-1 text-center">
                    <button>SCEL LOGO</button>
                </div>
                <div className="row-start-2 text-center">
                    <button>Home</button>
                </div>
                <div className="row-start-3 text-center"> 
                    <button>Apple</button>
                </div>
                <div className="row-start-4 text-center">
                    <button>Bumblebee</button>
                </div>
                <div className="row-start-5 text-center">
                    <button>Cranberry</button>
                </div>
                <div className="row-start-6 text-center">
                    <button>Guava</button>
                </div>
            </div>
        );
    };
}