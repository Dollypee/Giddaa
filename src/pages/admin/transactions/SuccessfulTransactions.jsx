import { useEffect, useState } from "react"
import { useGetSuccessfulTransactionsMutation } from "../../../redux/services/transaction.api"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { MdDataUsage, MdMoreVert } from "react-icons/md"
import { formatAmount, formatDate, isArray, isEmpty } from "../../../components/helpers/helper"
import { TableFooter } from "../../../components/tables/TableFooter"
import ActionModal from "../../../components/modal/actionmodal"

const SuccessfulTransactions = () => {

  const [getSuccessTransactions, { data: successTransactions, isLoading: isSuccessTransactionsLoading }] = useGetSuccessfulTransactionsMutation()


  const [showModal, setShowModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);


  // Pagination Function And Control
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    //  setTableData(pagination(successTransactions?.value?.data, 10, currentPage));
    setTableData(successTransactions?.value?.data);
    // eslint-disable-next-line
  }, [currentPage, successTransactions]);


  useEffect(() => {
    const fetchSuccessfulTransactions = async () => {
      await getSuccessTransactions(currentPage)
    }
    fetchSuccessfulTransactions()
  }, [getSuccessTransactions, currentPage])

  let totalItems = successTransactions?.value?.totalRecords;
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
      <div className={`shadow-md border-2 border-[#F0F0F0] mt-4 p-4 flex flex-col space-y-1 text-center min-h-[141px] min-w-[250px] md:w-[48%] xl:w-[23%] ${isSuccessTransactionsLoading && 'items-center justify-center'}`}>
        {
          isSuccessTransactionsLoading ? (<MdDataUsage className='animate-spin w-10 h-10' />) : (
            <>
              <span className='flex justify-end'>
                <AiOutlineInfoCircle />
              </span>
              <span className='giddaa-heading-one'>{(successTransactions?.value?.totalRecords)}</span>
              <span className='giddaa-normal-text-three'>Successful Transactions</span>
            </>
          )
        }

      </div>

      <h4 className="mt-6 giddaa-small-text-one giddaa-text-dark-grey">Successful Transactions Made by customers in your organisation</h4>
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
                TOTAL PAID
              </th>
              <th scope="col" className="px-6 py-3">
                YOUR EARNINGS
              </th>
              <th scope="col" className="px-6 py-3">
                GIDDAA
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
                PAYMENT DATE
              </th>
              <th scope="col" className="px-6 py-3">

              </th>
            </tr>
          </thead>
          <tbody>
            {isSuccessTransactionsLoading ? (
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
                      {transaction?.rrr}
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
                      <span>N{formatAmount(transaction?.amount)}</span>
                      <span className="giddaa-primary">(100%)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span>N{formatAmount(transaction?.organizationAmount)}</span>
                      <span className="giddaa-primary">(97%)</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span>N{formatAmount(transaction?.giddaaAmount)}</span>
                      <span className="giddaa-primary">(3%)</span>
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
                    {formatDate(transaction?.dateOfPayment)}
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
            className="py-2 text-center rounded hover:text-primary border-b cursor-pointer"
            onClick={() => { setShowModal(false) }}
          >
            View Receipt
          </div>}
          child2={<div
            className="p-2 rounded hover:text-primary cursor-pointer"
            onClick={() => { setShowModal(false) }}
          >
            Download Receipt
          </div>}
        />
        <div className="mt-3">
          <TableFooter
            empty={isEmpty(tableData)}
            loading={isSuccessTransactionsLoading}
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

export default SuccessfulTransactions