import { CodeBlock } from "react-code-block";
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

  const dataExample = `
  
  Original Api form
   {
    "date": "2023-09-08 15:55:00",
    "open": 178,
    "low": 177.99,
    "high": 178.34,
    "close": 178.19,
    "volume": 2640606
  },
  
restructured version

  {
    x: new Date(1538778600000),
    y: [178, 178.34, 177.99, 178.19],
  },
`;
  return (

    <div className="candle">

    <>

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

  );
}
