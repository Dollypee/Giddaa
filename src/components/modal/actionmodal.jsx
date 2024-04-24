/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useRef } from "react";

const ActionModal = ({
  isOpen,
  onClose,
  child1,
  child2,
  child3
}) => {

  const modalRef = useRef(null);
  return (

    <>
      {isOpen && (
        <div className="fixed inset-0 right-3 z-50" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-10 "></div>
          <div className="relative">
            <div ref={modalRef} className="bg-white py-3 rounded-lg z-10 absolute right-9 top-[30rem] shadow-xl">
              {child1}
              {child2 && child2}
              {child3 && child3}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ActionModal;
