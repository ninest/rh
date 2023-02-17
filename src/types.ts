import { Industry } from "./securities/industry";

export interface DataPoint {
  value: number;
  day: number;
}

export type LineChartTimeDisplay =
  | { display: string; days: number; all: false }
  | { display: string; all: true };

export interface Parameters {
  marketLevel: number; // 0 to 1
  industryLevels: { [key in Industry]: number };
}
