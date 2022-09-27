import { LOG_IN } from "../constant";

//初始化登录信息的列表
const initState = [{ username: "001", password: "tom" }];

/**
 * 初始化时，store会自动调用reducer
 * @param {*} preState
 * @param {*} action
 * @returns
 */
export default function login(preState = initState, action) {
  //TODO: 为什么初始化时会连续调用三次
  console.log("#@@@");
  const { type, data } = action;
  const res = { code: 200 };
  switch (type) {
    case "LOG_IN": //If to sign in, record the user information
      console.log("@");

      return res;
    default:
      return res;
  }
}
