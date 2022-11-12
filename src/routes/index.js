import { Navigate } from 'react-router-dom';
import Charts from '../components/charts';
import Login from '../components/Login';
import GlobalSearch from '../components/GlobalSearch';
import DataAnaysis from '../components/DataAnalysis';
import { Dashboard } from '../components/Dashboard/Index';
import { AnalysisResult } from '../components/AnalysisResult';
import { AttributionAnalysis } from '../components/AttributionAnalysis';
import Test from '../components/Test';
import DashBBoard from '../components/Dashboard/dash';
import DatabaseSelection from '../components/DatabaseSelection';
import StatisticAnalysis from '../components/StatisticAnalysis';

const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/global-search',
    element: <GlobalSearch />
  },
  {
    path: '/database_selection',
    element: <DatabaseSelection />
  },
  {
    path: '/data-analysis',
    element: <DataAnaysis />
  },
  {
    path: '/dashboard',
    element: <DashBBoard />
  },
  {
    path: '/analysis-result',
    element: <AnalysisResult />
  },
  {
    path: '/attribution-analysis',
    element: <AttributionAnalysis />
  },
  {
    path: '/statistic-analysis',
    element: <StatisticAnalysis />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/',
    element: <Navigate to="/login" replace={true} />
  }
];
export default routes;
