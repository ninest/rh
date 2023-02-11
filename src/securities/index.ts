import { allCrypto } from "./crypto";
import { allStocks } from "./stocks";

export const allSecurities = [...allStocks, ...allCrypto];
