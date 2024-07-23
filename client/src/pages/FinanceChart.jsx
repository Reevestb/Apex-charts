import { useEffect, useState } from "react";

export default function FinanceChart() {
  //I want to put the wrangled data in state, because I want to track the value of my wrangled data
  const [chartData, setChartData] = useState([]); //we need an array to map through it
  //we are going to use useEffect to track the API response
  //the dependecy array keeps an eye on a value. When the value updates, the effect triggers again.
  //If the dependecy array is empty, the effect will trigger once.
  //! If you forget the dependency array, the effect will trigger forever

  //   useEffect(() => {
  //     effect --> DOM manipulation, API fetch, timers
  //   }, []);

  useEffect(() => {
    //I want to get data from API with fetch
    async function fetchData() {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?from=2023-08-10&to=2023-09-10&apikey=09yppK4Zhfds01pRN8vICc0IizAsIzVk"
      );
      //we parse the fetched data into json
      const data = await response.json();
      //we need to wrangle the data, filter what we want
      //   const wrangledData = data.chartData[2];
      setChartData([data]);
      console.log(data);
    }
    //I called the fetchData function here to be tracked by useEffect
    fetchData();
  }, []);

  return (
    <>
      <h1>Recipes</h1>
      {chartData.map((item) => {
        return (
          <>
            <h2>{item.date}</h2>
          </>
        );
      })}
    </>
  );
}
