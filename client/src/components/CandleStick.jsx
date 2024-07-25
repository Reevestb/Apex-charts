// import ApexCharts from "apexcharts";
// import Chart from "react-apexcharts";
import { Component } from "react";
import ReactApexChart from "react-apexcharts";
// import { Component } from "react";
import { data } from "../lib/clippedLib";
// import { volume } from "../lib/clippedVol";

export default class CandleStick extends Component {
  constructor(props) {
    super(props);
    console.log(data);
    this.state = {
      series: [
        {
          data: data,
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          height: 350,
        },
        title: {
          text: "CandleStick Chart",
          align: "left",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="candlestick"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
