import React, { Component } from "react";
import axios from "axios";
import api from "../service/base";

export default class Hello extends Component {
  componentDidMount() {
    api("get", "https://httpbin.org", {
      name: "why",
      age: 18,
    }).then((res) => {
      console.log(res);
    });
    // axios({
    //   //一个对象
    //   url: "https://httpbin.org",
    //   method: "get",
    //   params: {
    //     name: "why",
    //     age: 18,
    //   },
    /**
     * post请求
     * method:"post"
     * data：{
     *  name:"zhangsan",
     *  age:40
     * }
     */
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  render() {
    return <h2>Hello</h2>;
  }
}
