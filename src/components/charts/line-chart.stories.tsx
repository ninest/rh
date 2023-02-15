import { LineChart } from "./line-chart";

export const LineChartDemo = () => {
  return (
    <>
      what:
      <LineChart
        data={[
          { day: 0, value: 1 },
          { day: 1, value: 2 },
          { day: 2, value: 6 },
          { day: 3, value: 12 },
          { day: 4, value: 17 },
          { day: 5, value: 13 },
          { day: 6, value: 12 },
          { day: 7, value: 19 },
          { day: 8, value: 0 },
          { day: 9, value: 1 },
          { day: 10, value: 100 },
          { day: 11, value: 105 },
          { day: 12, value: 105 },
          { day: 13, value: 105 },
          { day: 14, value: 105 },
          { day: 15, value: 215 },
          { day: 16, value: 200 },
          { day: 17, value: 3 },
        ]}
      />
    </>
  );
};
