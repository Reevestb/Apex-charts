export default function CandleCard() {
  return (
    <>
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
    </>
  );
}
