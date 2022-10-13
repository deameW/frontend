import { connect } from "react-redux";

import React, { Component } from "react";
import WordCloud from "../WordCloud";
import { Col, Row, Divider, Space } from "antd";
import RingChart from "../RingChart";
import BarChart from "../BarChart/BarChart";
import StatisticNumber from "../StatisticsNumber";
import { RingChartPercentageAction } from "../../redux/actions/DashboardActions";

import {
  PAGE_TITLE,
  COMPOSITION_OF_CERTIFICATE,
  POSITION_OF_LAB,
  TEST_REPORT,
  AUTHENTICATION_REPORT,
  CALIBRATION_REPORT,
} from "../zh";
import "./dashboard.css";
// data for ring chart
const myData = [{ value: 0.3334 }];

export class Dashboard extends Component {
  componentDidUpdate = () => {
    console.log("-------------componentDidUpdate------------------");

    // console.log(this.props.percentages);
  };

  componentDidMount = () => {
    console.log("-------------componentDidMount------------------");
    //call ringchart action to get data
    this.props.getPercentages();
  };
  render() {
    console.log("-------------render------------------");

    return (
      <>
        <h1>{PAGE_TITLE}</h1>

        <div className="container">
          {/* First Line */}
          <Row>
            {/* "证书构成" */}
            <Col>
              <div className="row1-col1">
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
                    <span style={{ marginLeft: "24px" }}>
                      {COMPOSITION_OF_CERTIFICATE}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "37px",
                    }}
                  >
                    <div className="ringchart">
                      <RingChart data={myData} color={"#7890FF"} />
                      <p className="report-name">{TEST_REPORT}</p>
                    </div>
                    <div className="ringchart">
                      <RingChart data={myData} color={"#4890FF"} />
                      <div className="report-name">{AUTHENTICATION_REPORT}</div>
                    </div>
                    <div className="ringchart">
                      <RingChart data={myData} color={"#9890FF"} />
                      <div className="report-name">{CALIBRATION_REPORT}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="row1-col2">
                <div
                  style={{
                    height: "56px",
                    textAlign: "left",
                    fontSize: "16px",
                    lineHeight: "56px",
                    borderBottom: "solid #D9D9D9 1px",
                  }}
                >
                  <span style={{ marginLeft: "24px" }}>{POSITION_OF_LAB}</span>
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
                  <div
                    style={{
                      height: "56px",
                      textAlign: "left",
                      fontSize: "16px",
                      lineHeight: "56px",
                      borderBottom: "solid #D9D9D9 1px",
                    }}
                  >
                    <span style={{ marginLeft: "24px" }}>
                      近12月证书检测量统计
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "80px",
                    }}
                  >
                    <BarChart></BarChart>
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
export default connect(
  (state) => ({
    percentages: state.DashboardReducer.percentages,
  }),
  {
    getPercentages: RingChartPercentageAction,
  }
)(Dashboard);
