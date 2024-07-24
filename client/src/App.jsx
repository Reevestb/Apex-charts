import Api2 from "./pages/Api";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// import ApiPage from "./pages/Api";

// import GraphDemo from "./components/GraphDemo";

// import Graph from "./components/FirstGraph";
//  main

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* <ApiPage /> */}
    </>
  );
}
