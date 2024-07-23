import "./App.css";
import Donut from "./components/DonutChart";
import LineChart from "./components/LineChart";

import MyComponent from "./components/ReactBarChart";
import ApiPage from "./pages/Api";

// import GraphDemo from "./components/GraphDemo";

// import Graph from "./components/FirstGraph";
//  main

function App() {
  return (
    <>
      <MyComponent />
      <LineChart />
      <Donut />
      <ApiPage />
    </>
  );
}

export default App;
