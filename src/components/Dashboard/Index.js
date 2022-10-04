import React, { Component } from "react";
import KnowledgeGraph from "../KnowledgeGraph";
import WordCloud from "../WordCloud";
import DialogBox from "../DialogBox";
export class Dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        {/* <WordCloud></WordCloud> */}
        {/* <></KnowledgeGraph> */}
        <DialogBox></DialogBox>
      </>
    );
  }
}
