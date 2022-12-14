import React from 'react';
import _ from 'lodash';
import {
  Chart,
  Geom,
  Tooltip,
  Coordinate,
  Legend,
  Axis,
  Interaction,
  G2,
  registerShape
} from 'bizcharts';
import DataSet from '@antv/data-set';

// 给point注册一个词云的shape

function getTextAttrs(cfg) {
  return _.assign({}, cfg.style, {
    fontSize: cfg.data.size,
    text: cfg.data.text,
    textAlign: 'center',
    fontFamily: cfg.data.font,
    fill: cfg.color,
    textBaseline: 'Alphabetic'
  });
}
registerShape('point', 'cloud', {
  draw(cfg, container) {
    // console.log('cloud cfg', cfg);
    const attrs = getTextAttrs(cfg);
    const textShape = container.addShape('text', {
      attrs: _.assign(attrs, {
        x: cfg.x,
        y: cfg.y
      })
    });
    if (cfg.data.rotate) {
      G2.Util.rotate(textShape, (cfg.data.rotate * Math.PI) / 180);
    }
    return textShape;
  }
});

class Wordcloud extends React.Component {
  render() {
    console.log(this.props.wordCloudData);
    const dv = new DataSet.View().source(this.props.wordCloudData);
    const range = dv.range('value');
    const min = range[0];
    const max = range[1];
    dv.transform({
      type: 'tag-cloud',
      fields: ['x', 'value'],
      size: [333, 333],
      font: 'PingFang SC',
      padding: 0,
      spiral: 'rectangular',
      timeInterval: 5000, // max execute time
      rotate() {
        let random = ~~(Math.random() * 4) % 4;
        if (random === 2) {
          random = 0;
        }
        return random * 0; // 0, 90, 270
      },
      fontSize(d) {
        if (d.value) {
          return ((d.value - min) / (max - min)) * 12 + 12;
        }
        return 0;
      }
    });
    const scale = {
      x: {
        nice: false
      },
      y: {
        nice: false
      }
    };
    return (
      <Chart
        width={310}
        height={310}
        data={dv.rows}
        scale={scale}
        padding={0}
        autoFit={false}
        onPointClick={console.log}
      >
        <Tooltip showTitle={false} />
        <Coordinate reflect="y" />
        <Axis name="x" visible={false} />
        <Axis name="y" visible={false} />
        <Legend visible={false} />
        <Geom
          type="point"
          position="x*y"
          color="category"
          shape="cloud"
          tooltip="value*category"
          state={{
            active: {
              style: {
                fill: 'red',
                stroke: 'orange'
              }
            }
          }}
        />
        <Interaction type="element-active" />
      </Chart>
    );
  }
}

export default Wordcloud;
