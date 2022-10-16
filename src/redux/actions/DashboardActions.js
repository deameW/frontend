import api from "../../service/base";
export const RingChartPercentageAction = () => {
  /**
   * fake data
   */
  const percentages = {
    testReport: 0.28,
    authencicatedReport: 0.42,
    calibrationReport: 0.3,
  };
  //   const response = await api(
  //     "get",
  //     "http://127.0.0.1:4523/m1/1712604-0-default/login",
  //     params
  //   ).catch((err) => {
  //     console.log("err");
  //   });
  return { type: "DASHBOARD_PERCENTAGES", payload: { ...percentages } };
  // To return the user information to the reducers
};

export const WordCloudAction = () => {
  /**
   * fake data
   */
  const percentages = {
    testReport: 0.28,
    authencicatedReport: 0.42,
    calibrationReport: 0.3,
  };
  //   const response = await api(
  //     "get",
  //     "http://127.0.0.1:4523/m1/1712604-0-default/login",
  //     params
  //   ).catch((err) => {
  //     console.log("err");
  //   });
  return { type: "DASHBOARD_WORDCLOUD", payload: { ...percentages } };
  // To return the user information to the reducers
};

export const statistics12MonthAction = () => {
  /**
   * fake data
   */
  const percentages = {
    testReport: 0.28,
    authencicatedReport: 0.42,
    calibrationReport: 0.3,
  };
  //   const response = await api(
  //     "get",
  //     "http://127.0.0.1:4523/m1/1712604-0-default/login",
  //     params
  //   ).catch((err) => {
  //     console.log("err");
  //   });
  return { type: "STATISTICS_12MONTH", payload: { ...percentages } };
  // To return the user information to the reducers
};
