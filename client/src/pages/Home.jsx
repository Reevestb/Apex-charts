import Donut from "../components/DonutChart";
import GettingStarted from "../components/GettingStarted";
import LineChart from "../components/LineChart";
import MyComponent from "../components/ReactBarChart";

export default function HomePage() {
  return (
    <>
      <GettingStarted />
      <h2>Bar Chart</h2>
      <MyComponent />
      <h2>Line Chart</h2>
      <LineChart />
      <h2>Donut Chart</h2>
      <Donut />
    </>
  );
}
