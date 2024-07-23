import { CodeBlock } from "react-code-block";

export default function CodeBlockBC() {
  const codeExample = `
  import { Component } from "react";
import Chart from "react-apexcharts";

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
        </div>
      </>
    );
  }
}

`;
  return (
    <CodeBlock code={codeExample} language="js">
      <CodeBlock.Code className="bg-black">
        <div id="bc-lineN">
          <CodeBlock.LineNumber className="cb-ln" />
          <CodeBlock.LineContent className="cb-lc">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}
