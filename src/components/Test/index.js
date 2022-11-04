import React from "react";
import "./style.css";
export class Test extends React.Component {
  render() {
    return (
      <>
      <div>
        <h1>Test</h1>
        <div
          className="box"
          style={{
            width: "900px",
            border: "black solid",
            height: "600px",
          }}
        >
          <div className="child">test1</div>
          <div className="child">test1</div>
          <div className="child">test1</div>
        </div>
        </div>
      </>
    );
  }
}
export default Test;
