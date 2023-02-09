import { Ticker } from "../securities/types";

const TRANSACTION_TYPES = ["BUY_MARKET", "SELL_MARKET"]as const;
type TransactionType = typeof TRANSACTION_TYPES[number];

export interface Transaction {
  type: TransactionType;
  fulfilled: boolean;
  day: number;
  ticker: Ticker;
  amount: number;
}
