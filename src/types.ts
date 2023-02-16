export interface DataPoint {
  value: number;
  day: number;
}

export type LineChartTimeDisplay =
  | { display: string; days: number; all: false }
  | { display: string; all: true };

export interface Parameters {
  currentMarketLevel: number; // 0 to 1
  currentIndustryLevels: any[];
}
