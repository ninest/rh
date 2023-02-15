import { rangeList } from "../../utils/list.utils";
import { randomBetween } from "../../utils/random.util";
import { LineChart } from "./line-chart";

export const LineChartDemo = () => {
  return (
    <>
      <LineChart
        data={rangeList(730).map((n, i) => ({
          day: i,
          value: randomBetween(1, 100),
        }))}
      />
    </>
  );
};
