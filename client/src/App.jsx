import "./App.css";
import Donut from "./components/DonutChart";
import LineChart from "./components/LineChart";

import MyComponent from "./components/ReactBarChart";

// import GraphDemo from "./components/GraphDemo";

// import Graph from "./components/FirstGraph";
//  main

function App() {
  return (
    <>
      <MyComponent />
      <LineChart />
      <Donut />
    </>
  );
}

export default App;
