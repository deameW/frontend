import { Navigate } from "react-router-dom";
import Charts from "../components/charts";
import Login from "../components/Login";
import GlobalSearch from "../components/GlobalSearch";
import DataAnaysis from "../components/DataAnalysis";
export default [
  {
    path: "/charts",
    element: <Charts />,
  },
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
    path: "/",
    element: <Navigate to="/login" replace={true} />,
  },
];
