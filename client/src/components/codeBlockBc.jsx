import { CodeBlock } from "react-code-block";

export default function CodeBlockBC() {
  const codeExample = `import { Component } from "react";
import Chart from "react-apexcharts";

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
      <>
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
