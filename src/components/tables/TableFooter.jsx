/* eslint-disable react/prop-types */

export function TableFooter({empty=false, loading=false, pageNumber=1, totalPages=1, prevOnClick, nextOnClick, thereIsPreviousPage, thereIsNextPage}) {
  return (
    <>
      {!empty && !loading?
        <div className="flex justify-between items-center py-3 px-9 bg-white rounded-b-md shadow-lg">
          <div className="flex">
            <span className="giddaa-heading-five giddaa-dark-grey-2">{`Page: ${pageNumber} of `}{totalPages>0?totalPages:1}</span>
          </div>
          <div className="flex space-x-4">

            {thereIsPreviousPage && <button 
              className="giddaa-heading-five w-full py-2 px-4 flex justify-center items-center text-center giddaa-primary rounded-sm" 
              onClick={prevOnClick}>
              Prev
            </button>}

            {thereIsNextPage && <button 
              className="giddaa-heading-five w-full py-2 px-4 flex justify-center items-center text-center giddaa-primary rounded-sm" 
              onClick={nextOnClick}>
              Next
            </button>}

          </div>
        </div>
      :null}
    </>
  )
}