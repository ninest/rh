import { atom, useAtom } from "jotai";
import { useAccount } from "./use-account";
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
  const { securities, onDay } = useSecurities();
  const { money, setMoney } = useAccount();

  const [status, setStatus] = useAtom(statusAtom);

  const startGame = ({ days, money }: { days: number; money: number }) => {
    setStatus(GameStatus.STARTED);
    startTimer({
      days,
      onDayFn: onDay,
      onEndFn: () => setStatus(GameStatus.ENDED),
    });
    setMoney(money);
  };

  return { status, daysLeft, startGame, money, securities };
};
