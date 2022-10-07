import React, { Component } from "react";
import KnowledgeGraph from "../KnowledgeGraph";
import WordCloud from "../WordCloud";
import DialogBox from "../DialogBox";
import { Col, Row, Divider, Space } from "antd";
import RingChart from "../RingChart";
import BarChart from "../BarChart/BarChart";
import StatisticNumber from "../StatisticsNumber";

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
            // padding: "50px",
          }}
        >
          {/* First Line */}
          <Row>
            {/* "证书构成" */}
            <Col>
              <div
                style={{
                  width: "748px",
                  backgroundColor: "white",
                  height: "310px",
                  marginLeft: "50px",
                  marginTop: "50px",
                }}
              >
                <div>
                  <div
                    style={{
                      height: "56px",
                      textAlign: "left",
                      fontSize: "16px",
                      lineHeight: "56px",
                      borderBottom: "solid #D9D9D9 1px",
                    }}
                  >
                    <span style={{ marginLeft: "24px" }}>证书构成</span>
                  </div>
                  {/* <Divider style={{ wdith: "748px", height: "1px" }} /> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "37px",
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
                  width: "381px",
                  backgroundColor: "white",
                  marginLeft: "75px",
                  marginTop: "50px",
                }}
              >
                <div
                  style={{
                    height: "56px",
                    textAlign: "left",
                    fontSize: "16px",
                    lineHeight: "56px",
                    borderBottom: "solid #D9D9D9 1px",
                  }}
                >
                  <span style={{ marginLeft: "24px" }}>实验室所在地</span>
                </div>
                <WordCloud></WordCloud>
              </div>
            </Col>
          </Row>
          <Row align="middle">
            <Col>
              <div
                style={{
                  width: "748px",
                  backgroundColor: "white",
                  height: "310px",
                  marginTop: "14px",
                  marginLeft: "50px",
                }}
              >
                <div>
                  近12月检测量统计
                  <Divider style={{ wdith: "748px" }} />
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
            <Col>
              <div
                style={{
                  width: "381px",
                  backgroundColor: "white",
                  marginLeft: "75px",
                  marginTop: "54PX",
                  height: "175px",
                }}
              >
                <div
                  style={{
                    padding: "30px",
                    backgroundColor: "#ECECEC",
                  }}
                >
                  <StatisticNumber />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
