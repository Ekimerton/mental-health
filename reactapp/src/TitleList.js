import React from 'react';
import Title from "./components/Right/Title";
import { TextEditor } from "./components/Editor";

class TitleList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch("/user")
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        var theEntries = []
        for (var i = 0; i < data.posts.length; i++) {
          console.log(data.posts[i])
          var entry = {
            title: data.posts[i].entry.substring(0, 30),
            date: data.posts[i].date,
            score: data.posts[i].score
          }
          theEntries.unshift(entry);
        }
        console.log(theEntries)
        this.setState({
          entries: theEntries
        })
      })
  }

  render() {
    //var entries = [{title:"fwefewfe", score:"dqwdwq", date:"dwqdwqdqw"},
    //          {title:"fwefewfe", score:"dqwdwq", date:"dwqdwqdqw"}]

    const listItems = this.state.entries.map((entry) =>
      <Title title={entry.title} rating={entry.score + "%"} date={entry.date} editable="False"/>
    );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default TitleList;
