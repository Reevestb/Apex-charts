import { useEffect, useState } from "react";

import APIChart from "../components/Apicomponent";

export default async function ApiFetching() {
  const [chartData, setChartData] = useState([]); //we need an array to map through it
  const [coreData, setCoreData] = useState();
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
      setCoreData(data[0]);
    }

    fetchData();
  }, []);

  const ourData = [];
  const volumedata = [];
  const clippedData = [];
  const clippedVolume = [];

  await chartData[0].map((dataPoint) => {
    ourData.push({
      x: dataPoint.date,
      y: [dataPoint.open, dataPoint.high, dataPoint.low, dataPoint.close],
    });

    volumedata.push(dataPoint.volume);
  });
  console.log(coreData);
  let index = 0;
  while (index < 20) {
    clippedData.push(ourData[index]);
    clippedVolume.push(volumedata[index]);
    index++;
  }

  return (
    <>
      {" "}
      <APIChart vol={clippedVolume} data={clippedData} core={coreData} />
    </>
  );
}
