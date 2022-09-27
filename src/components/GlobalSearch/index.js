import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import "./style.css";

const { Option } = Select;

const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
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
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={`field-${i}`}
            label={input_names[i]}
            rules={[
              {
                required: true,
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
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: "right",
          }}
        >
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};

const GlobalSearch = () => (
  <div id="container">
    <AdvancedSearchForm />
    <div className="search-result-list">Search Result List</div>
  </div>
);

export default GlobalSearch;
