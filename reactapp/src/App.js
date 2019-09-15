import React from 'react';
import { TextEditor } from "./components/Editor";
import Title from "./components/Right/Title";
import Graph from "./components/Graph/Graph";
import Calendar from "./components/Calendar/Calendar";

class App extends React.Component{
    render() {
        return <div>
            <div style={{
                width:"40%",
                padding:"5%",
                float:"left"
            }}>

                <div style={{
                    color: "rgb(17, 17, 17)",
                    maxWidth: "740px",
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow: "rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",
                    padding: "20px",
                    margin: "25px auto 25px",
                    borderRadius: "4.5px"
                }}
                >
                    <Graph/>
                </div>
                <div style={{
                    color: "rgb(17, 17, 17)",
                    maxWidth: "740px",
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow: "rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",
                    padding: "20px",
                    margin: "25px auto 25px",
                    borderRadius: "4.5px"
                }}
                >
                    <Calendar/>
                </div>
            </div>
            <div style={{
                width:"40%",
                padding:"5%",
                float:"left",
            }}>
                <Title title="+ Create New Post" editable="True"/>
                <Title title="Went to my First Hackathon!" rating="84%" date="September 3rd, 2018" editable="False"/>
                <Title title="Won my First Hackathon" rating="100%" date="September 3rd, 2018" editable="False"/>
                <Title title="School is hard"  rating="22%" date="September 3rd, 2018" editable="False"/>
                <Title title="Went to my First Hackathon!" rating="84%" date="September 3rd, 2018" editable="False"/>
                <Title title="Won my First Hackathon" rating="100%" date="September 3rd, 2018" editable="False"/>
                <Title title="School is hard"  rating="22%" date="September 3rd, 2018" editable="False"/>
            </div>

        </div>
    }
}

export default App;
