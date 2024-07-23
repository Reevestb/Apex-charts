import Donut from "../components/DonutChart";
import LineChart from "../components/LineChart";
import MyComponent from "../components/ReactBarChart";

export default function HomePage() {
  return (
    <>
      <h1>Home Page </h1>
      <MyComponent />
      <LineChart />
      <Donut />
    </>
  );
}
