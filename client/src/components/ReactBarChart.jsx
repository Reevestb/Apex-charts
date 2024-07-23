import { Component } from "react";
import Chart from "react-apexcharts";
// import BcCode from "/images/BarChart.png";
import CbBarChart from "./codeBlockBc";
import "./RBC.css";

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <main id="BC-page">
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
        {/* <img src={BcCode} height={"400px"} /> */}
        <div id="cb-bc">
          <CbBarChart />
        </div>
      </main>
    );
  }
}
