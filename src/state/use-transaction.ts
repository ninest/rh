import { atom, useAtom } from "jotai";
import { Transaction } from "../transaction/types";

const transactionsAtom = atom<Transaction[]>([]);

export const useTransactions = () => {
  const [transactions, setTransactions] = useAtom(transactionsAtom);

  const addTransaction = (transaction: Transaction) => {
    setTransactions((transactions) => [...transactions, transaction]);
  };

  return { transactions, addTransaction };
};
