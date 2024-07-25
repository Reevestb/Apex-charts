import { Flex, Heading, Text, Separator } from "@radix-ui/themes";
import { CodeBlock } from "react-code-block";
import "./RBC.css";
import { Link } from "react-router-dom";

export default function GettingStarted() {
  const installCode = `npm install --save react-apexcharts apexcharts`;
  const htmlCode = `<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script>`;
  return (
    <>
      <br></br>
      <h2>Getting Started</h2>

      <div className="card-margin">
        <Flex direction="column" gap="2">
          <Text>
            React-ApexCharts is a wrapper component for ApexCharts ready to be
            integrated into your react.js application to create stunning React
            Charts. In this post, you will learn how to use React-ApexCharts
            component to create various charts in your react.js application with
            ease.{" "}
          </Text>
          <br></br>
          <h3>Install</h3>
          <Separator my="3" size="4" />
          <Text>
            Install the React-ApexCharts component in your React application
            from npm
          </Text>
          <CodeBlock code={installCode} language="terminal">
            <CodeBlock.Code className="bg-black">
              <div id="bc-lineN">
                <CodeBlock.LineNumber className="cb-ln" />
                <CodeBlock.LineContent className="cb-lc">
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            </CodeBlock.Code>
          </CodeBlock>
          <Text>
            If you need to directly include script in your html, use the
            following cdn links
          </Text>
          <CodeBlock code={htmlCode} language="html">
            <CodeBlock.Code className="bg-black">
              <div id="bc-lineN">
                <CodeBlock.LineNumber className="cb-ln" />
                <CodeBlock.LineContent className="cb-lc">
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            </CodeBlock.Code>
          </CodeBlock>

          <Link to="https://apexcharts.com/docs/react-charts/">
            View full docs here
          </Link>
        </Flex>
      </div>
    </>
  );
}
