const initState = {
  testReport: 0.28,
  authencicatedReport: 0.42,
  calibrationReport: 0.3,
};
export function getPercentages(preState = initState, action) {
  console.log("----> DashboardReducer ----> getPercentages");
  switch (action.type) {
    case "DASHBOARD_PERCENTAGES":
      return {
        percentages: action.payload,
      };
    default:
      return initState;
  }
}

export function wordCloudReducer(preState = initState, action) {
  console.log("----> DashboardReducer ----> getWordCloudData");
  switch (action.type) {
    case "DASHBOARD_WORDCLOUD":
      return {
        percentages: action.payload,
      };
    default:
      return initState;
  }
}

export function statistics12MonthReducer(preState = initState, action) {
  console.log("----> DashboardReducer ----> get12Month");
  switch (action.type) {
    case "STATISTICS_12MONTH":
      return {
        percentages: action.payload,
      };
    default:
      return initState;
  }
}
