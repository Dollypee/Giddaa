import PropTypes from 'prop-types'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { decimalToPercentage, formatAmount } from '../../../components/helpers/helper';
import { MdDataUsage } from 'react-icons/md';


const TransactionSummary = ({ transactionSummary, isLoading }) => {
  return (
    <div>
      <div>
        <h3 className='capitalize  giddaa-normal-text-one giddaa-text-dark-grey mt-3'>Earnings Breakdown</h3>
        <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between'>
          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>N{formatAmount(transactionSummary?.expectedEarnings)}</span>
                  <span className='giddaa-normal-text-three'>Expected Earnings</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>N{formatAmount(transactionSummary?.totalEarned)}</span>
                  <span className='giddaa-normal-text-three'>Total Earned</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>N{formatAmount(transactionSummary?.leftToEarn)}</span>
                  <span className='giddaa-normal-text-three'>Left To Earn</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>N{formatAmount(transactionSummary?.averageAmountEarned)}</span>
                  <span className='giddaa-normal-text-three'>Average Amount Earned</span>
                </>
              )
            }

          </div>

        </div>
      </div>

      <div className='mt-1'>
        <h3 className='capitalize  giddaa-normal-text-one giddaa-text-dark-grey mt-3'>Frequency Breakdown</h3>
        <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between'>
          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>{(transactionSummary?.expectedNumberOfTransactions)}</span>
                  <span className='giddaa-normal-text-three'>Expected Number of Transactions</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>{(transactionSummary?.totalTransactions)}</span>
                  <span className='giddaa-normal-text-three'>Total Transactions</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>{(transactionSummary?.numberOfTransactionsLeft)}</span>
                  <span className='giddaa-normal-text-three'>Number of Transactions Left</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>{(transactionSummary?.averageMonthlyTransactions)}</span>
                  <span className='giddaa-normal-text-three'>Average No of Transaction/ Month</span>
                </>
              )
            }

          </div>

        </div>
      </div>

      <div className='mt-1'>
        <h3 className='capitalize  giddaa-normal-text-one giddaa-text-dark-grey mt-3'>Default Breakdown</h3>
        <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between'>
          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>{(transactionSummary?.totalMissedTransactions)}</span>
                  <span className='giddaa-normal-text-three'>Missed Payments</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <span className='giddaa-heading-one'>{decimalToPercentage(transactionSummary?.transactionDefaultRate)}</span>
                  <span className='giddaa-normal-text-three'>Transaction Default Rate</span>
                </>
              )
            }

          </div>

          <div className={`shadow-md border-2 border-[#F0F0F0] p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isLoading && 'items-center justify-center'}`}>
            {
              isLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
                <>
                  <span className='flex justify-end'>
                    <AiOutlineInfoCircle />
                  </span>
                  <div className='giddaa-heading-one'><span className='text-[#C11111]'>{(transactionSummary?.totalApplicationsWithMissedTransactions)}</span> of <span>{ transactionSummary?.totalApplicationsInTransactions}</span></div>
                  <span className='giddaa-normal-text-three'>Customers who’ve missed payment</span>
                </>
              )
            }

          </div>

        </div>
      </div>
    </div>
  )
}

export default TransactionSummary

TransactionSummary.propTypes = {
  transactionSummary: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}
