import React, { Component } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
class MyComponent extends React.Component {
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
      <div>
        <div id="chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
            width={400}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
export default MyComponent;
