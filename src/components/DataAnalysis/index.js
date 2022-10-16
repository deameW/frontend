import { InboxOutlined } from "@ant-design/icons";
import {
  message,
  Upload,
  Progress,
  Col,
  Row,
  Button,
  Space,
  Divider,
  Select,
} from "antd";
import { percentage } from "bizcharts/lib/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StepsVertical from "../StepsVertical";

import { Chart, LineAdvance, Tooltip } from "bizcharts";
import "./style.css";
const { Dragger } = Upload;
const { Option } = Select;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

  onChange(info) {
    const { status } = info.file;

    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }

    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

/**
 * Data for line chart
 */
// 数据源
const data = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7,
  },
  {
    month: "Feb",
    city: "Tokyo",
    temperature: 13,
  },
  {
    month: "Mar",
    city: "Tokyo",
    temperature: 16.5,
  },
  {
    month: "Apr",
    city: "Tokyo",
    temperature: 14.5,
  },

  {
    month: "May",
    city: "Tokyo",
    temperature: 10,
  },
  {
    month: "May",
    city: "London",
    temperature: 11.9,
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 7.5,
  },

  {
    month: "Jul",
    city: "Tokyo",
    temperature: 9.2,
  },

  {
    month: "Aug",
    city: "Tokyo",
    temperature: 14.5,
  },

  {
    month: "Sep",
    city: "Tokyo",
    temperature: 9.3,
  },

  {
    month: "Oct",
    city: "Tokyo",
    temperature: 8.3,
  },

  {
    month: "Nov",
    city: "Tokyo",
    temperature: 8.9,
  },

  {
    month: "Dec",
    city: "Tokyo",
    temperature: 5.6,
  },
];

export function LineChartDemo() {
  return (
    <Chart autoFit height={45} width={242} data={data} pure>
      <Tooltip visible={false} />
      <LineAdvance
        shape="smooth"
        area
        position="month*temperature"
        color="city"
      />
    </Chart>
  );
}

const window_height = document.body.clientHeight - 97;

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
export const ComboBox = () => (
  <Select
    showSearch
    placeholder="电池型号"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().includes(input.toLowerCase())
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
);

/**
 *
 * @returns 把percentage放到组件外面,更新percentage后render在
 */
const DataAnylasis = () => {
  const navigate = useNavigate();
  // var percentage = 0;

  const handleClick = () => {
    navigate("/attribution-analysis");
  };
  const handlePercentage = () => {
    setInterval(() => {
      if (percentage1 <= 90) {
        setCurrent(0);
        percentage1 += 30;
        setPercentage1(percentage1);
      } else if (percentage1 >= 100 && percentage2 <= 90) {
        setCurrent(1);

        percentage2 += 30;
        setPercentage2(percentage2);
      } else if (percentage2 >= 100 && percentage3 <= 90) {
        setCurrent(2);

        percentage3 += 30;
        setPercentage3(percentage3);
      } else {
        setCurrent(3);

        clearInterval();
      }
    }, 500);
  };
  var [percentage1, setPercentage1] = useState(0);
  var [percentage2, setPercentage2] = useState(0);
  var [percentage3, setPercentage3] = useState(0);
  var [current, setCurrent] = useState(-1);
  useEffect(() => {
    console.log("use effect");
  });
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <>
      <div className="page-container">
        <div className="statistics">
          <div className="statistics-single">
            <p>累计预测量</p>
            <h1>1234,5</h1>
            <LineChartDemo />
          </div>
          <div className="statistics-single">
            <p>累计预测量</p>
            <h1>1234,5</h1>
            <LineChartDemo />
          </div>
        </div>
        <Space style={{}}>
          <Dragger {...props} style={{ width: "425px", height: "207px" }}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽上传文件</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>

          <Divider type="vertical" style={{ height: window_height }} />

          <Space>
            <StepsVertical current={current}></StepsVertical>
            <div style={{ margin: "0 auto" }}>
              <div style={{ paddingBottom: "50px" }}>
                <Progress percent={percentage1} strokeWidth={10} />
                <Progress percent={percentage2} strokeWidth={10} />
                <Progress percent={percentage3} strokeWidth={10} />
                <Progress percent={0} />
                <Button onClick={handlePercentage}>进度条change</Button>
                <Button onClick={handleClick}>分析</Button>
              </div>
            </div>
          </Space>
        </Space>
      </div>
    </>
  );
};

export default DataAnylasis;
