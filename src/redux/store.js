/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux";
//引入为Count组件服务的reducer
import LoginReducer from "./reducers/login";
import { getPercentages } from "./reducers/DashboardReducer";
import { wordCloudReducer } from "./reducers/DashboardReducer";

//引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";

//暴露store
//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
  getPercentages,
  LoginReducer,
  wordCloudReducer,
});

//暴露store
export default createStore(allReducer, applyMiddleware(thunk));
