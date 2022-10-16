import { connect } from "react-redux";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Input, Space, Button, Form, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginAction } from "../../redux/actions/Login";
import {
  PROJECT_NAME,
  USER_NAME_INPUT,
  PASSWORD_INPUT,
  SIGN_IN,
  HINT_USER_NAME_INPUT,
  HINT_PASSWORD_INPUT,
} from "../zh";
import "./index.css";

class LoginUI extends Component {
  componentDidUpdate = () => {
    console.log(
      "---------------------------componentDidUpdate------------------"
    );
    console.log(this.props.token);
  };
  handleSubmit = (username, password) => {
    this.props.login(username, password);
    this.code = 200;
  };
  onFinish = (values) => {
    console.log("Login Check Success:", values);
    this.handleSubmit(values.username, values.password);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <>
        <div className="container11">
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <div className="project-name">{PROJECT_NAME}</div>
            <div style={{ marginTop: "57px" }}>
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
                      message: { HINT_USER_NAME_INPUT },
                    },
                  ]}
                >
                  <Input
                    placeholder={USER_NAME_INPUT}
                    prefix={<UserOutlined style={{ color: "#1890FF" }} />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: { HINT_PASSWORD_INPUT },
                    },
                  ]}
                >
                  <Input.Password
                    placeholder={PASSWORD_INPUT}
                    prefix={<LockOutlined style={{ color: "#1890FF" }} />}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "114px", height: "40px" }}
                  >
                    {SIGN_IN}
                  </Button>
                </Form.Item>
              </Form>
            </div>
            {this.props.token != null ? (
              <Navigate replace to={"/database_selection"}></Navigate>
            ) : null}
          </Space>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    token: state.LoginReducer.token,
  }),
  {
    login: LoginAction,
  }
)(LoginUI);
