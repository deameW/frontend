import { Button, Col, Form, Input, Row, Select, DatePicker } from "antd";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";
import ClientNumRank from "../ClientNumRank/ClientNumRank";
import BoxPlot from "../BoxPlot/BoxPlot";

import React, { useState } from "react";
import "./style.css";

const { Option } = Select;
const { RangePicker } = DatePicker;

const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = 8;
    const children = [];

    const input_names = [
      "委托方",
      "制造单位",
      "型号",
      "地址",
      "校准日期",
      "通过率",
      "器具",
    ];
    const placeholders = [
      "齿盘",
      "齿盘",
      "齿盘",
      "齿盘",
      "齿盘",
      "齿盘",
      "齿盘",
      "齿盘",
    ];

    for (let i = 0; i < count; i++) {
      if (i == 4) {
        children.push(
          <Col span={6} key={i}>
            <Form.Item name={`field-${i}`} label={input_names[i]}>
              <RangePicker showTime />
            </Form.Item>
          </Col>
        );
      } else if (i == 7) {
        children.push(
          <Col span={4} key={i} push={10}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              清除
            </Button>
          </Col>
        );
      } else
        children.push(
          <Col span={4} key={i}>
            <Form.Item
              name={`field-${i}`}
              label={input_names[i]}
              rules={[
                {
                  required: false,
                  message: "Input something!",
                },
              ]}
            >
              <Input placeholder={placeholders[i]} />
            </Form.Item>
          </Col>
        );
    }

    return children;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    // 发送search get请求
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
    </Form>
  );
};

const GlobalSearch = () => (
  <div id="container">
    <AdvancedSearchForm />
    <div className="search-result-list">Search Result List</div>
    <div>
      <BarChart />
      <PieChart />
      <LineChart />
      <ClientNumRank />
      <BoxPlot />
    </div>
  </div>
);

export default GlobalSearch;
