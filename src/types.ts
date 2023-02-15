export interface DataPoint {
  value: number;
  day: number;
}

export type LineChartTimeDisplay =
  | { display: string; days: number; all: false }
  | { display: string; all: true };
