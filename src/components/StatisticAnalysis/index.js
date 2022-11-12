import React from 'react';
import './style.css';
import { Chart, Line, Point, Tooltip, getTheme, LineAdvance } from 'bizcharts';

const linechartData = [
  {
    year: '1991',
    value: 3
  },
  {
    year: '1992',
    value: 4
  },
  {
    year: '1993',
    value: 3.5
  },
  {
    year: '1994',
    value: 5
  },
  {
    year: '1995',
    value: 4.9
  },
  {
    year: '1996',
    value: 6
  },
  {
    year: '1997',
    value: 7
  },
  {
    year: '1998',
    value: 9
  },
  {
    year: '1999',
    value: 13
  }
];

const StatisticAnalysis = () => {
  return (
    <>
      <div className="page-container">
        <h1>计量统计页面</h1>
        <div className="text-description">
          <div>一段文字描述...........................</div>
          <div>一段文字描述...........................</div>
          <div>一段文字描述...........................</div>
          <div>一段文字描述...........................</div>
          <div>一段文字描述...........................</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                border: '2px #F0F0F0 solid',
                height: '377px',
                position: 'relative'
              }}
            >
              <div className="box-title">
                型号通过率趋势分析 <a>查看更多</a>
                <div className="line-chart">
                  <Chart
                    appendPadding={[10, 0, 0, 10]}
                    autoFit
                    height={200}
                    data={linechartData}
                    onLineClick={console.log}
                    scale={{
                      value: {
                        min: 0,
                        alias: '人均年收入',
                        type: 'linear-strict'
                      },
                      year: { range: [0, 1] }
                    }}
                  >
                    <LineAdvance
                      shape="smooth"
                      point
                      area
                      position="year*value"
                      color="green"
                    />
                    <Tooltip showCrosshairs follow={false} />
                  </Chart>
                </div>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  fontSize: '16px'
                }}
              >
                <p>型号通过率按照时间统计</p>
                <text>description....</text>
              </div>
            </div>
            <div>pic 2</div>
          </div>
          <div style={{ display: 'flex' }}>
            <div>pic 3</div>
            <div>pic 4</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StatisticAnalysis;
