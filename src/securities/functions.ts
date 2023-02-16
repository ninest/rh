import { allSecurities } from ".";
import { randomBool, round } from "../utils/number.utils";
import { randomBetween } from "../utils/random.util";
import { Security } from "./types";

// Get most recent value of security
export const getLastValue = (security: Security): number => {
  return round(security.values.at(-1) || security.startingValue);
};

// Add a new value to a security
export const withNextValue = (security: Security): Security => {
  switch (security.ticker) {
    case "BUT": {
      const lastValue = getLastValue(security);

      const randBool = randomBool();
      const newValue = Math.max(
        round(lastValue * (randBool ? 1.01 : 0.99)) + randomBetween(-50, 50),
        0
      );

      return {
        ...security,
        values: [...security.values, newValue],
      };
    }
    case "DOG": {
      const lastValue = getLastValue(security);
      return {
        ...security,
        values: [...security.values, lastValue + 20],
      };
    }
    case "WTH": {
      const lastValue = getLastValue(security);
      return {
        ...security,
        values: [...security.values, lastValue + 5],
      };
    }
    case "PAPL": {
      const lastValue = getLastValue(security);
      return {
        ...security,
        values: [...security.values, lastValue + 1],
      };
    }
    case "POOG": {
      const lastValue = getLastValue(security);
      return {
        ...security,
        values: [...security.values, lastValue + 2],
      };
    }
  }
  throw Error("Stock next value not implemented");
};
