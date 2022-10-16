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
  Radio,
  DatePicker,
  Select,
} from "antd";
import { percentage } from "bizcharts/lib/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepsVertical from "../StepsVertical";
import { Chart, LineAdvance, Tooltip } from "bizcharts";
import { DownloadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "./style.css";
const { RangePicker } = DatePicker;
const { Option } = Select;

export const ChooseClass = () => {
  const [clazz, setClazz] = useState("navy");
  return (
    <>
      <div className="left-side-choose-class">
        <div style={{}}>
          数据选库：
          <Radio.Group value={clazz} onChange={(e) => setClazz(e.target.value)}>
            <Radio.Button value="navy">海军</Radio.Button>
            <Radio.Button value="landForce">陆军</Radio.Button>
            <Radio.Button value="airForce">空军</Radio.Button>
          </Radio.Group>
        </div>
        <div>
          证书范围：
          <RangePicker />
        </div>
      </div>
    </>
  );
};

const window_height = document.body.clientHeight - 97;

export const DatabaseSelection = () => {
  const [importButton, setImportButton] = useState(false);

  const handleImport = () => {
    handlePercentage();
    setImportButton(true);
  };
  const navigate = useNavigate();
  // var percentage = 0;

  const handleClick = () => {
    navigate("/dashboard");
  };
  const handlePercentage = () => {
    setInterval(() => {
      if (percentage1 <= 90) {
        setCurrent(0);
        percentage1 += 50;
        setPercentage1(percentage1);
      } else if (percentage1 >= 100 && percentage2 <= 90) {
        setCurrent(1);

        percentage2 += 50;
        setPercentage2(percentage2);
      } else if (percentage2 >= 100 && percentage3 <= 90) {
        setCurrent(2);

        percentage3 += 50;
        setPercentage3(percentage3);
      } else if (percentage3 >= 100 && percentage4 <= 90) {
        setCurrent(3);
        percentage4 += 50;
      } else {
        setCurrent(4);

        clearInterval();
      }
    }, 500);
  };
  var [percentage1, setPercentage1] = useState(0);
  var [percentage2, setPercentage2] = useState(0);
  var [percentage3, setPercentage3] = useState(0);
  var [percentage4, setPercentage4] = useState(0);
  var [current, setCurrent] = useState(-1);
  useEffect(() => {
    console.log("use effect");
  });
  return (
    <>
      <Space>
        <Space direction="vertical">
          <ChooseClass />
          <Button type="primary" onClick={handleImport}>
            导入该库数据
          </Button>
        </Space>
        <Divider type="vertical" style={{ height: window_height }} />
        <Space>
          <StepsVertical current={current}></StepsVertical>
          <div style={{ margin: "0 auto" }}>
            <div style={{ paddingBottom: "50px" }}>
              <Progress percent={percentage1} strokeWidth={10} />
              <Progress percent={percentage2} strokeWidth={10} />
              <Progress percent={percentage3} strokeWidth={10} />
              <Progress percent={percentage4} strokeWidth={10} />
              {importButton ? (
                <Button onClick={handleClick}>进入计量大数据可视化平台</Button>
              ) : (
                <Button onClick={handleClick} disabled>
                  进入计量大数据可视化平台
                </Button>
              )}
            </div>
          </div>
        </Space>
      </Space>
    </>
  );
};
export default DatabaseSelection;
