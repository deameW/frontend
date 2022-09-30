import { connect } from "react-redux";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Input, Space, Button, Form, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginAction } from "../../redux/actions/Login";
import { PROJECT_NAME, USER_NAME_INPUT, PASSWORD_INPUT, SIGN_IN } from "../zh";

class LoginUI extends Component {
  handleSubmit = (username, password) => {
    this.props.login(username, password);
    //TODO: why returned reducer's value is reducer itself
    // if(this.props.code == 200)  do the follows:
    /**
     * TODO:想使用use navigate跳转路由，但是hook只能在函数式组件中使用，考虑把组件改为函数式组件
     */
    // route to the index page
    // const navigate = useNavigate();

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
        <div id="container" style={{ width: "360px", margin: "20% auto" }}>
          <Space
            direction="vertical"
            size="large"
            style={{
              display: "flex",
            }}
          >
            <div
              id="project-name"
              style={{
                width: "232px",
                height: "38px",
                fontSize: "28px",
                fontWeight: "bold",
                margin: "0 auto",
              }}
            >
              {PROJECT_NAME}
            </div>
            <div style={{ "margin-top": "57px" }}>
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
                    prefix={<UserOutlined style={{ color: "#1890FF" }} />}
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
                    prefix={<LockOutlined style={{ color: "#1890FF" }} />}
                  />
                </Form.Item>

                {/* <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item> */}

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {SIGN_IN}
                  </Button>
                </Form.Item>
              </Form>
            </div>
            {this.code == 200 ? (
              <Navigate replace to={"/charts"}></Navigate>
            ) : null}
          </Space>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    code: state,
  }),
  {
    login: LoginAction,
  }
)(LoginUI);
