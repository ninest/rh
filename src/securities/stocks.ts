import { Security } from "./types";

export const PAPL: Security = {
  type: "STOCK",
  ticker: "PAPL",
  name: "Pineapple",
  startingValue: 1,
  values: [],
};
export const POOG: Security = {
  type: "STOCK",
  ticker: "POOG",
  name: "Poogle",
  startingValue: 4,
  values: [],
};

export const allStocks = [PAPL, POOG];
