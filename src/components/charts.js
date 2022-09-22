import DataSet from "@antv/data-set";
import { Chart, registerShape } from "@antv/g2";
import React, { Component } from "react";
import BarChart from "./BarChart/BarChart";
import PieChart from "./PieChart/PieChart";
import LineChart from "./LineChart/LineChart";
import ClientNumRank from "./ClientNumRank/ClientNumRank";
import BoxPlot from "./BoxPlot/BoxPlot";

export default class Charts extends Component {
  render() {
    return (
      <div>
        <BarChart />
        <PieChart />
        <LineChart />
        <ClientNumRank />
        <BoxPlot />
      </div>
    );
  }
}
