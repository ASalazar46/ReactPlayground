import React from "react";

export class DataAverager extends React.Component {
    render() {
        return(
            <div className="grid grid-rows-2 grid cols-2 space-x-1">
                <div className="grid row-start-1 col-start-1 row-end-5 col-end-2">
                    <div className="box-border h-40 w-40 p-4 border-4 mb-0.5 text-center">
                        <p>Avg. Solar Irradiance</p>
                        <br />
                        <p>324.6 W/M^2</p>    
                    </div>
                    <div className="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5 text-center">
                        <p>Avg. Temperature</p>
                        <br />
                        <p>392.2 C</p>
                    </div>
                    <div className="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5 text-center">
                        <p>Avg. Pressure</p>
                        <br />
                        <p>1018.316 MB</p>
                    </div>
                    <div className="box-border h-40 w-40 p-4 border-4 mt-0.5 text-center">
                        <p>Avg. Humidity</p>
                        <br />
                        <p>65532</p>
                    </div>
                </div>
                <div className="grid row-start-1 col-start-2 row-end-5 col-end-3">
                    <div className="box-border h-40 w-40 p-4 border-4 mb-0.5 text-center">
                        <p>Curr. Solar Irradiance</p>
                        <br />
                        <p>324.6 W/M^2</p>
                    </div>
                    <div className="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5 text-center">
                        <p>Curr. Temperature</p>
                        <br />
                        <p>392.2 C</p>
                    </div>
                    <div className="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5 text-center">
                        <p>Curr. Pressure</p>
                        <br />
                        <p>1018.316 MB</p>
                    </div>
                    <div className="box-border h-40 w-40 p-4 border-4 mt-0.5 text-center">
                        <p>Curr. Humidity</p>
                        <br />
                        <p>65532</p>
                    </div>
                </div>
            </div>
        );
    };
}