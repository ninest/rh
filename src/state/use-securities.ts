import { atom, useAtom } from "jotai";
import { allCrypto } from "../securities/crypto";
import { withNextValue } from "../securities/functions";
import { allStocks } from "../securities/stocks";

export const securitiesAtom = atom([...allCrypto, ...allStocks]);

export const useSecurities = () => {
  const [securities, setSecurities] = useAtom(securitiesAtom);

  const findSecurityByTicker = (ticker: string) => {
    return securities.find((sec) => sec.ticker === ticker);
  };

  const onDay = () => {
    setSecurities((stocks) => stocks.map(withNextValue));
  };

  return {
    securities,
    onDay,
    findSecurityByTicker
  };
};
