import { atom, useAtom } from "jotai";
import { allCrypto, allStocks, withNextValue } from "../securities/stock";

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
