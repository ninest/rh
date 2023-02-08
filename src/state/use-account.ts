import { atom, useAtom } from "jotai";
import { Ticker } from "../securities/types";

type Account = Partial<Record<Ticker, number>>;

const moneyAtom = atom(0);
const accountAtom = atom<Account>({});

export const useAccount = () => {
  const [money, setMoney] = useAtom(moneyAtom);

  return {
    money,
    setMoney,
  };
};
