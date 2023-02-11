import { atom, useAtom } from "jotai";
import { getLastValue } from "../securities/functions";
import { Ticker } from "../securities/types";
import { securitiesAtom, useSecurities } from "./use-securities";
import { useTimer } from "./use-timer";
import { useTransactions } from "./use-transaction";

type Account = Partial<Record<Ticker, number>>;

const moneyAtom = atom(0);
const accountAtom = atom<Account>({});
const totalEquityAtom = atom((get) => {
  const money = get(moneyAtom);
  const account = get(accountAtom);
  // Get account value by summing value of securities
  const securities = get(securitiesAtom);
  let total = money;
  securities.forEach((sec) => {
    const numInAccount = account[sec.ticker] ?? 0;
    total += numInAccount * getLastValue(sec);
  });

  return total;
});

export const useAccount = () => {
  const [money, setMoney] = useAtom(moneyAtom);
  const [account, setAccount] = useAtom(accountAtom);
  const [totalEquity] = useAtom(totalEquityAtom);
  const { securities } = useSecurities();
  const { addTransaction } = useTransactions();
  const { daysLeft } = useTimer();

  const numSharesOwned = (ticker: Ticker) => {
    return account[ticker] ?? 0;
  };

  const buyMarket = (ticker: Ticker, amount: number) => {
    const security = securities.filter((sec) => sec.ticker === ticker)[0];
    const cost = getLastValue(security) * amount;

    const newNoOfSecurityOwned = (account[ticker] ?? 0) + amount;

    setMoney(money - cost);
    setAccount({ ...account, [ticker]: newNoOfSecurityOwned });

    addTransaction({
      type: "BUY_MARKET",
      fulfilled: true,
      day: 0,
      ticker,
      amount,
    });
  };

  const sellMarket = (ticker: Ticker, amount: number) => {
    const security = securities.filter((sec) => sec.ticker === ticker)[0];
    const cost = getLastValue(security) * amount;

    const newNoOfSecurityOwned = (account[ticker] ?? 0) - amount;

    setMoney(money + cost);
    setAccount({ ...account, [ticker]: newNoOfSecurityOwned });

    addTransaction({
      type: "SELL_MARKET",
      fulfilled: true,
      day: 0,
      ticker,
      amount,
    });
  };

  return {
    money,
    totalEquity,
    setMoney,
    numSharesOwned,
    buyMarket,
    sellMarket,
  };
};
