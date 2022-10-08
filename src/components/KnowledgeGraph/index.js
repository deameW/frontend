import react, { Component } from "react";
import G6 from "@antv/g6";

export class KnowledgeGraph extends Component {
  refreshDragedNodePosition = (e) => {
    const model = e.item.get("model");
    model.fx = e.x;
    model.fy = e.y;
  };
  componentDidMount() {
    const container = document.getElementById("graph-box");
    const width = container.scrollWidth || 717;
    const height = container.scrollHeight || 500;

    const data = {
      nodes: [
        // 证书certificate
        {
          id: "node0",
          size: 50,
          isLeaf: false,
          label: "证书编号:TJ1c2019-06-20249",
        },
        // 制造者maker
        { id: "node1", size: 30, label: "制造方:安捷伦" },
        // 委托方
        {
          id: "node2",
          size: 30,
          label: "委托方:罗尔斯罗伊斯（中国）投资有限公司",
        },
        // 设备
        { id: "node3", size: 30, label: "设备:万用表" },
        // 标准件
        { id: "node4", size: 30, isLeaf: true, label: "标准件:数字多用表" },
        // 实验室
        { id: "node5", size: 30, isLeaf: false, label: "实验室:lab" },

        // 标准件的溯源单位
        {
          id: "node6",
          size: 30,
          isLeaf: false,
          label: "溯源单位:阿米检测技术有限公司",
        },
      ],
      edges: [
        { source: "node0", target: "node1" },
        { source: "node0", target: "node2" },
        { source: "node0", target: "node3" },
        { source: "node0", target: "node4" },
        { source: "node0", target: "node5" },
        { source: "node4", target: "node6" },
      ],
    };
    const graph = new G6.Graph({
      container: "graph-box",
      width,
      height,
      layout: {
        type: "force",
        preventOverlap: true,
        linkDistance: (d) => {
          if (d.source.id === "node0") {
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
            d.source.id === "node1" ||
            d.source.id === "node2" ||
            d.source.id === "node3"
          ) {
            return 0.7;
          }
          return 0.1;
        },
      },
      defaultNode: {
        color: "#5B8FF9",
      },
      modes: {
        // default: ["drag-canvas"],
      },
    });

    const nodes = data.nodes;
    graph.data({
      nodes,
      edges: data.edges.map(function (edge, i) {
        edge.id = "edge" + i;
        return Object.assign({}, edge);
      }),
    });
    var that = this;
    graph.render();
    graph.on("node:dragstart", function (e) {
      graph.layout();
      that.refreshDragedNodePosition(e);
    });
    graph.on("node:drag", function (e) {
      that.refreshDragedNodePosition(e);
    });
    graph.on("node:dragend", function (e) {
      e.item.get("model").fx = null;
      e.item.get("model").fy = null;
    });
  }

  render() {
    return (
      <div
        id="graph-box"
        style={{ width: "717px", height: "530px", margin: "0 auto" }}
      ></div>
    );
  }
}
export default KnowledgeGraph;
