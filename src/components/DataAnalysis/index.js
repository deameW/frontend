import { InboxOutlined } from '@ant-design/icons';
import {
  message,
  Upload,
  Progress,
  Col,
  Row,
  Button,
  Space,
  Divider,
  Steps,
  Select
} from 'antd';

import { percentage } from 'bizcharts/lib/utils';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepsVertical from '../StepsVertical';

import { Chart, LineAdvance, Tooltip } from 'bizcharts';
import './style.css';
const { Dragger } = Upload;
const { Option } = Select;
const { Step } = Steps;

//-----------------------Line Chart Demo Component--------------------------------
const data = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 13
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 16.5
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5
  },

  {
    month: 'May',
    city: 'Tokyo',
    temperature: 10
  },
  {
    month: 'May',
    city: 'London',
    temperature: 11.9
  },
  {
    month: 'Jun',
    city: 'Tokyo',
    temperature: 7.5
  },

  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 9.2
  },

  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 14.5
  },

  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 9.3
  },

  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 8.3
  },

  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 8.9
  },

  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 5.6
  }
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
  console.log('search:', value);
};

//------------------------------------ComboBox Component---------------------------
export const ComboBox = () => (
  <>
    <div>
      <Select
        showSearch
        placeholder="????????????"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        style={{ width: '216px' }}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </div>
  </>
);
//------------------------------Step Component------------------------
export const StepComponent = () => (
  <>
    <Steps progressDot current={1} style={{ width: '750px' }}>
      <Step title="????????????" />
      <Step title="????????????" />
      <Step title="????????????" />
      <Step title="???????????????" />
    </Steps>
  </>
);
//------------------------------Main Component------------------------
const DataAnylasis = () => {
  const [fileName, setFileName] = useState('1.jpg');
  const [fileType, setFileType] = useState('test');

  const props = {
    name: 'file',
    multiple: true,
    action: 'http://127.0.0.1:4523/m1/1730824-0-default/predict/upload_file',

    onChange(info) {
      const { status } = info.file;

      if (status !== 'uploading') {
        setFileName(info.file.name);
        // type ???????????????????????????
        const fileType = console.log(info.file, info.fileList);
      }

      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    }
  };
  const [totalPredict, setTotalPredict] = useState(1234);
  const [accuracy, setAccuracy] = useState(1234);
  const [predictResult, setPredictResult] = useState(false);
  const navigate = useNavigate();

  const handleAnalysis = () => {
    navigate('/attribution-analysis');
  };
  const handlePredict = () => {
    setPredictResult(true);
  };
  useEffect(() => {
    console.log('use effect');
  });

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div className="left-side">
          <div className="statistics">
            <div className="statistics-single">
              <p>???????????????</p>
              <h1>{totalPredict}</h1>
              <LineChartDemo />
            </div>
            <div className="statistics-single">
              <p>???????????????</p>
              <h1>{accuracy}</h1>
              <LineChartDemo />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="text">
              <div>???????????????</div>
              <div style={{ marginTop: '33px' }}>?????????????????????</div>
            </div>
            <div className="upload-form">
              <ComboBox className="battery-type" />
              <div style={{ display: 'flex' }}>
                <Dragger
                  {...props}
                  style={{ width: '425px', height: '207px', marginTop: '33px' }}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">???????????????????????????</p>
                  <p className="ant-upload-hint">
                    ?????????????????????????????????????????????
                  </p>
                </Dragger>
              </div>
              <p>
                ??????????????????:
                <br />
                xxxxxxxxxxxxxxxxxxxxxxx
                <br />
                ????????????????????????
              </p>
            </div>
          </div>
          <div className="form-bottom">
            <StepComponent />
            <Button
              type="primary"
              className="button-predict"
              onClick={handlePredict}
            >
              ????????????
            </Button>
          </div>
        </div>

        <div className="right-side">
          <div>??????</div>
          <div>????????????111111111111111111111111111</div>
          <div>????????????111111111111111111111111111</div>
          <div>????????????111111111111111111111111111</div>
        </div>
      </div>

      {predictResult ? (
        <div className="predict-result">
          <Divider />
          <div>?????????????????????20%</div>
          <div>SOH:93</div>
          <Button
            type="primary"
            className="button-analysis"
            onClick={handleAnalysis}
          >
            ????????????
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default DataAnylasis;
