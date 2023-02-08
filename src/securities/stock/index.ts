const TICKERS = ["PAPL", "POOG"] as const;
type Ticker = typeof TICKERS[number];

export interface Stock {
  ticker: Ticker;
  name: string;
  startingValue: number;
  values: number[];
}

export const nextValue = (stock: Stock): Stock => {
  switch (stock.ticker) {
    case "PAPL": {
      const lastValue = stock.values.at(-1) || 0;
      return {
        ...stock,
        values: [...stock.values, lastValue + 1],
      };
    }
    case "POOG": {
      const lastValue = stock.values.at(-1) || 0;
      return {
        ...stock,
        values: [...stock.values, lastValue + 2],
      };
    }
  }
  throw Error("Stock next value not implemented");
};

export const PAPL: Stock = {
  ticker: "PAPL",
  name: "Pineapple",
  startingValue: 1,
  values: [],
};

export const POOG: Stock = {
  ticker: "POOG",
  name: "Poogle",
  startingValue: 4,
  values: [],
};

export const allStocks = [PAPL, POOG];
