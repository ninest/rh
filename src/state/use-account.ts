import { atom, useAtom } from "jotai";

const moneyAtom = atom(0);

export const useAccount = () => {
  const [money, setMoney] = useAtom(moneyAtom);

  return {
    money,
    setMoney,
  };
};
