import "./App.css";
import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useRoutes } from "react-router-dom";
import { isLogined } from "./utils/auth";
import routes from "./routes";
import { useLocation, useRouter } from "react-router";

function App() {
  const element = useRoutes(routes);
  if (!isLogined()) {
    <NavLink to="/login">111</NavLink>;
  }
  const items = [
    {
      label: <NavLink to="/login">登录</NavLink>,
      key: "login",
      icon: <MailOutlined />,
      hidden: true,
    },
    {
      label: <NavLink to="/dashboard">首页</NavLink>,
      key: "dashboard",
      icon: <MailOutlined />,
    },
    {
      label: <NavLink to="/global-search">全局数据检索</NavLink>,
      key: "global-search",
      icon: <AppstoreOutlined />,
    },
    {
      label: <NavLink to="/data-analysis">数据分析预测</NavLink>,
      key: "data-analysis",
      icon: <SettingOutlined />,
    },
    {
      label: <NavLink to="/test">test</NavLink>,
      key: "test",
      icon: <SettingOutlined />,
    },
  ];

  const [current, setCurrent] = useState("login");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const location = useLocation();
  const path = `${location.pathname}${location.search}`;

  return (
    <div className="App">
      {path == "/login" ? (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          hidden={true}
        />
      ) : (
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ height: "103px", lineHeight: "103px", fontSize: "14px" }}
          // hidden={true}
        />
      )}
      {/* 注册路由 */}
      {element}
    </div>
  );
}

export default App;
