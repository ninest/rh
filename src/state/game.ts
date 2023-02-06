import { atom, useAtom } from "jotai";
import { useTimer } from "./timer";

export enum GameStatus {
  NOT_STARTED,
  STARTED,
  ENDED,
}

const statusAtom = atom(GameStatus.NOT_STARTED);

export const useGame = () => {
  const { startTimer } = useTimer();
  const [status, setStatus] = useAtom(statusAtom);

  const startGame = () => {
    setStatus(GameStatus.STARTED);
    // Default 90 days
    startTimer(3, () => setStatus(GameStatus.ENDED));
  };

  return { status,startGame };
};
