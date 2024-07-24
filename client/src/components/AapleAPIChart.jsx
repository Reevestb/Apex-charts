import { Component } from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);

const [chartData, setChartData] = useState([]);

async function fetchApi() {
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
      setChartData(data);
      // console.log(data);
      // const date = data[0];
      // console.log(date);
    }
    //I called the fetchData function here to be tracked by useEffect
    // fetchData();
  }, []);
}

fetchApi();

function dataLoop(chartData) {
  for (let i = 0; i < 50; i++) {
    return data[i];
  }
}
console.log(dataLoop(chartData));

var optionsLine = {
  chart: {
    height: 350,
    type: "line",
    stacked: true,
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    dropShadow: {
      enabled: true,
      opacity: 0.3,
      blur: 5,
      left: -7,
      top: 22,
    },
    events: {
      animationEnd: function (chartCtx, opts) {
        const newData1 = chartCtx.w.config.series[0].data.slice();
        newData1.shift();
        const newData2 = chartCtx.w.config.series[1].data.slice();
        newData2.shift();

        // check animation end event for just 1 series to avoid multiple updates
        if (opts.el.node.getAttribute("index") === "0") {
          window.setTimeout(function () {
            chartCtx.updateOptions(
              {
                series: [
                  {
                    data: newData1,
                  },
                  {
                    data: newData2,
                  },
                ],
                subtitle: {
                  text: parseInt(getRandom() * Math.random()).toString(), //think these are x labels
                },
              },
              false,
              false
            );
          }, 300);
        }
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 5,
  },
  grid: {
    padding: {
      left: 0,
      right: 0,
    },
  },
  markers: {
    size: 0,
    hover: {
      size: 0,
    },
  },
  series: [
    {
      name: "Running",
      data: generateMinuteWiseTimeSeries(
        //this will be y-axis data points
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 30,
          max: 110,
        }
      ),
    },
    {
      name: "Waiting",
      data: generateMinuteWiseTimeSeries(
        //same deal for second lineif needed
        new Date("12/12/2016 00:20:00").getTime(),
        12,
        {
          min: 30,
          max: 110,
        }
      ),
    },
  ],
  xaxis: {
    type: "datetime",
    range: 2700000,
  },
  title: {
    text: "Processes",
    align: "left",
    style: {
      fontSize: "12px",
    },
  },
  subtitle: {
    text: "20",
    floating: true,
    align: "right",
    offsetY: 0,
    style: {
      fontSize: "22px",
    },
  },
  legend: {
    show: true,
    floating: true,
    horizontalAlign: "left",
    onItemClick: {
      toggleDataSeries: false,
    },
    position: "top",
    offsetY: -28,
    offsetX: 60,
  },
};

var chartLine = new Chart(document.querySelector("#linechart"), optionsLine);
chartLine.render();

//!Below runs the info update?

chartLine.updateSeries([
  {
    data: [
      ...chartLine.w.config.series[0].data,
      [chartLine.w.globals.maxX + 300000, getRandom()],
    ],
  },
  {
    data: [
      ...chartLine.w.config.series[1].data,
      [chartLine.w.globals.maxX + 300000, getRandom()],
    ],
  },
]);
