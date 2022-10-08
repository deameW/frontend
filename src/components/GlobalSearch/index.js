import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  DatePicker,
  Table,
  Radio,
} from "antd";
import BarChart from "../BarChart/BarChart";
import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";
import ClientNumRank from "../ClientNumRank/ClientNumRank";
import BoxPlot from "../BoxPlot/BoxPlot";
import KnowledgeGraph from "../KnowledgeGraph";
import DialogBox from "../DialogBox";

import React, { useState } from "react";
import "./style.css";

const { Option } = Select;
const { RangePicker } = DatePicker;

/**
 * data for table component
 */
const columns = [
  {
    title: "证书编号",
    dataIndex: "name",
  },
  {
    title: "器具名称",
    dataIndex: "age",
  },
  {
    title: "器具型号",
    dataIndex: "address",
  },
  {
    title: "器具厂商",
    dataIndex: "address",
  },
  {
    title: "委托方",
    dataIndex: "address",
  },
  {
    title: "Title",
    dataIndex: "viewGraph",
    render: (text) => <a>{text}</a>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    viewGraph: "查看图谱",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    viewGraph: "查看图谱",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    viewGraph: "查看图谱",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
    viewGraph: "查看图谱",
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

export const TableComponent = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

// *********************Radio Component*****************************
export const RadioComponent = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      style={{ display: "inline" }}
    >
      <Radio value={1}>检测报告</Radio>
      <Radio value={2}>鉴定证书</Radio>
      <Radio value={3}>校准证书</Radio>
    </Radio.Group>
  );
};
const AdvancedSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = 8;
    const children = [];

    const input_names = [
      "器具名称",
      "制造单位",
      "型号",
      "委托方",
      "委托方所在地",
      "校准日期",
    ];
    const placeholders = [
      "齿盘",
      "DUOYI",
      "N23",
      "上海空间推进研究所",
      "下拉",
      "日期",
    ];

    for (let i = 0; i < count; i++) {
      if (i == 5) {
        children.push(
          <Col span={6} key={i}>
            <Form.Item name={`field-${i}`} label={input_names[i]}>
              <RangePicker showTime />
            </Form.Item>
          </Col>
        );
      } else if (i == 6) {
        children.push(
          //一组radio
          <Col span={8} key={i}>
            证书来源:
            <RadioComponent />
          </Col>
        );
      } else if (i == 7) {
        children.push(
          <Col span={4} key={i} push={4}>
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

export class GlobalSearch extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <div id="container">
          <AdvancedSearchForm />
          <div className="search-result-list" style={{ marginTop: "20px" }}>
            <TableComponent />
          </div>

          <div>
            <DialogBox>{/* <KnowledgeGraph /> */}</DialogBox>
            <BarChart />
            <PieChart />
            <LineChart />
            <ClientNumRank />
            <BoxPlot />
          </div>
        </div>
      </>
    );
  }
}

export default GlobalSearch;
