import DataSet from "@antv/data-set";
import { Chart, registerShape } from "@antv/g2";
import React, { Component } from "react";

import "./PieChart.css";

export default class PieChart extends Component {
  componentDidMount() {
    const data = [
      { type: "北京航天计量测试研究所", value: 389 },
      { type: "102所", value: 281 },
      { type: "Tellus,at", value: 182 },
      { type: "Pharetra, donec", value: 22 },
      { type: "Aliquam amet", value: 123 },
    ];

    // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
    const sliceNumber = 0.01;

    // 自定义 other 的图形，增加两条线
    registerShape("interval", "slice-shape", {
      draw(cfg, container) {
        const points = cfg.points;
        let path = [];
        path.push(["M", points[0].x, points[0].y]);
        path.push(["L", points[1].x, points[1].y - sliceNumber]);
        path.push(["L", points[2].x, points[2].y - sliceNumber]);
        path.push(["L", points[3].x, points[3].y]);
        path.push("Z");
        path = this.parsePath(path);
        return container.addShape("path", {
          attrs: {
            fill: cfg.color,
            path,
          },
        });
      },
    });

    const chart = new Chart({
      container: "piechart",
      autoFit: true,
      height: 300,
    });

    chart.data(data);
    chart.coordinate("theta", {
      radius: 0.75,
      innerRadius: 0.6,
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });
    chart.legend({
      position: "right",
    });
    chart
      .interval()
      .adjust("stack")
      .position("value")
      .color("type")
      .shape("slice-shape");

    chart.render();
  }

  render() {
    return <div id="piechart"></div>;
  }
}
