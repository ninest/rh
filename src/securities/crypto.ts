import { Security } from "./types";

export const BUT: Security = {
  type: "CRYPTO",
  ticker: "BUT",
  name: "Butcoin",
  startingValue: 100,
  values: [],
};
export const DOG: Security = {
  type: "CRYPTO",
  ticker: "DOG",
  name: "Dogcoin",
  startingValue: 50,
  values: [],
};
export const WTH: Security = {
  type: "CRYPTO",
  ticker: "WTH",
  name: "Hellium",
  startingValue: 24,
  values: [],
};

export const allCrypto = [BUT, DOG, WTH];