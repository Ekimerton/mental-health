import React, {Component} from 'react';
import DatePicker from 'react-calendar';
import './Calendar.css';

// dummy data for now
const moodData = [
    ["2019-09-14", true, 10],
    ["2019-09-13", false, ""],
    ["2019-09-12", true, 90],
    ["2019-09-11", true,  3],
    ["2019-09-10", true,  40],
    ["2019-09-09", true,  70],
];

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            selectedDate : new Date()
        };
        this.onClickDay = this.onClickDay.bind(this);
        this.setMoodColor =this.setMoodColor.bind(this);
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
        let isEntry;
        let entryScore;
        for (let i = 0; i < moodData.length; i++){
            // loop through array until matching entry
            if (moodData[i][0] === entryDate){
                // checks if there was an entry on the given date
                isEntry = moodData[i][1];
                if (isEntry) {
                    // sets mood rate of the entry
                    entryScore = moodData[i][2];
                }
                break;
            }
        }
        // sets mood coloring
        if (isEntry) {
            if (entryScore >= 75) {
                return 'good-mood';
            } else if (entryScore >= 45) {
                return 'medium-mood';
            } else {
                return 'bad-mood';
            }
        } else {
            return 'no-entry';
        }
    }

    render() {
        return (
            <div>
                <h1>This is the selected date: {this.state.selectedDate.toDateString()}</h1>
                <DatePicker
                    // can't have future entries
                    maxDate={this.state.today}
                    // select an entry
                    onClickDay={this.onClickDay}
                    // sets the mood coloring scale
                    tileClassName={this.setMoodColor}
                />
            </div>
        );
    }
}

export default Calendar;