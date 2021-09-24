import React from "react";

export class DataAverager extends React.Component {
    render() {
        return(
            <div className="grid grid-rows-2 grid cols-2 space-x-1">
                <div className="grid row-start-1 col-start-1 row-end-5 col-end-2">
                    <div class="box-border h-40 w-40 p-4 border-4 mb-0.5">
                        Avg. SI
                        324.6 W/M^2
                    </div>
                    <div class="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5">
                        Avg. Temp
                        392.2 C
                    </div>
                    <div class="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5">
                        Avg. Pres
                        1018.316 MB
                    </div>
                    <div class="box-border h-40 w-40 p-4 border-4 mt-0.5">
                        Avg. Hmdy
                        65532
                    </div>
                </div>
                <div className="grid row-start-1 col-start-2 row-end-5 col-end-3">
                    <div class="box-border h-40 w-40 p-4 border-4 mb-0.5">
                        Curr. SI
                        324.6 W/M^2
                    </div>
                    <div class="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5">
                        Curr. Temp
                        392.2 C
                    </div>
                    <div class="box-border h-40 w-40 p-4 border-4 mt-0.5 mb-0.5">
                        Curr. Pres
                        1018.316 MB
                    </div>
                    <div class="box-border h-40 w-40 p-4 border-4 mt-0.5">
                        Curr. Hmdy
                        65532
                    </div>
                </div>
            </div>
        );
    };
}