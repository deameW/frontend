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
import React from "react";
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
const DataAnylasis = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/analysis-result");
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
          <StepsVertical></StepsVertical>
          <div style={{ margin: "0 auto" }}>
            <Progress percent={100} strokeWidth={10} />
            <Progress percent={100} />
            <Progress percent={100} />
            <Progress percent={100} />
            <Button onClick={handleClick}>分析</Button>
          </div>
        </Space>
      </Space>
    </>
  );
};

export default DataAnylasis;
