import { atom, useAtom } from "jotai";
import { Parameters } from "../types";
import { randomBetween2dp } from "../utils/random.util";

const parametersAtom = atom<Parameters>({
  marketLevel: 0,
  industryLevels: {
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
    CRYPTO: 0,
  },
});

export const useParameters = () => {
  const [parameters, setParameters] = useAtom(parametersAtom);

  const setInitialParameters = () => {
    setParameters({
      marketLevel: randomBetween2dp(-0.9, 0.9),
      industryLevels: {
        ENERGY: randomBetween2dp(-0.9, 0.9),
        MATERIALS: randomBetween2dp(-0.9, 0.9),
        INDUSTRIALS: randomBetween2dp(-0.9, 0.9),
        UTILITIES: randomBetween2dp(-0.9, 0.9),
        HEALTHCARE: randomBetween2dp(-0.9, 0.9),
        FINANCIAL: randomBetween2dp(-0.9, 0.9),
        CONSUMER_DISCRETIONARY: randomBetween2dp(-0.9, 0.9),
        CONSUMER_STAPLES: randomBetween2dp(-0.9, 0.9),
        INFORMATION_TECHNOLOGY: randomBetween2dp(-0.9, 0.9),
        COMMUNICATION_SERVICES: randomBetween2dp(-0.9, 0.9),
        REAL_ESTATE: randomBetween2dp(-0.9, 0.9),
        CRYPTO: randomBetween2dp(-0.9, 0.9),
      },
    });
  };

  return { parameters, setParameters ,setInitialParameters};
};
