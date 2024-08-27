import React from "react";
import { CloseIcon } from "../../../public/Icons";
import Flex from "../Flex";

export default ({ children, onClose, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={` absolute bg-black bg-opacity-15 z-40 inset-0 `}></div>
      )}
      <div
        className={` absolute bg-black bg-opacity-30 z-40 h-full w-full  top-0 right-0 transform transition-transform duration-700 ease-in-out delay-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={` absolute bg-black bg-opacity-45 z-40 h-full w-full  top-0 right-0 transform transition-transform duration-700 ease-in-out delay-700 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
       
        <div

        
          className={` absolute bg-black bg-opacity-60 z-40 h-full w-full  top-0 right-0 transform transition-transform duration-[1200ms] ease-in-out delay-1000 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Flex className="w-full h-full"
          onClick={onClose}>
          <CloseIcon className="text-white fixed top-20 left-[90%] text-3xl cursor-pointer" />
          
          </Flex> 
          {children}
        </div>
    </>
  );
};


