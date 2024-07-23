import { useEffect, useState } from "react";

export default function ApiPage() {
  const [chartData, setChartData] = useState([]); //we need an array to map through it

  //! If you forget the dependency array, the effect will trigger forever
  // const apiKey = import.meta.env.FINANCE_API_KEY;
  // console.log(apiKey);

  useEffect(() => {
    //I want to get data from API with fetch
    async function fetchData() {
      const response = await fetch(
        "https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?from=2023-08-10&to=2023-09-10&apikey=09yppK4Zhfds01pRN8vICc0IizAsIzVk"
      );

      const data = await response.json();

      setChartData([data]);

      // function dataLoop([data]) {
      //   for (let i = 0; i < data.length; i++) {
      //     if (i < 5) {
      //       return data[i];
      //     }
      //   }
      // }
      // dataLoop();
      // console.log(dataLoop(chartData));
      // const date = data[0];
      // console.log(date);
    }
    //I called the fetchData function here to be tracked by useEffect
    fetchData();
  }, []);

  return (
    <>
      <h1>Apple Stock Data</h1>
      {chartData.map((item, index) => {
        // console.log(chartData);
        return (
          <>
            <h2 key={index}>
              {item?.date[0]}
              {item?.date[9]}
              {item?.date[19]}
              {item?.date[29]}
              {item?.date[39]}
              {item?.date[49]}
              {item?.date[59]}
              {item?.date[69]}
              {item?.date[79]}
              {item?.date[89]}
              {item?.date[99]}
            </h2>
          </>
        );
      })}
    </>
  );
}
