import { useSelector } from "react-redux";

export const useTransactions = () => {
  const { transactions } = useSelector((state) => state.transactions);

  return {transactions}
};