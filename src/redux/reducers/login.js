//初始化登录信息的列表
const initState = [{ token: "2222222222" }];

export default function login(preState = initState, action) {
  //TODO: 为什么初始化时会连续调s用三次
  switch (action.type) {
    case "LOG_IN":
      return {
        token: action.payload,
      };
    case "LOGIN_ERROR":
      return {
        status_message: action.payload.status_message,
      };
    default:
      return preState;
  }
}
