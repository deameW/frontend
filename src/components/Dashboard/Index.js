import React, { Component } from "react";
import KnowledgeGraph from "../KnowledgeGraph";
import WordCloud from "../WordCloud";
import DialogBox from "../DialogBox";
import { Col, Row, Divider, Space } from "antd";
import RingChart from "../RingChart";
import BarChart from "../BarChart/BarChart";

// data for ring chart
const myData = [
  { type: "已完成", percent: 0.6666 },
  { type: "待提升", percent: 0.3334 },
];
const myContent = {
  siteCode: "电商",
  title: "注册成功率",
  percent: "66.66%",
};

export class Dashboard extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <h1>计量大数据可视化平台(海军)</h1>
        {/* <WordCloud></WordCloud> */}
        {/* <KnowledgeGraph></KnowledgeGraph> */}

        {/* the box that contains the knowledge graph */}
        {/* <DialogBox>
          <KnowledgeGraph />
        </DialogBox> */}
        <div
          id="container"
          style={{
            width: "1325px",
            // height: "689px",
            backgroundColor: "#D9D9D9",
            padding: "50px",
          }}
        >
          <Row style={{}}>
            <Col>
              <div
                style={{
                  width: "800px",
                  backgroundColor: "white",
                  height: "310px",
                }}
              >
                <div>
                  证书构成
                  <Divider style={{ wdith: "800px" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "80px",
                    }}
                  >
                    <RingChart data={myData} content={myContent} />
                    <RingChart data={myData} content={myContent} />
                    <RingChart data={myData} content={myContent} />
                    {/* <RingChart />
                    <RingChart /> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  marginLeft: "100px",
                }}
              >
                检测实验室所在地
                <Divider></Divider>
                <h1>词云</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  width: "800px",
                  backgroundColor: "white",
                  height: "310px",
                  marginTop: "30px",
                }}
              >
                <div>
                  近12月检测量统计
                  <Divider style={{ wdith: "800px" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "80px",
                    }}
                  >
                    <BarChart></BarChart>
                    {/* <RingChart />
                    <RingChart /> */}
                  </div>
                </div>
              </div>
            </Col>
            <Col>4</Col>
          </Row>
        </div>
      </>
    );
  }
}
