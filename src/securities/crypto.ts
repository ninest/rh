import { Security } from "./types";

export const BUT: Security = {
  type: "CRYPTO",
  ticker: "BUT",
  name: "Butcoin",
  startingValue: 100,
  values: [],
  industries: [],
};
export const DOG: Security = {
  type: "CRYPTO",
  ticker: "DOG",
  name: "Dogcoin",
  startingValue: 50,
  values: [],
  industries: [],
};
export const WTH: Security = {
  type: "CRYPTO",
  ticker: "WTH",
  name: "Hellium",
  startingValue: 24,
  values: [],
  industries: [],
};

export const allCrypto = [BUT, DOG, WTH];
