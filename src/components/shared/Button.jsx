import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";

const Button = ({text,className}) => {
  return (
   <div className=' w-fit shadow-[0_0_5px_1px_#009cff] '>
     <button className={`relative cursor-pointer   py-3 px-6 text-center text-xl tracking-wide text-[#3B7BCE] bg-white  transition-all duration-1000 ease-out hover:text-white hover:shadow-[inset_0_-100px_0_0_#725AC1] active:scale-90 uppercase flex items-center gap-1 font-bold ${className}`}>
      {text} <IoMdArrowDropright size={30} />
    </button>
   </div>
  );
};

export default Button;
