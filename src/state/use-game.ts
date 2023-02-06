import { atom, useAtom } from "jotai";
import { nextValue, PAPL } from "../securities/stock";

import { useTimer } from "./use-timer";

export enum GameStatus {
  NOT_STARTED,
  STARTED,
  ENDED,
}

const statusAtom = atom(GameStatus.NOT_STARTED);
const moneyAtom = atom(0);
const stocksAtom = atom([PAPL]);

export const useGame = () => {
  const { startTimer } = useTimer();
  const [status, setStatus] = useAtom(statusAtom);
  const [money, setMoney] = useAtom(moneyAtom);
  const [stocks, setStocks] = useAtom(stocksAtom);

  const startGame = ({ days, money }: { days: number; money: number }) => {
    setStatus(GameStatus.STARTED);
    startTimer({
      days,
      onDayFn: () => {
        setStocks((stocks) => stocks.map(nextValue));
      },
      onEndFn: () => setStatus(GameStatus.ENDED),
    });
    setMoney(money);
  };

  return { status, startGame, money, stocks };
};
