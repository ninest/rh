import { atom, useAtom } from "jotai";
import { allCrypto } from "../securities/crypto";
import { withNextValue } from "../securities/functions";
import { allStocks } from "../securities/stocks";

const securitiesAtom = atom([...allCrypto, ...allStocks]);

export const useSecurities = () => {
  const [securities, setSecurities] = useAtom(securitiesAtom);

  const onDay = () => {
    setSecurities((stocks) => stocks.map(withNextValue));
  };

  return {
    securities,
    onDay,
  };
};
