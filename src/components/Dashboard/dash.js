import { connect } from "react-redux";

import React, { Component } from "react";
import WordCloud from "../WordCloud";
import { Col, Row, Divider, Space } from "antd";
import RingChart from "../RingChart";
import BarChart from "../BarChart/BarChart";
import StatisticNumber from "../StatisticsNumber";
import {
  RingChartPercentageAction,
  WordCloudAction,
  statistics12MonthAction,
} from "../../redux/actions/DashboardActions";

import {
  PAGE_TITLE,
  COMPOSITION_OF_CERTIFICATE,
  POSITION_OF_LAB,
  TEST_REPORT,
  AUTHENTICATION_REPORT,
  CALIBRATION_REPORT,
  STATISTIC_12_MONTH,
} from "../zh";
import "./dashboard.css";
const myData = [{ value: 0.3334 }];

class DashBBoard extends Component {
  componentDidMount = () => {
    this.props.getPercentages();
    // console.log(typeof this.props.percentages.testReport);
    this.props.getWordCloud();
  };
  render() {
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
                <div className="word-cloud">
                  <WordCloud />
                </div>
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
                  <div className="row2-col1">
                    <span style={{ marginLeft: "24px" }}>
                      {STATISTIC_12_MONTH}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "80px",
                    }}
                  >
                    <BarChart />
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
    percentages: state.DashboardReducer,
    wordCloudData: state.WordCloudReducer,
    statistics12MonthData: state.statistics12MonthReducer,
  }),
  {
    getPercentages: RingChartPercentageAction,
    getWordCloud: WordCloudAction,
    get12Month: statistics12MonthAction,
  }
)(DashBBoard);
