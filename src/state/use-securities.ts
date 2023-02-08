import { atom, useAtom } from "jotai";
import { allCrypto, allStocks, nextValue } from "../securities/stock";

const securitiesAtom = atom([...allCrypto, ...allStocks]);

export const useSecurities = () => {
  const [securities, setSecurities] = useAtom(securitiesAtom);

  const onDay = () => {
    setSecurities((stocks) => stocks.map(nextValue));
  };

  return {
    securities,
    onDay,
  };
};
