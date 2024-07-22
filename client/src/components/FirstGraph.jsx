import ApexCharts from "apexcharts";
import { Component } from "react";

// var options = {
//   chart: {
//     type: "line",
//   },
//   series: [
//     {
//       name: "sales",
//       data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
//     },
//   ],
//   xaxis: {
//     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);

// chart.render();

class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Blue",
          data: [
            {
              x: "Jan",
              y: 43,
            },
            {
              x: "Feb",
              y: 58,
            },
          ],
        },
        {
          name: "Green",
          data: [
            {
              x: "Jan",
              y: 33,
            },
            {
              x: "Feb",
              y: 38,
            },
          ],
        },
        {
          name: "Red",
          data: [
            {
              x: "Jan",
              y: 55,
            },
            {
              x: "Feb",
              y: 21,
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          width: 400,
          type: "line",
        },
        plotOptions: {
          line: {
            isSlopeChart: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <>
        <div>
          <div id="chart">
            <ApexCharts
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={350}
              width={400}
            />
          </div>
          <div id="html-dist"></div>
        </div>
      </>
    );
  }
}

export default ApexChart;
