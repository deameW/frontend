import "./App.css";
import Hello from "./components/Hello";

import { NavLink, Routes, Route } from "react-router-dom";
import Charts from "./components/charts";

function App() {
  return (
    <div className="App">
      <NavLink to="/hello">Hello</NavLink>
      <NavLink to="/charts">图表</NavLink>

      <Routes>
        <Route path="/hello" element={<Hello />}></Route>
        <Route path="/charts" element={<Charts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
