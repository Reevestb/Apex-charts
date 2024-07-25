import Chart from "react-apexcharts";
import { Component } from "react";
import { data } from "../lib/clippedLib";
import { volume } from "../lib/clippedVol";

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

  constructor(props) {
    super(props);
    // const coreData = null;
    // const ourData = [];
    // const volumedata = [];
    // const clippedData = [];
    // const clippedVolume = [];

    // async componentDidMount() {
    //   try {
    //     const data = await ApiFetching();
    //     this.setState({ data, loading: false });
    //   } catch (error) {
    //     this.setState({ error, loading: false });
    //   }
    // }

    this.state = {
      series: [
        {
          data: data,
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
          data: volume,
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
              min: new Date(2023090815550),
              max: new Date(2023090814450),
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
