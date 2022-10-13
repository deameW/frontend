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
} from "antd";
import { percentage } from "bizcharts/lib/utils";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StepsVertical from "../StepsVertical";
const { Dragger } = Upload;
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

const window_height = document.body.clientHeight - 97;

/**
 *
 * @returns 把percentage放到组件外面,更新percentage后render在
 */
const DataAnylasis = () => {
  const navigate = useNavigate();
  // var percentage = 0;

  const handleClick = () => {
    navigate("/analysis-result");
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
    </>
  );
};

export default DataAnylasis;
