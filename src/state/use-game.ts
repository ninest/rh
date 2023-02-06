import { atom, useAtom } from "jotai";
import { useTimer } from "./use-timer";

export enum GameStatus {
  NOT_STARTED,
  STARTED,
  ENDED,
}

const statusAtom = atom(GameStatus.NOT_STARTED);
const moneyAtom = atom(0);

export const useGame = () => {
  const { startTimer } = useTimer();
  const [status, setStatus] = useAtom(statusAtom);
  const [money, setMoney] = useAtom(moneyAtom);

  const startGame = ({ days, money }: { days: number; money: number }) => {
    setStatus(GameStatus.STARTED);
    // Default 90 days
    startTimer(days, () => setStatus(GameStatus.ENDED));
    setMoney(money);
  };

  return { status, startGame,money };
};
