import react, { Component } from 'react';
import G6 from '@antv/g6';

export class KnowledgeGraph extends Component {
  refreshDragedNodePosition = (e) => {
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
  };
  componentDidMount() {
    const container = document.getElementById('graph-box');
    const width = container.scrollWidth || 717;
    const height = container.scrollHeight || 500;

    const data = this.props.data;
    const graph = new G6.Graph({
      container: 'graph-box',
      width,
      height,
      layout: {
        type: 'force',
        preventOverlap: true,
        linkDistance: (d) => {
          if (d.source.id === 'node0') {
            return 100;
          }
          return 30;
        },
        nodeStrength: (d) => {
          if (d.isLeaf) {
            return -50;
          }
          return -10;
        },
        edgeStrength: (d) => {
          if (
            d.source.id === 'node1' ||
            d.source.id === 'node2' ||
            d.source.id === 'node3'
          ) {
            return 0.7;
          }
          return 0.1;
        }
      },
      defaultNode: {
        color: '#5B8FF9'
      },
      modes: {
        // default: ["drag-canvas"],
      }
    });

    const nodes = data.nodes;
    graph.data({
      nodes,
      edges: data.edges.map(function (edge, i) {
        edge.id = 'edge' + i;
        return Object.assign({}, edge);
      })
    });
    var that = this;
    graph.render();
    graph.on('node:dragstart', function (e) {
      graph.layout();
      that.refreshDragedNodePosition(e);
    });
    graph.on('node:drag', function (e) {
      that.refreshDragedNodePosition(e);
    });
    graph.on('node:dragend', function (e) {
      e.item.get('model').fx = null;
      e.item.get('model').fy = null;
    });
  }

  render() {
    return (
      <div
        id="graph-box"
        style={{ width: '717px', height: '530px', margin: '0 auto' }}
      ></div>
    );
  }
}
export default KnowledgeGraph;
