import React from "react";
import { Line } from 'react-chartjs-2';

export class Graph extends React.Component {
    render() {
        const data = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
              },
            ],
          };
          const options = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            maintainAspectRatio: false
        };
        return(
            <div className="box-border border-4">
              <Line className="p-4" data={data} options={options} />
            </div>
        );
    };
}