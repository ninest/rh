import clsx from "clsx";
import { line as d3Line, scaleLinear } from "d3";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { DataPoint, LineChartTimeDisplay } from "../../types";

interface LineChartProps {
  data: DataPoint[];
}
export const LineChart = ({ data }: LineChartProps) => {
  const [ref, bounds] = useMeasure();

  const times: LineChartTimeDisplay[] = [
    { display: "1W", days: 7, all: false },
    { display: "1M", days: 30, all: false },
    { display: "3M", days: 90, all: false },
    { display: "6M", days: 180, all: false },
    { display: "1Y", days: 360, all: false },
    { display: "ALL", all: true },
  ];

  const [selectedTimeDisplay, setSelectedTimeDisplay] = useState(0);

  return (
    <div>
      <div ref={ref} className="h-56 w-full">
        <LineChartInner
          width={bounds.width}
          height={bounds.height}
          data={data}
          timeDisplay={times[selectedTimeDisplay]}
        />
      </div>
      <div className="flex space-x-2 justify-end">
        {times.map((timeDisplay, index) => (
          <button
            className={clsx("text-xs font-semibold py-0.5 px-1 rounded-md", {
              "bg-green-500 text-white": selectedTimeDisplay === index,
              "text-green-500": selectedTimeDisplay !== index,
            })}
            onClick={() => setSelectedTimeDisplay(index)}
          >
            {timeDisplay.display}
          </button>
        ))}
      </div>
    </div>
  );
};

interface LineChartInner {
  width: number;
  height: number;
  data: DataPoint[];
  timeDisplay: LineChartTimeDisplay;
}
const LineChartInner = ({
  width,
  height,
  data,
  timeDisplay,
}: LineChartInner) => {
  const margin = { top: 10, right: 10, bottom: 20, left: 24 };

  // X: day
  const getX = (d: DataPoint) => d.day;
  // Y: value
  const getY = (d: DataPoint) => d.value;

  // Convert data to list of tuple form, then filter by last x days based on timeDisplay
  let dataInRange = data;
  if (!timeDisplay.all) dataInRange = dataInRange.slice(-timeDisplay.days);

  const firstDay = dataInRange[0].day;
  const lastDay = dataInRange.at(-1)!.day;

  const xScale = scaleLinear()
    .domain([firstDay, lastDay])
    .range([margin.left, width - margin.right]);

  const maxValue = Math.max(...dataInRange.map((d) => d.value));

  const yScale = scaleLinear()
    .domain([
      0,
      maxValue, //+ 0.1 * maxValue, // curve may make line go out of bounds, so add
    ])
    .range([height - margin.bottom, margin.top]);

  let dataAsList: [number, number][] = dataInRange.map((d) => [d.day, d.value]);

  const line = d3Line()
    // .curve(curveNatural)
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]));
  const pathD = line(dataAsList)!;

  return (
    <>
      <svg width={width} height={height} className="text-green-500">
        <path d={pathD} fill="none" stroke="currentColor" strokeWidth={2} />
      </svg>
    </>
  );
};
