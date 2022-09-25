import "./App.css";
import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, Routes, Route } from "react-router-dom";
import Charts from "./components/charts";

function App() {
  const items = [
    {
      label: <NavLink to="/charts">首页</NavLink>,
      key: "home-page",
      icon: <MailOutlined />,
    },
    {
      label: "全局数据检索",
      key: "global-search",
      icon: <AppstoreOutlined />,
    },
    {
      label: "重点数据检索",
      key: "key-point-search",
      icon: <SettingOutlined />,
    },
    {
      label: "数据预测分析",
      key: "analysis",
      icon: <SettingOutlined />,
    },
  ];

  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/charts" element={<Charts />}></Route>
      </Routes>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      ;
    </div>
  );
}

export default App;
