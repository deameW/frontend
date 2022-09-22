import React, { Component } from "react";
import { Chart } from "@antv/g2";
import { Avatar, Badge, Button, Space } from "antd";
import "antd/dist/antd.css"; //还需要引入css样式

export default class ClientNumRank extends Component {
  //   componentDidMount() {}

  render() {
    return (
      <div>
        <Space>
          <Badge count={1} offset={[10, 10]}></Badge>
          湖北三江航天红峰控制有限公司
        </Space>
      </div>
    );
  }
}
