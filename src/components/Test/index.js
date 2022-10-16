import React from "react";
export class Test extends React.Component {
  render() {
    return (
      <>
        <h1>Test</h1>
        <div
          style={{
            width: "600px",
            border: "black solid",
            height: "600px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>test1</div>
          <div>test1</div>
          <div>test1</div>
        </div>
      </>
    );
  }
}
export default Test;
