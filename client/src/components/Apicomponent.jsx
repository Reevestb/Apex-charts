import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
export default function ApiComponent() {
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
    }
    //I called the fetchData function here to be tracked by useEffect
    fetchData();
  }, []);

  const coreData = chartData[0];

  const ourData = [];
  const volumedata = [];
  const clippedData = [];
  const clippedVolume = [];

  coreData.map((dataPoint, index) => {
    ourData.push({
      x: dataPoint.date,
      y: [dataPoint.open, dataPoint.high, dataPoint.low, dataPoint.close],
    });

    volumedata.push(dataPoint.volume);
  });
  let index = 0;
  while (index < 20) {
    clippedData.push(ourData[index]);
    clippedVolume.push(volumedata[index]);
    index++;
  }

  // series: [{
  //   data: [{
  //     x: new Date(2016, 01, 01),
  //     y: [51.98, 56.29, 51.59, 53.85]
  //   },
  //   {
  //     x: new Date(2016, 02, 01),
  //     y: [53.66, 54.99, 51.35, 52.95]
  //   },
  //   .
  //   .
  //   .
  //   {
  //     x: new Date(2016, 08, 01),
  //     y: [52.76, 57.35, 52.15, 57.03]
  //   }]
  // }]

  class AppleChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [
          {
            data: clippedData,
          },
        ],
        options: {
          chart: {
            type: "candlestick",
            height: 290,
            id: "candles",
            toolbar: {
              autoSelected: "pan",
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#3C90EB",
                downward: "#DF7D46",
              },
            },
          },
          xaxis: {
            type: "datetime",
          },
        },

        seriesBar: [
          {
            name: "volume",
            data: clippedVolume,
          },
        ],
        optionsBar: {
          chart: {
            height: 160,
            type: "bar",
            brush: {
              enabled: true,
              target: "candles",
            },
            selection: {
              enabled: true,
              xaxis: {
                min: coreData[15].date,
                max: coreData[0].date,
              },
              fill: {
                color: "#ccc",
                opacity: 0.4,
              },
              stroke: {
                color: "#0D47A1",
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              columnWidth: "80%",
              colors: {
                ranges: [
                  {
                    from: -1000,
                    to: 0,
                    color: "#F15B46",
                  },
                  {
                    from: 1,
                    to: 10000,
                    color: "#FEB019",
                  },
                ],
              },
            },
          },
          stroke: {
            width: 0,
          },
          xaxis: {
            type: "datetime",
            axisBorder: {
              offsetX: 13,
            },
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
        },
      };
    }

    render() {
      return (
        <div>
          <div class="chart-box">
            <div id="chart-candlestick">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="candlestick"
                height={290}
              />
            </div>
            <div id="chart-bar">
              <Chart
                options={this.state.optionsBar}
                series={this.state.seriesBar}
                type="bar"
                height={160}
              />
            </div>
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  const domContainer = document.querySelector("#app");
  ReactDOM.render(React.createElement(ApexChart), domContainer);
}
