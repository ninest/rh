import { Security } from "./types";

export const PAPL: Security = {
  type: "STOCK",
  ticker: "PAPL",
  name: "Pineapple",
  startingValue: 1,
  values: [],
  industries: ["INFORMATION_TECHNOLOGY", "CONSUMER_DISCRETIONARY"],
};
export const POOG: Security = {
  type: "STOCK",
  ticker: "POOG",
  name: "Poogle",
  startingValue: 4,
  values: [],
  industries: ["COMMUNICATION_SERVICES"],
};

export const allStocks = [PAPL, POOG];
