import React, { useState, useEffect } from "react";
import {
  Chart,
  Point,
  Area,
  Annotation,
  Axis,
  Coordinate,
  registerShape,
  registerAnimation,
} from "bizcharts";

// 自定义Shape 部分
registerShape("point", "pointer", {
  draw(cfg, container) {
    const group = container.addGroup();

    const center = this.parsePoint({ x: 0, y: 0 }); // 获取极坐标系下画布中心点
    const start = this.parsePoint({ x: 0, y: 0.5 }); // 获取极坐标系下起始点

    const preAngle = this.preAngle || 0;

    const angle1 = Math.atan((start.y - center.y) / (start.x - center.x));
    const angle = (Math.PI - 2 * angle1) * cfg.points[0].x;

    this.preAngle = angle;

    return group;
  },
});

const scale = {
  value: {
    min: 0,
    max: 1,
    tickInterval: 0.1,
    formatter: (v) => v * 100,
  },
};

const RingChart = (props) =>{
  // const [data, setData] = useState([{ value: 0.56 }]);
  const startAngle = Math.PI / 2;
  const endAngle = startAngle + Math.PI * 2;
  // const { color, setColor } = useState({ color: "#F890FF" });
  const { data, color } = props;
  return (
    <Chart width={160} height={160} data={data} scale={scale} autoFit>
      <Coordinate
        type="polar"
        radius={0.75}
        startAngle={startAngle}
        endAngle={endAngle}
      />
      <Axis
        name="value"
        line={null}
        visible={false}
        label={{
          offset: -36,
          style: {
            fontSize: 18,
            textAlign: "center",
            textBaseline: "middle",
          },
        }}
        grid={null}
      />
      <Point position="value*1" color="#1890FF" shape="pointer" />
      <Annotation.Arc
        start={[0, 1]}
        end={[1, 1]}
        style={{
          stroke: "#CBCBCB",
          lineWidth: 15,
          lineDash: null,
          lineCap: "round",
        }}
      />
      <Annotation.Arc
        start={[0, 1]}
        end={[data[0].value, 1]}
        style={{
          stroke: color,
          lineCap: "round",
          lineWidth: 15,
          lineDash: null,
        }}
      />
      <Annotation.Text
        position={["50%", "50%"]}
        content={`${Math.round(data[0].value * 100)}%`}
        style={{
          fontSize: 30,
          fill: "#262626",
          textAlign: "center",
        }}
      />
    </Chart>
  );
}
export default RingChart;
