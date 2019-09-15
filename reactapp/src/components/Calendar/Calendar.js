import React, {Component} from 'react';
import DatePicker from 'react-calendar';
import './Calendar.css';

// dummy data for now
let moodData = [
    ["2019-09-14", 60],
    ["2019-09-13", 70],
    ["2019-09-12", 75],
    ["2019-09-11", 80],
    ["2019-09-10", 90],
    ["2019-09-09", 70],
];

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            selectedDate : new Date(),
            data: null,
        };
        this.onClickDay = this.onClickDay.bind(this);
        this.setMoodColor = this.setMoodColor.bind(this);
    }

    componentDidMount() {
        fetch('http://mental-health-api.herokuapp.com/get_calendar')
            .then(response => console.log(response));
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
        for (let i = 0; i < moodData.length; i++){
            // loop through array until matching entry
            if (moodData[i][0] === entryDate){
                // sets mood rate of the entry
                entryScore = moodData[i][1];
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
