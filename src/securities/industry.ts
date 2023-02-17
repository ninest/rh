const INDUSTRY_KEYS = [
  "ENERGY",
  "MATERIALS",
  "INDUSTRIALS",
  "UTILITIES",
  "HEALTHCARE",
  "FINANCIAL",
  "CONSUMER_DISCRETIONARY",
  "CONSUMER_STAPLES",
  "INFORMATION_TECHNOLOGY",
  "COMMUNICATION_SERVICES",
  "REAL_ESTATE",
  "CRYPTO",
] as const;
export type Industry = typeof INDUSTRY_KEYS[number];

export interface IndustryInfo {
  key: Industry;
  name: string;
}

export const allIndustries: IndustryInfo[] = [
  { key: "ENERGY", name: "Energy" },
  { key: "MATERIALS", name: "Materials" },
  { key: "INDUSTRIALS", name: "Industrials" },
  { key: "UTILITIES", name: "Utilities" },
  { key: "HEALTHCARE", name: "Healthcare" },
  { key: "FINANCIAL", name: "Financial" },
  { key: "CONSUMER_DISCRETIONARY", name: "Consumer Discretionary" },
  { key: "CONSUMER_STAPLES", name: "Consumer Staples" },
  { key: "INFORMATION_TECHNOLOGY", name: "Information Technology" },
  { key: "COMMUNICATION_SERVICES", name: "Communication Services" },
  { key: "REAL_ESTATE", name: "Real Estate" },
  { key: "CRYPTO", name: "Cryptocurrency" },
];
