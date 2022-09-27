import { connect } from "react-redux";
import React, { Component } from "react";
import { Input, Space, Button, Form, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginAction } from "../../redux/actions/Login";
import { PROJECT_NAME, USER_NAME_INPUT, PASSWORD_INPUT, SIGN_IN } from "../zh";

class LoginUI extends Component {
  handleSubmit = (username, password) => {
    this.props.login(username, password);
  };
  onFinish = (values) => {
    console.log("Success:", values);
    this.handleSubmit(values.username, values.password);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <>
        <div id="container" style={{ width: "360px", margin: "0 auto" }}>
          <h1>{PROJECT_NAME}</h1>

          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名!",
                  },
                ]}
              >
                <Input
                  placeholder={USER_NAME_INPUT}
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码!",
                  },
                ]}
              >
                <Input.Password
                  placeholder={PASSWORD_INPUT}
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </>
    );
  }
}

export default connect((state) => ({}), {
  login: LoginAction,
})(LoginUI);
