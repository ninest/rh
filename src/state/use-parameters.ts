import { atom, useAtom } from "jotai";
import { Parameters } from "../types";

export const parametersAtom = atom<Parameters>({
  currentMarketLevel: 0,
  currentIndustryLevels: {
    ENERGY: 0,
    MATERIALS: 0,
    INDUSTRIALS: 0,
    UTILITIES: 0,
    HEALTHCARE: 0,
    FINANCIAL: 0,
    CONSUMER_DISCRETIONARY: 0,
    CONSUMER_STAPLES: 0,
    INFORMATION_TECHNOLOGY: 0,
    COMMUNICATION_SERVICES: 0,
    REAL_ESTATE: 0,
  },
});

export const useParameters = () => {
  const [parameters, setParameters] = useAtom(parametersAtom);

  return parameters;
};
