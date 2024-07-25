import { CodeBlock } from "react-code-block";

export default function CandleCodeBlock() {
  const codeExample = `export default class CandleStick extends Component {
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
  }`;
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
