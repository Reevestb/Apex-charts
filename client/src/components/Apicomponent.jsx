import Chart from "react-apexcharts";
import { Component } from "react";
export default class ApiComponent extends Component {
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
   

  constructor(props, vol, dataset, core) {
    super(props);


    this.state = {
      series: [
        {
          data: dataset,
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
              upward: "#3C90EB", // candle up colour
              downward: "#DF7D46", // candle down colour
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
          data: vol,
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
              min: core[15].date,
              max: core[0].date,
            },
            fill: {
              color: "#ccc", //volume colour
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1", //volume border colour
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
        <div className="chart-box">
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
