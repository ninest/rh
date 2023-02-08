const SECURITIES = ["STOCK", "CRYPTO"] as const;

const CRYPTO_TICKERS = ["BUT", "DOG", "WTH"] as const;
type CryptoTicker = typeof CRYPTO_TICKERS[number];

const STOCK_TICKERS = ["PAPL", "POOG"] as const;
type StockTicker = typeof STOCK_TICKERS[number];

export interface Security {
  type: typeof SECURITIES[number];
  ticker: CryptoTicker | StockTicker;
  name: string;
  startingValue: number;
  values: number[];
}

export const nextValue = (stock: Security): Security => {
  switch (stock.ticker) {
    case "BUT": {
      const lastValue = stock.values.at(-1) || stock.startingValue;
      return {
        ...stock,
        values: [...stock.values, lastValue * 1.01],
      };
    }
    case "DOG": {
      const lastValue = stock.values.at(-1) || 0;
      return {
        ...stock,
        values: [...stock.values, lastValue + 20],
      };
    }
    case "WTH": {
      const lastValue = stock.values.at(-1) || 0;
      return {
        ...stock,
        values: [...stock.values, lastValue + 5],
      };
    }
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

export const BUT: Security = {
  type: "CRYPTO",
  ticker: "BUT",
  name: "Butcoin",
  startingValue: 100,
  values: [],
};
export const DOG: Security = {
  type: "CRYPTO",
  ticker: "DOG",
  name: "Dogcoin",
  startingValue: 50,
  values: [],
};
export const WTH: Security = {
  type: "CRYPTO",
  ticker: "WTH",
  name: "Hellium",
  startingValue: 24,
  values: [],
};

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

export const allCrypto = [BUT, DOG, WTH];
export const allStocks = [PAPL, POOG];
