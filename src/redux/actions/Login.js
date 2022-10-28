import api from "../../service/base";
export const LoginAction = (role, username, password) => async (dispatch) => {
  const params = { role, username, password };
  const response = await api(
    "post",
    "http://127.0.0.1:4523/m1/1730824-0-default/login",
    params
  )
    .catch((err) => {
      console.log("err");
    })
    .then((result) => {
      if (result.status_code == 200) {
        const action = { type: "LOG_IN", payload: result.data };
        dispatch(action);
      } else {
        const action = { type: "LOGIN_ERROR", payload: result };
        dispatch(action);
      }
    });
};
