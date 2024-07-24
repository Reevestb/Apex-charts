import { Component } from "react";
import Chart from "react-apexcharts";
// import LcCode from "/images/LineChart.png";
import CbLineChart from "./CbLineChart";
import "./RBC.css";
import { Card } from "@radix-ui/themes";

export default class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
      <Card>
        <br></br>
        <div id="BC-page">
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="500"
                />
              </div>
            </div>
          </div>
          {/* <img src={LcCode} height={"400px"} /> */}
          <div id="cb-bc">
            <CbLineChart />
          </div>
          {/* </Flex> */}
        </div>
      </Card>
    );
  }
}
