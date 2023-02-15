// import { scaleLinear } from "d3-scale";
// import { line } from "d3-shape";
import { scaleLinear, line as d3Line, curveNatural, max } from "d3";
import useMeasure from "react-use-measure";
import { DataPoint } from "../../types";

interface LineChartProps {
  data: DataPoint[];
}
export const LineChart = ({ data }: LineChartProps) => {
  const [ref, bounds] = useMeasure();

  return (
    <div ref={ref} className="h-56 w-full">
      <LineChartInner data={data} width={bounds.width} height={bounds.height} />
    </div>
  );
};

interface LineChartInner {
  width: number;
  height: number;
  data: DataPoint[];
}
const LineChartInner = ({ width, height, data }: LineChartInner) => {
  const margin = { top: 10, right: 10, bottom: 20, left: 24 };

  // X: day
  const getX = (d: DataPoint) => d.day;
  // Y: value
  const getY = (d: DataPoint) => d.value;

  const firstDay = data[0].day;
  const lastDay = data.at(-1)!.day;

  const xScale = scaleLinear()
    .domain([firstDay, lastDay])
    .range([margin.left, width - margin.right]);

  const maxValue = Math.max(...data.map((d) => d.value));

  const yScale = scaleLinear()
    .domain([
      0,
      maxValue //+ 0.1 * maxValue, // curve may make line go out of bounds, so add
    ])
    .range([height - margin.bottom, margin.top]);

  const dataAsList: [number, number][] = data.map((d) => [d.day, d.value]);

  const line = d3Line()
    // .curve(curveNatural)
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]));
  const pathD = line(dataAsList)!;

  return (
    <>
      <svg width={width} height={height} className="text-green-600">
        <path d={pathD} fill="none" stroke="currentColor" strokeWidth={2} />
      </svg>
    </>
  );
};
