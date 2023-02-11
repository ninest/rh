import { allSecurities } from ".";
import { round } from "../utils/number.utils";
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
      const newValue = round(lastValue * 1.01);
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
