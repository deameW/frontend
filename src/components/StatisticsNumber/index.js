import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import React from "react";

const StatisticNumber = () => (
  <div className="site-statistic-demo-card">
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="共计证书"
            value={11.28}
            precision={2}
            valueStyle={{
              color: "#3f8600",
            }}
            prefix={<ArrowUpOutlined />}
            suffix="万"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="类及服务单位"
            value={9.3}
            precision={2}
            valueStyle={{
              color: "#cf1322",
            }}
            prefix={<ArrowUpOutlined />}
            suffix="家"
          />
        </Card>
      </Col>
    </Row>
  </div>
);

export default StatisticNumber;
