import { Component } from "react";
import Chart from "react-apexcharts";
import DcCode from "/images/Donut.png";

export default class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ["A", "B", "C", "D", "E"],
    };
  }

  render() {
    return (
      <>
        <div className="donut">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            width="380"
          />
          <img src={DcCode} height={"400px"} />
        </div>
      </>
    );
  }
}
