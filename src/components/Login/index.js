import { connect } from "react-redux";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Input, Space, Button, Form, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginAction } from "../../redux/actions/Login";
import { setToken, isLogined } from "../../utils/auth";
import {
  PROJECT_NAME,
  USER_NAME_INPUT,
  PASSWORD_INPUT,
  SIGN_IN,
  HINT_USER_NAME_INPUT,
  HINT_PASSWORD_INPUT,
} from "../zh";
import "./index.css";
import { md5 } from "../../utils/md5";

const window_height = document.body.clientHeight - 97;
class LoginUI extends Component {
  componentDidUpdate = () => {
    console.log(
      "---------------------------componentDidUpdate------------------"
    );
  };
  handleSubmit = async (username, password) => {
    await this.props.login(username, md5(password));
    if (this.props.token == null) {
      message.error(this.props.status_message);
    }

    //使用localStorage存入token
    // setToken(this.props.token);
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
                  className="input_box"
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
                  className="input_box"
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
                    style={{ width: "114px", height: "40px" ,marginLeft:"130px"}}
                  >
                    {SIGN_IN}
                  </Button>
                </Form.Item>
              </Form>
            </div>
            {isLogined() || this.props.token != null ? (
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
    status_message: state.LoginReducer.status_message,
  }),
  {
    login: LoginAction,
  }
)(LoginUI);
