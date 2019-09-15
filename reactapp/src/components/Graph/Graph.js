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
            },
            posts: [],
            entryDate: [],
            entryScore: [],
        }
    }

    setAxis() {
        for (let i = 0; i < this.state.posts.length; i++){
            console.log(this.state.posts[i].date);
            console.log(this.state.posts[i].score);
            this.state.entryDate.push(this.state.posts[i].date);
            this.state.entryScore.push(this.state.posts[i].score);
        }
    }

    componentDidMount() {
        fetch('http://mental-health-api.herokuapp.com/get_calendar')
            .then(response => response.json())
            .then(({ posts }) => {
                this.setState({ posts });
                this.setAxis();
            });
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
                labels: this.state.entryDate,
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
                        data: this.state.entryScore,
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