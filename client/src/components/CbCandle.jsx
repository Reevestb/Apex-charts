import { CodeBlock } from "react-code-block";

import "./Cbcandles.css";

import "./RBC.css";

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

  const dataExample1 = `
  
  Original Api form
   {
    "date": "2023-09-08 15:55:00",
    "open": 178,
    "low": 177.99,
    "high": 178.34,
    "close": 178.19,
    "volume": 2640606
  },`;

  const dataExample2 = `{
    x: new Date(1538778600000),
    y: [178, 178.34, 177.99, 178.19],
  },
`;
  return (

    <div id="candle">
      <div className="codesec">
        <h3>Apexchart code for Chart Object</h3>
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
      </div>
      <div className="codesec">
        <h4> Original Api form</h4>
        <CodeBlock code={dataExample1} language="js">
          <CodeBlock.Code className="bg-black">
            <div id="bc-lineN">
              <CodeBlock.LineNumber className="cb-ln" />
              <CodeBlock.LineContent className="cb-lc">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          </CodeBlock.Code>
        </CodeBlock>
        <h4>Restructred form</h4>
        <CodeBlock code={dataExample2} language="js">
          <CodeBlock.Code className="bg-black">
            <div id="bc-lineN">
              <CodeBlock.LineNumber className="cb-ln" />
              <CodeBlock.LineContent className="cb-lc">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          </CodeBlock.Code>
        </CodeBlock>
      </div>
    </div>

  );
}
