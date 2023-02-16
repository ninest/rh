import { Industry } from "./industry";

const SECURITIES = ["STOCK", "CRYPTO"] as const;

const CRYPTO_TICKERS = ["BUT", "DOG", "WTH"] as const;
type CryptoTicker = typeof CRYPTO_TICKERS[number];

const STOCK_TICKERS = ["PAPL", "POOG"] as const;
type StockTicker = typeof STOCK_TICKERS[number];

const TICKERS = [...CRYPTO_TICKERS, ...STOCK_TICKERS];
export type Ticker = typeof TICKERS[number];

export interface Security {
  type: typeof SECURITIES[number];
  ticker: CryptoTicker | StockTicker;
  name: string;
  startingValue: number;
  values: number[];
  industries: Industry[];
}
