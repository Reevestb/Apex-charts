import Donut from "./components/DonutChart";
import LineChart from "./components/LineChart";
import MyComponent from "./components/ReactBarChart";
import Api from "./pages/Api";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import GraphDemo from "./components/GraphDemo";

// import Graph from "./components/FirstGraph";
//  main

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <MyComponent />
      <LineChart />
      <Donut />
    </>
  );
}
