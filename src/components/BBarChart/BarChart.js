import React, { Component, useEffect } from 'react';
import { Chart } from '@antv/g2';

// import "./BarChart.css";

const BarChart = (props) => {
  const initData = () => {
    const data = props.barData;
    const chart = new Chart({
      container: 'barcharts',
      autoFit: true,
      height: 220,
      padding: [20, 30, 30, 70],
      width: 700
    });

    chart.data(data); //加载数据

    //nice: 自动调整min、max
    chart.scale('value', {
      nice: true
    });

    chart.tooltip({
      showMarkers: false
    });

    chart.interaction('active-region');

    chart.interval().position('x*value');

    chart.render();
  };

  /**
   * ！！！
   * 使用这种方式给useEffect一个回调函数，然后依赖项传空，这样useEffect只执行一次。
   * 可以避免父组件渲染时，子组件重复渲染。
   */
  useEffect(initData, []);
  return <div id="barcharts"></div>;
};
export default BarChart;
