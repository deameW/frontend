import React, { Component } from 'react';
import {
  Chart,
  Interval,
  useTheme,
  registerTheme,
  getTheme,
  Axis
} from 'bizcharts';

import './BarChart.css';

// 注册自己的主题
registerTheme('my-theme', {
  defaultColor: '#2177e8',
  geometries: {
    interval: {
      rect: {
        default: { style: { fill: '#5895e4', fillOpacity: 0.95 } },
        active: { style: { stroke: '#2163ba', lineWidth: 1 } },
        inactive: { style: { fillOpacity: 0.3, strokeOpacity: 0.3 } },
        selected: {}
      }
    }
  }
});

function BarChart(props) {
  const [theme, setTheme] = useTheme('my-theme');
  // 不清楚主题属性有哪些，可以log出来看一下
  console.log(getTheme('default'));
  return (
    <Chart
      height={300}
      autoFit
      data={props.data}
      theme={theme}
      interactions={['element-active']}
      padding={[30, 30, 30, 50]}
    >
      <Interval position="x*value" />
      <Axis name="时间" visible={true} />
    </Chart>
  );
}
export default BarChart;
