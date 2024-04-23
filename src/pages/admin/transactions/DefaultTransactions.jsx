/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useGetDefaultTransactionsMutation } from "../../../redux/services/transaction.api"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MdDataUsage, MdMoreVert } from "react-icons/md"
import { calculateDaysOverdue, formatAmount, formatDate, isArray, isEmpty } from "../../../components/helpers/helper"
import { TableFooter } from "../../../components/tables/TableFooter"
import ActionModal from "../../../components/modal/actionmodal"
import { MoneyIcon } from "../../../assets/icons/Icon"

const DefaultTransactions = ({ transactionSummary, isLoading }) => {

  const [getDefaultTransactions, { data: defaultTransactions, isLoading: isDefaultTransactionsLoading }] = useGetDefaultTransactionsMutation()


  const [showModal, setShowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);


  // Pagination Function And Control
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    //  setTableData(pagination(defaultTransactions?.value?.data, 10, currentPage));
    setTableData(defaultTransactions?.value?.data);
    // eslint-disable-next-line
  }, [currentPage, defaultTransactions]);


  useEffect(() => {
    const fetchDefaultTransactions = async () => {
      await getDefaultTransactions(currentPage)
    }
    fetchDefaultTransactions()
  }, [getDefaultTransactions, currentPage])

  let totalItems = defaultTransactions?.value?.data?.length;
  let totalPages = Math.ceil(totalItems / 10);
  let nextPage =
    Math.round(totalPages) >= currentPage + 1 ? currentPage + 1 : null;
  let previousPage =
    Math.round(totalPages) > currentPage - 1 ? currentPage - 1 : null;


  const handleActionClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowModal(true);
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between mt-4'>
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
                <span className='giddaa-heading-one'>N{formatAmount(transactionSummary?.averageAmountEarned)}</span>
                <span className='giddaa-normal-text-three'>Total Default Amount</span>
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
                <div className='giddaa-heading-one'><span className='text-[#C11111]'>{(transactionSummary?.totalApplicationsWithMissedTransactions)}</span> of <span>{transactionSummary?.totalApplicationsInTransactions}</span></div>
                <span className='giddaa-normal-text-three'>Customers who’ve missed payment</span>
              </>
            )
          }

        </div>

      </div>

      <h4 className="mt-6 giddaa-small-text-one giddaa-text-dark-grey">Data on payments that should have beeen made but weren’t and the customers who should have paid</h4>
      <div className="mt-1 relative overflow-x-auto shadow-md rounded-lg no-scrollbar">
        <table className="w-full text-sm text-left p-3 no-scrollbar">
          <thead className="giddaa-small-text-one text-black uppercase giddaa-bg-light-grey">
            <tr className='border-b py-3'>

              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                CUSTOMER
              </th>
              <th scope="col" className="px-6 py-3">
                AMOUNT
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>

              <th scope="col" className="px-6 py-3">
                PROPERTY
              </th>
              <th scope="col" className="px-6 py-3">
                PLAN
              </th>
              <th scope="col" className="px-6 py-3">
                DUE DATE
              </th>
              <th scope="col" className="px-6 py-3">
                DAYS OVERDUE
              </th>
              <th scope="col" className="px-6 py-3">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {isDefaultTransactionsLoading ? (
              <tr>
                <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="animate-pulse h-4 w-4 bg-gray-300 rounded mr-2"></div>
                    <div className="animate-pulse h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                </td>
                <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="animate-pulse h-4 w-4 bg-gray-300 rounded mr-2"></div>
                    <div className="animate-pulse h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                </td>
                <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="animate-pulse h-4 w-4 bg-gray-300 rounded mr-2"></div>
                    <div className="animate-pulse h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                </td>
                <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="animate-pulse h-4 w-4 bg-gray-300 rounded mr-2"></div>
                    <div className="animate-pulse h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                </td>
                <td colSpan="2" className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="animate-pulse h-4 w-4 bg-gray-300 rounded mr-2"></div>
                    <div className="animate-pulse h-4 w-32 bg-gray-300 rounded"></div>
                  </div>
                </td>
              </tr>
            ) : (
              isArray(tableData) && tableData?.map((transaction, i) => (
                <tr className="bg-white border-b" key={i}>

                  <td scope="row" className="flex items-center px-6 py-4 whitespace-nowrap">
                    <div className='flex space-x-3 items-center'>
                      {(currentPage - 1) * 10 + i + 1}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-base font-semibold">
                      {transaction.customer.firstName + " "}
                      {transaction.customer.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span>{formatAmount(transaction?.amount)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {transaction?.transactionType}

                  </td>
                  <td className="px-6 py-4">
                    <div>
                      {(transaction?.house?.name ?? '') + " " + transaction?.house?.cityName + " " + transaction?.house?.stateName}
                    </div>

                  </td>
                  <td className="px-6 py-4">
                    {transaction?.mortgagePlan?.name}
                  </td>
                  <td className="px-6 py-4">
                    {formatDate(transaction?.dueDate)}
                  </td>
                  <td className="px-6 py-4">
                    {calculateDaysOverdue(transaction?.dueDate)} Days
                  </td>
                  <td className="px-6 py-4">
                    <MdMoreVert className='cursor-pointer' onClick={() => {
                      handleActionClick(transaction)
                    }} />
                  </td>
                </tr>
              ))
            )}

          </tbody>
        </table>
        <ActionModal
          isOpen={showModal} onClose={() => setShowModal(false)}
          rowData={selectedRowData}
          child1={<div
            className="py-2 rounded hover:text-primary flex cursor-pointer"
            onClick={() => { setShowModal(false) }}
          >
            <MoneyIcon /> <span>View Repayment Schedule</span>
          </div>}

        />
        <div className="mt-3">
          <TableFooter
            empty={isEmpty(tableData)}
            loading={isDefaultTransactionsLoading}
            pageNumber={currentPage}
            totalPages={totalPages}
            prevOnClick={() => setCurrentPage(previousPage)}
            nextOnClick={() => setCurrentPage(nextPage)}
            thereIsPreviousPage={previousPage !== null && previousPage !== 0}
            thereIsNextPage={nextPage !== null}
          />
        </div>


      </div>

    </div>
  )
}

export default DefaultTransactions