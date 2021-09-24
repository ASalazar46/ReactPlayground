import React from "react";
import Logo from './SCEL_logo.png';

export class Sidebar extends React.Component {
    render() {
        return (
            <div className="grid grid-col-1 grid-row-6 space-y-2 ml-4">
                <div className="row-start-1 place-self-center container sm">
                    <img src={Logo} alt="SCEL logo"/>
                </div>
                <button className="box-border border-4 row-start-2 text-center
                bg-gray-300">
                    Home
                </button>
                <button className="box-border border-4 row-start-3 text-center
                bg-gradient-to-r from-green-300 to-gray-50">
                    Apple
                </button>
                <button className="box-border border-4 row-start-4 text-center
                bg-gradient-to-r from-yellow-300 to-gray-50">
                    Bumblebee
                </button>
                <button className="box-border border-4 row-start-5 text-center
                bg-gradient-to-r from-red-300 to-gray-50">
                    Cranberry
                </button>
                <button className="box-border border-4  row-start-6 text-center
                bg-gradient-to-r from-blue-300 to-gray-50">
                    Guava
                </button>
            </div>
        );
    };
}