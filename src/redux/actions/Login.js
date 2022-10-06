import api from "../../service/base";
export const LoginAction = (username, password) => {
  const data = { username, password };
  /**
   * Do the network call to get user information
   */
  // Pretend that the api is called and returned a code of 200
  var res;
  api("post", "http://127.0.0.1:4523/m1/1712604-0-default/login", data)
    .then((data) => {
      console.log("then");
      res = data;
    })
    .catch((err) => {
      console.log("err");
    });
  return { type: "LOG_IN", data: res };

  // To return the user information to the reducers
};
