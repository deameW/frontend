import { connect } from "react-redux";

import React, { Component } from "react";
import WordCloud from "../WordCloud";
import { Col, Row, Divider, Space } from "antd";
import RingChart from "../RingChart";
import BarChart from "../BarChart/BarChart";
import StatisticNumber from "../StatisticsNumber";
import Nav from "../Nav";
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
const percentageRes = {
  "status_code": 27,
  "data": {
    "test_report": 0.3,
    "calibration_report": 0.4,
    "authencicated_report": 0.3
  },
  "status_message": "请求成功"
}
const myData1 = [{ value: 0.3 }];
const myData2 = [{ value: 0.4 }];

const myData3 = [{ value: 0.3 }];

class DashBBoard extends Component {
  componentDidMount = () => {
    this.props.getPercentages();
    this.props.getWordCloud();
    this.props.get12Month();
  };
  render() {
    return (
      <>
        <div className="container-box">
        <div style={{display:"flex"}}>
        
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
                      <RingChart data={myData1} color={"#7890FF"} />
                      <div className="report-name">{TEST_REPORT}</div>
                    </div>
                    <div className="ringchart">
                      <RingChart data={myData2} color={"#4890FF"} />
                      <div className="report-name">{AUTHENTICATION_REPORT}</div>
                    </div>
                    <div className="ringchart">
                      <RingChart data={myData3} color={"#12336F"} />
                      <div className="report-name">{CALIBRATION_REPORT}</div>
                    </div>
                  </div>
                </div>
              </div>
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

</div>

            <div style={{display:"flex"}}>
                <div
                  style={{
                    width: "780px",
                    marginLeft:"50px"
                  }}
                >
                    <div className="row2-col1">
                      <div style={{                  
                        borderBottom: "solid #D9D9D9 1px",}}>
                        <span style={{ marginLeft: "24px" }}>
                        {STATISTIC_12_MONTH}
                      </span>
                        </div>
                      <div
                      style={{
                        // display: "flex",
                        // flexDirection: "row",
                        // marginTop: "20px",
                      }}
                    >
                      <BarChart />
                    </div>
                  </div>
                </div>
                      
                  <div
                    style={{
                      width: "381px",
                      backgroundColor: "white",
                      marginLeft: "75px",
                      marginTop: "54PX",
                      height: "175px",
                      backgroundColor: "#ECECEC",

                    }}
                  >
                    <div
                      style={{
                        padding: "30px",
                      }}
                    >
                      <StatisticNumber />
                    </div>
                  </div>
              </div>
              {/* <div style={{fontSize:"30px",position:"absolute",right:"5px",clear:"both"}}>数据来源:海军</div> */}

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
