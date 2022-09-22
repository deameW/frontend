import React, { Component } from "react";
import { Chart } from "@antv/g2";

import "./BarChart.css";

export default class BarChart extends Component {
  componentDidMount() {
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
      container: "barcharts",
      autoFit: true,
      height: 300,
      padding: [20, 30, 30, 70],
    });

    chart.data(data); //加载数据

    //nice: 自动调整min、max
    chart.scale("value", {
      nice: true,
    });

    chart.tooltip({
      showMarkers: false,
    });

    chart.interaction("active-region");

    chart.interval().position("time*value");

    chart.render();
  }

  render() {
    return <div id="barcharts"></div>;
  }
}
