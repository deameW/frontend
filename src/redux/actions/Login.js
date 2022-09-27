import api from "../../service/base";
export const LoginAction = (username, password) => {
  const data = { username, password };
  /**
   * Do the network call to get user information
   */
  // Pretend that the api is called and returned a code of 200
  // api("post", "url", data)
  //   .then((res) => {
  //     console.log("then");
  //   })
  //   .catch((err) => {
  //     console.log("err");
  //   });

  // To return the user information to the reducers
  return { type: "LOG_IN", data };
};
