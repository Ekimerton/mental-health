import React, {Component} from 'react';
import {TextEditor} from "../../components/Editor";

class Title extends Component {
    state = {
        editing: false,
        jsonData: {
            "object": "value",
            "document": {
                "object": "document",
                "nodes": [
                    {
                        "object": "block",
                        "type": "paragraph",
                        "nodes": [
                            {
                                "object": "text",
                                "text": "This is editable "
                            },
                            {
                                "object": "text",
                                "text": "rich",
                                "marks": [
                                    {
                                        "type": "bold"
                                    }
                                ]
                            },
                            {
                                "object": "text",
                                "text": " text, "
                            },
                            {
                                "object": "text",
                                "text": "much",
                                "marks": [
                                    {
                                        "type": "italic"
                                    }
                                ]
                            },
                            {
                                "object": "text",
                                "text": " better than a "
                            },
                            {
                                "object": "text",
                                "text": "<textarea>",
                                "marks": [
                                    {
                                        "type": "code"
                                    }
                                ]
                            },
                            {
                                "object": "text",
                                "text": "!"
                            }
                        ]
                    },
                    {
                        "object": "block",
                        "type": "paragraph",
                        "nodes": [
                            {
                                "object": "text",
                                "text": "Since it's rich text, you can do things like turn a selection of text "
                            },
                            {
                                "object": "text",
                                "text": "bold",
                                "marks": [
                                    {
                                        "type": "bold"
                                    }
                                ]
                            },
                            {
                                "object": "text",
                                "text": ", or add a semantically rendered block quote in the middle of the page, like this:"
                            }
                        ]
                    },
                    {
                        "object": "block",
                        "type": "block-quote",
                        "nodes": [
                            {
                                "object": "text",
                                "text": "A wise quote."
                            }
                        ]
                    },
                    {
                        "object": "block",
                        "type": "paragraph",
                        "nodes": [
                            {
                                "object": "text",
                                "text": "Try it out for yourself!"
                            }
                        ]
                    }
                ]
            }
        },
    };

    myFunction = (e) => {
        this.setState({
            editing: true
        })
    };

    render() {
        if (!this.state.editing) {
            return (
                <div style={{
                    color: "rgb(17, 17, 17)",
                    maxWidth: "740px",
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow: "rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",
                    padding: "20px",
                    margin: "25px auto 25px",
                    borderRadius: "4.5px"
                }}
                     onClick={this.myFunction}
                >
                    <h1>{this.props.title} | {this.props.rating}</h1>
                    <h3>{this.props.date}</h3>
                </div>
            );
        } else {
            return (
                <div style={{
                    color: "rgb(17, 17, 17)",
                    maxWidth: "740px",
                    backgroundColor: "rgb(255, 255, 255)",
                    boxShadow: "rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",
                    padding: "20px",
                    margin: "25px auto 25px",
                    borderRadius: "4.5px"
                }}>

                    <TextEditor editable={this.props.editable}
                                jsonData={{
                        "object": "value",
                        "document": {
                            "object": "document",
                            "nodes": [
                                {
                                    "object": "block",
                                    "type": "paragraph",
                                    "nodes": [
                                        {
                                            "object": "text",
                                            "text": "This is editable "
                                        },
                                        {
                                            "object": "text",
                                            "text": "rich",
                                            "marks": [
                                                {
                                                    "type": "bold"
                                                }
                                            ]
                                        },
                                        {
                                            "object": "text",
                                            "text": " text, "
                                        },
                                        {
                                            "object": "text",
                                            "text": "much",
                                            "marks": [
                                                {
                                                    "type": "italic"
                                                }
                                            ]
                                        },
                                        {
                                            "object": "text",
                                            "text": " better than a "
                                        },
                                        {
                                            "object": "text",
                                            "text": "<textarea>",
                                            "marks": [
                                                {
                                                    "type": "code"
                                                }
                                            ]
                                        },
                                        {
                                            "object": "text",
                                            "text": "!"
                                        }
                                    ]
                                },
                                {
                                    "object": "block",
                                    "type": "paragraph",
                                    "nodes": [
                                        {
                                            "object": "text",
                                            "text": "Since it's rich text, you can do things like turn a selection of text "
                                        },
                                        {
                                            "object": "text",
                                            "text": "bold",
                                            "marks": [
                                                {
                                                    "type": "bold"
                                                }
                                            ]
                                        },
                                        {
                                            "object": "text",
                                            "text": ", or add a semantically rendered block quote in the middle of the page, like this:"
                                        }
                                    ]
                                },
                                {
                                    "object": "block",
                                    "type": "block-quote",
                                    "nodes": [
                                        {
                                            "object": "text",
                                            "text": "A wise quote."
                                        }
                                    ]
                                },
                                {
                                    "object": "block",
                                    "type": "paragraph",
                                    "nodes": [
                                        {
                                            "object": "text",
                                            "text": "Try it out for yourself!"
                                        }
                                    ]
                                }
                            ]
                        }
                    }}/>
                </div>

            )
        }

    }
}

export default Title;