import React from 'react';
import { TextEditor } from "./components/Editor";
import Title from "./components/Right/Title";
import Graph from "./components/Graph/Graph";

class App extends React.Component{
    render() {
        return <div>
            <div style={{
                width:"40%",
                padding:"5%",
                float:"left"
            }}>
                <Graph/>
            </div>
            <div style={{
                width:"40%",
                padding:"5%",
                float:"left"
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
