import { InboxOutlined } from "@ant-design/icons";
import moment from "moment";
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
import {
  CHOOSE_DATABASE,
  CHOOSE_CERTIFICATE,
  NAVY,
  LANDFORCE,
  AIRFOCE,
  BTN_IMPORT_DATABASE,
} from "../zh";
import "./style.css";
import { replace } from "lodash";
const { RangePicker } = DatePicker;
const { Option } = Select;

export const ChooseClass = ({ clazz, setClazz, setTimestring }) => {
  const handleTimeChange = (time, timestring) => {
    setTimestring(timestring);
  };
  return (
    <>
      <div className="left-side-choose-class">
        <div>
          {CHOOSE_DATABASE}：
          <Radio.Group value={clazz} onChange={(e) => setClazz(e.target.value)}>
            <Radio.Button value="navy">{NAVY}</Radio.Button>
            <Radio.Button value="landForce">{LANDFORCE}</Radio.Button>
            <Radio.Button value="airForce">{AIRFOCE}</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ marginTop: "24px" }}>
          {CHOOSE_CERTIFICATE}：
          <RangePicker
            onChange={handleTimeChange}
            defaultPickerValue={[
              moment("2022-10-1", "YYYY-MM-DD"),
              moment("2022-10-2", "YYYY-MM-DD"),
            ]}
          />
        </div>
      </div>
    </>
  );
};

const window_height = document.body.clientHeight - 97;

export const DatabaseSelection = () => {
  const [importButton, setImportButton] = useState(false);
  const [clazz, setClazz] = useState("navy");
  const [timestring, setTimestring] = useState(["2022-10-04", "2022-10-05"]);
  const handleImport = () => {
    handlePercentage();
    console.log(clazz, timestring);
  };
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate((replace = "/dashboard"));
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
        setPercentage4(percentage4);
      } else {
        setCurrent(4);

        clearInterval();
        setImportButton(true);
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
      <div className="all-container">
        <div className="left-box">
          <ChooseClass
            clazz={clazz}
            setClazz={setClazz}
            setTimestring={setTimestring}
          />
          <Button
            type="primary"
            onClick={handleImport}
            className="import-button"
            style={{ marginTop: "20px" }}
          >
            {BTN_IMPORT_DATABASE}
          </Button>
        </div>
        <div className="divider">
          <Divider type="vertical" style={{ height: window_height }} />
        </div>
        <div className="right-box">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <StepsVertical current={current}></StepsVertical>

            {importButton ? (
              <Button
                onClick={handleEnter}
                style={{ marginTop: "20px" }}
                type="primary"
              >
                进入计量大数据可视化平台
              </Button>
            ) : (
              <Button
                onClick={handleEnter}
                disabled
                style={{ marginTop: "20px" }}
              >
                进入计量大数据可视化平台
              </Button>
            )}
          </div>
          <div className="progress">
            <Progress
              className="percentage"
              percent={percentage1}
              strokeWidth={10}
            />
            <Progress
              className="percentage"
              percent={percentage2}
              strokeWidth={10}
            />
            <Progress
              className="percentage"
              percent={percentage3}
              strokeWidth={10}
            />
            <Progress
              className="percentage"
              percent={percentage4}
              strokeWidth={10}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DatabaseSelection;
