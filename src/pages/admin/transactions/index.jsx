import { useEffect } from "react";
import Tabs from "../../../components/tab/Tab"
import { useGetTransactionsSummaryMutation } from "../../../redux/services/transaction.api";
import { useDispatch } from "react-redux";
import { getTransactionSummary } from "../../../redux/features/Transactions.slice";
import TransactionSummary from "./TransactionSummary";
import SuccessfulTransactions from "./SuccessfulTransactions";
import ExpectedTransactions from "./ExpectedTransactions";
import DefaultTransactions from "./DefaultTransactions";

const Transactions = () => {

  const dispatch = useDispatch();
  const labels = ["SUMMARY", "SUCCESSFUL TRANSACTIONS", "EXPECTED TRANSACTIONS", "DEFAULTS"];

  const [ getSummary, {data: transactionSummary, isLoading: istransactionSummaryLoading, isSuccess: istransactionSummarySuccess }] = useGetTransactionsSummaryMutation()

  useEffect(() => {
    const fetchSummary = async () => {
      await getSummary()
    }
    fetchSummary()
  }, [getSummary])

  useEffect(() => {
    if (istransactionSummarySuccess) {
      dispatch(getTransactionSummary(transactionSummary?.value))
    }
  }, [istransactionSummarySuccess, transactionSummary, dispatch])

  const contents = [
    <div key={'Summary'}>
      <TransactionSummary transactionSummary={transactionSummary?.value} isLoading={istransactionSummaryLoading} />
    </div>,
    <div key={'Successful'}><SuccessfulTransactions /></div>,
    <div key={'Expected'}><ExpectedTransactions /></div>,
    <div key={'Defaults'}><DefaultTransactions transactionSummary={transactionSummary?.value} isLoading={istransactionSummaryLoading} /></div>

  ]

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <h1 className="giddaa-heading-one-millik">Transactions & Earnings</h1>
        <p className="giddaa-dark-grey-2 giddaa-normal-text-three font-bold">View all your transactions and how much you have earned from customers</p>
      </div>
      <div className="mt-4">

        <div className="w-full lg:w-[95%] ">
          <Tabs labels={labels} contents={contents} />
        </div>
      </div>
    </div>
  )
}

export default Transactions