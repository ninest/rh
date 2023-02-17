import { atom, useAtom } from "jotai";
import { allCrypto } from "../securities/crypto";
import { withNextValue } from "../securities/functions";
import { allStocks } from "../securities/stocks";
import { useParameters } from "./use-parameters";

export const securitiesAtom = atom([...allCrypto, ...allStocks]);

export const useSecurities = () => {
  const [securities, setSecurities] = useAtom(securitiesAtom);
  const { setParameters } = useParameters();

  const findSecurityByTicker = (ticker: string) => {
    return securities.find((sec) => sec.ticker === ticker);
  };

  const onDay = () => {
    // Super hacky way to get value of parameters in a function passed to interval
    let parameters: any;
    setParameters((p) => {
      parameters = p;
      return p;
    });

    setSecurities((sec) => sec.map((sec) => withNextValue(sec, parameters)));
  };

  // console.log(parameters);

  return {
    securities,
    onDay,
    findSecurityByTicker,
  };
};
