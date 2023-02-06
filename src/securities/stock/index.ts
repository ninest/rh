export interface Stock {
  ticker: string;
  startingValue: number;
  values: number[];
}

export const nextValue = (stock: Stock): Stock => {
  if (stock.ticker === "PAPL") {
    const lastValue = stock.values.at(-1) || 0;
    return {
      ...stock,
      values: [...stock.values, lastValue + 1],
    };
  }
  throw Error("Stock next value not implemented");
};

export const PAPL: Stock = { ticker: "PAPL", startingValue: 1, values: [] };
