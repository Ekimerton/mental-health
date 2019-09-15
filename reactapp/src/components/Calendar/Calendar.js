import React, {Component} from 'react';
import DatePicker from 'react-calendar';
import './Calendar.css';


class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            selectedDate : new Date(),
            posts: [],
        };
        this.onClickDay = this.onClickDay.bind(this);
        this.setMoodColor = this.setMoodColor.bind(this);
    }

    componentDidMount() {
        fetch('http://mental-health-api.herokuapp.com/get_calendar')
            .then(response => response.json())
            .then(({ posts }) => {
                this.setState({ posts });
            });
    }

    // onClickDay(date) sets the selectedDate and opens the corresponding entry
    onClickDay(date) {
        this.setState({selectedDate:date});
        // should open corresponding entry
    }

    // setMoodColor(date) sets the mood coloring scale for the given date
    // if there was an entry on that date (else leaves it blank)
    setMoodColor({ date }) {
        // format given date
        let entryDate = date.toISOString().substr(0, 10);
        let entryScore;
        for (let i = 0; i < this.state.posts.length; i++){
            // loop through array until matching entry
            if (this.state.posts[i].date === entryDate){
                // sets mood rate of the entry
                entryScore = this.state.posts[i].score;
                break;
            }
        }
        // sets mood coloring
        if (entryScore >= 85) {
            return 'great-mood';
        } else if (entryScore >= 65) {
            return 'good-mood';
        } else if (entryScore >= 45) {
            return 'ok-mood';
        } else {
            return 'bad-mood';
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Your mood calendar!</h1>
                <DatePicker
                    // can't have future entries
                    maxDate={this.state.today}
                    // select an entry
                    onClickDay={this.onClickDay}
                    // sets the mood coloring scale
                    tileClassName={this.setMoodColor}
                    className={"w-100"}
                />
            </div>
        );
    }
}

export default Calendar;
