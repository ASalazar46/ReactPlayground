import React from "react";
import '../index.css';

export class PageHeader extends React.Component {
    render() {
        return(
            <div>
                <div className="text-center">
                    <span>Weatherbox Data</span>
                </div>
                <div className="text-center">
                    <span>Last Updated: [Need current date and time here]</span>
                </div>
            </div>
        );
    };
}
