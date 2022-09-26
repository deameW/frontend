import React, { Component } from "react";
import { Layout, Col, Row, Input, Space, Button } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
const { Footer, Content } = Layout;

export class Login extends React.Component {
  render() {
    return (
      <>
        <div style={{ width: "360px", margin: "0 auto" }}>
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <h1>计量大数据平台</h1>

            <div>
              <Input
                size="large"
                placeholder="用户名"
                prefix={<UserOutlined />}
              />
            </div>
            <div>
              <Input.Password
                size="large"
                placeholder="input password"
                prefix={<UserOutlined />}
              />
            </div>
            <div>
              <Button type="primary">Sign In</Button>
            </div>
          </Space>
        </div>
      </>
    );
  }
}
export default Login;
