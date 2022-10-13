import api from "../../service/base";
export const LoginAction = (username, password) => async (dispatch) => {
  const params = { username, password };
  /**
   * Do the network call to get user information
   */
  // Pretend that the api is called and returned a code of 200
  var res;
  const response = await api(
    "post",
    "http://127.0.0.1:4523/m1/1712604-0-default/login",
    params
  ).catch((err) => {
    console.log("err");
  });
  const action = { type: "LOG_IN", data: response.data };
  dispatch({ type: "LOG_IN", payload: response.data });
  // To return the user information to the reducers
};
