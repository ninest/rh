import { atom, useAtom } from "jotai";

const daysLeftAtom = atom(0);

export const useTimer = () => {
  const [daysLeft, setDaysLeft] = useAtom(daysLeftAtom);

  const startTimer = (days: number, onEndFn: () => void) => {
    setDaysLeft(days);

    const interval = setInterval(() => {
      // setX does not immediately update X's value!
      setDaysLeft((daysLeft) => {
        if (daysLeft <= 0) {
          clearInterval(interval);
          onEndFn();
        }
        return daysLeft - 1;
      });
    }, 1000);
  };

  return { daysLeft, startTimer };
};
