import React, { Component } from "react";
import { Chart } from "@antv/g2";

import "./BarChart.css";

export default class BarChart extends Component {
  componentDidMount() {
    // 请求数据
    const res = {
      "status_code": 200,
      "status_message": "ok",
      "data": [
        {
          "x": "2022年1月",
          "value": "29"
        },
        {
          "x": "2022年2月",
          "value": "30"
        },
        {
          "x": "2022年3月",
          "value": "83"
        },
        {
          "x": "2022年4月",
          "value": "22"
        },
      
        {
          "x": "2022年5月",
          "value": "18"
        },
        {
          "x": "2021年11月",
          "value": "64"
        },
        {
          "x": "2022年6月",
          "value": "112"
        },
        {
          "x": "2022年8月",
          "value": "112"
        },
        {
          "x": "2021年12月",
          "value": "69"
        },
        {
          "x": "2022年9月",
          "value": "79"
        },
        {
          "x": "2022年7月",
          "value": "58"
        }
      ]
    }
    
    const data = res.data;
    // [
    //   { time: "1月", value: 38 },
    //   { time: "2月", value: 52 },
    //   { time: "3月", value: 61 },
    //   { time: "4月", value: 145 },
    //   { time: "5月", value: 48 },
    //   { time: "6月", value: 38 },
    //   { time: "7月", value: 78 },
    //   { time: "8月", value: 38 },
    //   { time: "9月", value: 28 },
    //   { time: "10月", value: 68 },
    //   { time: "11月", value: 38 },
    //   { time: "12月", value: 55 },
    // ];
    const chart = new Chart({
      container: "barcharts",
      autoFit: true,
      height: 220,
      padding: [20, 30, 30, 70],
      width: 700,
      
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

    chart.interval().position("x*value");

    chart.render();
  }

  render() {
    return <div id="barcharts"></div>;
  }
}
