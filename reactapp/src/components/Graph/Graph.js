import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './Graph.css';

class Graph extends Component {
    constructor(props){
        super(props);
        // set graph options
        this.state = {
            options: {
                legend: {
                    display: false
                }
            }
        }
    }

    render() {
        const moodData = (canvas) => {
            // create gradient
            const ctx = canvas.getContext("2d")
            const gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, "#80b6f4");
            gradientStroke.addColorStop(0.2, "#94d973");
            gradientStroke.addColorStop(0.5, "#fad874");
            gradientStroke.addColorStop(1, "#f49080");
            return {
                // set x-axis labels
                labels: ['Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05', 'Sep 06', 'Sep 07', 'Sep 08', 'Sep 09', 'Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14'],
                // customize data
                datasets: [
                    {
                        label: 'Mood Chart',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: gradientStroke,
                        borderColor: gradientStroke,
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: gradientStroke,
                        pointBackgroundColor: gradientStroke,
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: gradientStroke,
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        // y-axis data
                        data: [85, 84, 85, 86, 90, 80, 70, 60, 50, 10, 20, 70, 40, 3]
                    }
                ]
            }
        };
        return (
            <div>
                <h1 className="text-center">Your mood graph!</h1>
                <Line
                    data={moodData}
                    options={this.state.options}
                />
            </div>
        );
    }
}

export default Graph;