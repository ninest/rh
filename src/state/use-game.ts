import { atom, useAtom } from "jotai";
import { useAccount } from "./use-account";
import { useParameters } from "./use-parameters";

import { useSecurities } from "./use-securities";

import { useTimer } from "./use-timer";

export enum GameStatus {
  NOT_STARTED,
  STARTED,
  ENDED,
}

const statusAtom = atom(GameStatus.NOT_STARTED);

export const useGame = () => {
  const { startTimer, daysLeft } = useTimer();
  const { securities, onDay, findSecurityByTicker } = useSecurities();
  const {
    money,
    totalEquity,
    setMoney,
    numSharesOwned,
    buyMarket,
    sellMarket,
  } = useAccount();
  const { parameters, setParameters, setInitialParameters } = useParameters();

  const [status, setStatus] = useAtom(statusAtom);

  const startGame = ({ days, money }: { days: number; money: number }) => {
    setStatus(GameStatus.STARTED);
    setInitialParameters();
    startTimer({
      days,
      onDayFn: () => {
        onDay();
      },
      onEndFn: () => setStatus(GameStatus.ENDED),
    });
    setMoney(money);

    // setInterval(() => console.log(parameters), 1000);
  };

  // console.log(parameters);

  return {
    status,
    daysLeft,
    startGame,
    money,
    totalEquity,
    securities,
    numSharesOwned,
    buyMarket,
    sellMarket,
    findSecurityByTicker,
    parameters,
  };
};
