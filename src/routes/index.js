import { Navigate } from "react-router-dom";
import Charts from "../components/charts";
import Login from "../components/Login";
import GlobalSearch from "../components/GlobalSearch";
import DataAnaysis from "../components/DataAnalysis";
import { Dashboard } from "../components/Dashboard/Index";
import { AnalysisResult } from "../components/AnalysisResult";
import Test from "../components/Test";
import DashBBoard from "../components/Dashboard/dash";
export default [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/global-search",
    element: <GlobalSearch />,
  },
  {
    path: "/data-analysis",
    element: <DataAnaysis />,
  },
  {
    path: "/dashboard",
    element: <DashBBoard />,
  },
  {
    path: "/analysis-result",
    element: <AnalysisResult />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace={true} />,
  },
];
