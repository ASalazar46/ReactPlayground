import React from "react";

export class DataAverager extends React.Component {
    render() {
        return(
            <div className="text-center">
                <div class="box-border h-32 w-32 p-4 border-4 m-0">
                    Avg. SI
                    324.6 W/M^2
                </div>
                <div class="box-border h-32 w-32 p-4 border-4 m-0">
                    Avg. Temp
                    392.2 C
                </div>
                <div class="box-border h-32 w-32 p-4 border-4 m-0">
                    Avg. Pres
                    1018.316 MB
                </div>
                <div class="box-border h-32 w-32 p-4 border-4 m-0">
                    Avg. Hmdy
                    65532
                </div>  
            </div>
        );
    };
}