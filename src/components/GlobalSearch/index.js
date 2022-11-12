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
  Typography,
  Modal,
  Cascader,
  Checkbox
} from 'antd';
import { ConfigProvider } from 'antd';

import zh_CN from 'antd/lib/locale-provider/zh_CN';

import 'moment/locale/zh-cn';
import BarChart from '../BBarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';
import { Tab } from '../DialogBox';
import ClientNumRank from '../ClientNumRank/ClientNumRank';
import BoxPlot from '../BoxPlot/BoxPlot';
import KnowledgeGraph from '../KnowledgeGraph';
import DialogBox from '../DialogBox';
import { Chart, LineAdvance, DonutChart } from 'bizcharts';
import React, { useState } from 'react';
import './style.css';
import { getSearchData, testApi } from '../../service/global-search';
import { resData } from './data';
import { cityData } from './data';
const { Option } = Select;
const { RangePicker } = DatePicker;

const data2 = [];

//line chart demo
// 数据源
const lineChartData = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7
  },
  {
    month: 'Jan',
    city: 'London',
    temperature: 3.9
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 13
  },
  {
    month: 'Feb',
    city: 'London',
    temperature: 4.2
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 16.5
  },
  {
    month: 'Mar',
    city: 'London',
    temperature: 5.7
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5
  },
  {
    month: 'Apr',
    city: 'London',
    temperature: 8.5
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
    month: 'Jun',
    city: 'London',
    temperature: 15.2
  },
  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 9.2
  },
  {
    month: 'Jul',
    city: 'London',
    temperature: 17
  },
  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 14.5
  },
  {
    month: 'Aug',
    city: 'London',
    temperature: 16.6
  },
  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 9.3
  },
  {
    month: 'Sep',
    city: 'London',
    temperature: 14.2
  },
  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 8.3
  },
  {
    month: 'Oct',
    city: 'London',
    temperature: 10.3
  },
  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 8.9
  },
  {
    month: 'Nov',
    city: 'London',
    temperature: 5.6
  },
  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 5.6
  },
  {
    month: 'Dec',
    city: 'London',
    temperature: 9.8
  }
];
// PieChart
// 数据源
const piechartData = [
  {
    type: '分类一',
    value: 27
  },
  {
    type: '分类二',
    value: 25
  },
  {
    type: '分类三',
    value: 18
  },
  {
    type: '分类四',
    value: 15
  },
  {
    type: '分类五',
    value: 10
  },
  {
    type: '其它',
    value: 5
  }
];

const cert_info_list = resData.data.cert_info_list;
const statistics_graph = resData.data.statistics_graph;
cert_info_list.forEach((item, index) => {
  //一个item为table的一行
  //为cert_info_list添加一个index
  cert_info_list.indexKey = index;
  data2.push({
    key: index,
    id: item.certificate.id,
    name: item.instrument.name,
    type: item.instrument.type,
    manufacturer: item.certificate.gc,
    client_name: item.client.name,
    viewGraph: '查看图谱'
  });
});
// const searchRes =
statistics_graph.pie.forEach((item) => {
  item.value = parseInt(item.value);
});
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name
  })
};
// *********************Radio Component*****************************
export const RadioComponent = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      style={{ display: 'inline' }}
    >
      <Radio value={1}>检测报告</Radio>
      <Radio value={2}>鉴定证书</Radio>
      <Radio value={3}>校准证书</Radio>
    </Radio.Group>
  );
};
const AdvancedSearchForm = (props) => {
  const [form] = Form.useForm();

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  const getFields = () => {
    const count = 8;
    const children = [];

    const input_names = [
      '器具名称',
      '制造单位',
      '型号',
      '委托方',
      '委托方所在地',
      '校准日期'
    ];
    const placeholders = [
      '齿盘',
      'DUOYI',
      'N23',
      '上海空间推进研究所',
      '中国',
      '日期'
    ];

    const plainOptions = [
      {
        value: '1',
        label: '检测报告'
      },
      {
        value: '2',
        label: '鉴定证书'
      },
      {
        value: '3',
        label: '校准证书'
      }
    ];
    children.push(
      <Col span={6} key={0}>
        <Form.Item
          name={'field-0'}
          label={input_names[0]}
          rules={[
            {
              required: false,
              message: 'Input something!'
            }
          ]}
        >
          <Input placeholder={placeholders[0]} />
        </Form.Item>
      </Col>
    );

    children.push(
      <Col span={6} key={1}>
        <Form.Item
          name={'field-1'}
          label={input_names[1]}
          rules={[
            {
              required: false,
              message: 'Input something!'
            }
          ]}
        >
          <Input placeholder={placeholders[1]} />
        </Form.Item>
      </Col>
    );

    children.push(
      <Col span={6} key={2}>
        <Form.Item
          name={'field-2'}
          label={input_names[2]}
          rules={[
            {
              required: false,
              message: 'Input something!'
            }
          ]}
        >
          <Input placeholder={placeholders[2]} />
        </Form.Item>
      </Col>
    );

    children.push(
      <Col span={6} key={3}>
        <Form.Item
          name={'field-3'}
          label={input_names[3]}
          rules={[
            {
              required: false,
              message: 'Input something!'
            }
          ]}
        >
          <Input placeholder={placeholders[3]} />
        </Form.Item>
      </Col>
    );

    children.push(
      <Col span={6} key={4}>
        <Form.Item
          name={'field-4'}
          label={input_names[4]}
          rules={[
            {
              required: false,
              message: 'Input something!'
            }
          ]}
        >
          <Cascader
            style={{ width: '160px' }}
            options={cityData}
            onChange={onChange}
            placeholder={placeholders[4]}
            showSearch={{
              filter
            }}
            fieldNames={{
              label: 'label',
              value: 'label',
              children: 'children'
            }}
            onSearch={(value) => console.log(value)}
          />
        </Form.Item>
      </Col>
    );

    children.push(
      <Col span={6} key={5}>
        <Form.Item name={`field-5`} label={input_names[5]}>
          <ConfigProvider locale={zh_CN}>
            <RangePicker placeholder={['起始时间', '结束时间']} />
          </ConfigProvider>
        </Form.Item>
      </Col>
    );

    children.push(
      //一组checkbox
      <Col span={8} key={6}>
        <div style={{ marginTop: '5px' }}>
          证书来源:&nbsp;&nbsp;
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['1']}
            // onChange={onChange}
          />
        </div>
      </Col>
    );

    children.push(
      <Button
        style={{ width: '120px', marginLeft: '40px' }}
        type="primary"
        htmlType="submit"
      >
        提交
      </Button>
    );

    return children;
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // TODO: 拼接path，发送search get请求
    // 拼接请求
    const instrument_name = values['field-0'];
    const maker_name = values['field-1'];
    const instrument_type = values['field-2'];
    const client_fuzzy_address = values['field-3'];
    const date_start = values['field-4'];
    const date_end = values['field-5'];
    const certificate_type = values['field-6'];

    const request_body = {
      instrument_name,
      maker_name,
      instrument_type,
      client_fuzzy_address,
      date_start,
      date_end,
      certificate_type
    };
    // getSearchData(request_body);
    testApi();

    props.handleShowResult(true);
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
const clientData = [
  {
    clientName: 'xxx有限公司',
    clientNum: 12345
  },
  {
    clientName: 'xxx有限公司',
    clientNum: 34445
  },
  {
    clientName: 'xxx有限公司',
    clientNum: 12345
  },
  {
    clientName: 'xxx有限公司',
    clientNum: 2345
  },
  {
    clientName: 'xxx有限公司',
    clientNum: 6666
  },
  {
    clientName: 'xxx有限公司',
    clientNum: 12666345
  }
];

export const GlobalSearch = () => {
  const [graphData, setGraphData] = useState();
  const [open, setOpen] = useState(false);
  const [showResult, setShowResult] = useState(false);
  /**
   * column data for table component
   */
  const columns = [
    {
      title: '证书编号',
      dataIndex: 'id'
    },
    {
      title: '器具名称',
      dataIndex: 'name'
    },
    {
      title: '器具型号',
      dataIndex: 'type'
    },
    {
      title: '规程',
      dataIndex: 'manufacturer'
    },
    {
      title: '委托方',
      dataIndex: 'client_name'
    },
    {
      title: '操作',
      dataIndex: 'viewGraph',
      render: (text, record, index) => {
        // console.log(text);
        // console.log(index);
        // console.log(record);
        return (
          <div>
            {/* <a href={handleViewGraph(record.key)}>{record.viewGraph}</a> */}
            <Typography.Link onClick={() => handleViewGraph(record)}>
              查看图谱
            </Typography.Link>
          </div>
        );
      }
    }
  ];

  function handleViewGraph(record) {
    console.log(cert_info_list[record.key]);
    //setGraph
    setGraphData(cert_info_list[record.key]);
    setOpen(true);
  }

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const handleShowResult = (value) => {
    setShowResult(value);
  };

  return (
    <>
      <div id="container">
        {graphData && (
          <Modal
            title={<Tab graphData={graphData.graph} />}
            open={open}
            onOk={handleOk}
            okText="确认"
            cancelText="取消"
            onCancel={handleCancel}
            width="1180px"
            heigh="613px"
          ></Modal>
        )}
        <AdvancedSearchForm handleShowResult={handleShowResult} />

        {/* 搜索结果 table + charts*/}
        {showResult && (
          <div className="search-result-list" style={{ marginTop: '20px' }}>
            <div>
              <Table columns={columns} dataSource={data2} />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '605px', fontSize: '18px' }}>
                  <p>证书接收量按月统计</p>
                  <BarChart barData={statistics_graph.bar} />
                </div>
                <div style={{ marginRight: '10%' }}>
                  <div className="title">委托方数量排名</div>
                  <ClientNumRank clientData={statistics_graph.list} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '400px' }}>
                  <Chart
                    padding={[10, 20, 50, 40]}
                    autoFit
                    height={300}
                    data={statistics_graph.line}
                  >
                    <LineAdvance
                      shape="smooth"
                      point
                      area
                      position="x*value"
                      color="tag"
                    />
                  </Chart>
                </div>
                <div style={{ width: '600px', marginRight: '100px' }}>
                  <DonutChart
                    data={statistics_graph.pie || []}
                    title={{
                      visible: true,
                      text: '环图'
                    }}
                    autoFit
                    description={{
                      visible: true,
                      text: ''
                    }}
                    height={350}
                    radius={0.8}
                    padding="auto"
                    angleField="value"
                    colorField="x"
                    pieStyle={{ stroke: 'white', lineWidth: 5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GlobalSearch;
