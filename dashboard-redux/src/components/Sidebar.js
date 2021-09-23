import React from "react";

export class Sidebar extends React.Component {
    render() {
        return (
            <div class="grid grid-col-1 grid-row-12 grid-flow-row space-y-10">
                <div class="row-start-1 row-end-2">
                    <button>SCEL LOGO</button>
                </div>
                <div class="row-start-3 row-end-4">
                    <button>Home</button>
                </div>
                <div class="row-start-5 row-end-6"> 
                    <button>Apple</button>
                </div>
                <div class="row-start-7 row-end-8">
                    <button>Bumblebee</button>
                </div>
                <div class="row-start-9 row-end-10">
                    <button>Cranberry</button>
                </div>
                <div class="row-start-11 row-end-12">
                    <button>Guava</button>
                </div>
            </div>
        );
    };
}