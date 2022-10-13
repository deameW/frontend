import { LOG_IN } from "../constant";

//初始化登录信息的列表
const initState = [{ token: "2222222222" }];
/**
 * 初始化时，store会自动调用reducer
 * @param {*} preState
 * @param {*} action
 * @returns
 */
export default function login(preState = initState, action) {
  //TODO: 为什么初始化时会连续调s用三次
  console.log("#@@@");
  const res = preState;
  console.log("-----", action.payload);
  switch (action.type) {
    case "LOG_IN": //If to sign in, record the user information
      return {
        // token: action.payload,
        token: action.payload,
      };

    default:
      return preState;
  }
}
