import { atom, useAtom } from "jotai";
import { allStocks, nextValue } from "../securities/stock";

const moneyAtom = atom(0);
const stocksAtom = atom(allStocks);

export const useSecurities = () => {
  const [money, setMoney] = useAtom(moneyAtom);
  const [stocks, setStocks] = useAtom(stocksAtom);

  const onDay = () => {
    setStocks((stocks) => stocks.map(nextValue));
  };

  return {
    money,
    setMoney,
    stocks,
    onDay,
  };
};
