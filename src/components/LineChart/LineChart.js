import React, { Component } from "react";
import { Chart } from "@antv/g2";

import "./LineChart.css";

export default class LineChart extends Component {
  componentDidMount() {
    // const data = [
    //   { year: "1991", value: 3 },
    //   { year: "1992", value: 4 },
    //   { year: "1993", value: 3.5 },
    //   { year: "1994", value: 5 },
    //   { year: "1995", value: 4.9 },
    //   { year: "1996", value: 6 },
    //   { year: "1997", value: 7 },
    //   { year: "1998", value: 9 },
    //   { year: "1999", value: 13 },
    //   { year: "2000", value: 13 },
    // ];

    const data = [
      { time: "1月", value: 38 },
      { time: "2月", value: 52 },
      { time: "3月", value: 61 },
      { time: "4月", value: 145 },
      { time: "5月", value: 48 },
      { time: "6月", value: 38 },
      { time: "7月", value: 78 },
      { time: "8月", value: 38 },
      { time: "9月", value: 28 },
      { time: "10月", value: 68 },
      { time: "11月", value: 38 },
      { time: "12月", value: 55 },
    ];
    const chart = new Chart({
      container: "linechart",
      autoFit: true,
      height: 400,
    });

    chart.data(data);
    chart.scale({
      value: {
        min: 0,
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true, // 展示 Tooltip 辅助线
      shared: true,
    });

    chart.line().position("time*value").label("value");
    chart.point().position("time*value");

    chart.render();
  }

  render() {
    return <div id="linechart"></div>;
  }
}
