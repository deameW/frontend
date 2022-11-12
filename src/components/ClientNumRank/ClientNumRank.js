import React, { Component, useEffect, useState } from 'react';
import { Chart } from '@antv/g2';
import { Avatar, Badge, Button, Space } from 'antd';
import 'antd/dist/antd.css'; //还需要引入css样式
import './style.css';
const ClientNumRank = (props) => {
  const [badgeData, setBadgeData] = useState();
  useEffect(() => {
    setBadgeData(props.clientData);
  });
  return (
    <div>
      {badgeData &&
        badgeData.map((item, index) => {
          return (
            <div className="badge" key={index}>
              <Badge count={index + 1} offset={[10, 10]}></Badge>
              <div className="clientName">{item.name}</div>
              <div className="clientNum">{item.value}</div>
            </div>
          );
        })}
    </div>
  );
};
export default ClientNumRank;
