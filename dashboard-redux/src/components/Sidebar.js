import React from "react";

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="grid grid-col-1 grid-row-6">
                <div className="box-border border-4 row-start-1 text-center">SCEL LOGO</div>
                <button className="box-border border-4 row-start-2 text-center">Home</button>
                <button className="box-border border-4 row-start-3 text-center">Apple</button>
                <button className="box-border border-4 row-start-4 text-center">Bumblebee</button>
                <button className="box-border border-4 row-start-5 text-center">Cranberry</button>
                <button className="box-border border-4  row-start-6 text-center">Guava</button>
            </div>
        );
    };
}