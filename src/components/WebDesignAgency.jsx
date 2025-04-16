import React from 'react'
import slide1 from "../assets/slide1.svg"
import slide2 from "../assets/slide2.webp"
import slide3 from "../assets/slide3.svg"
import slide4 from "../assets/slide4.webp"
import slide5 from "../assets/slide5.svg"

import Button from './shared/Button'

const WebDesignAgency = () => {
  return (
    <div className='bg-[#1B2C5C] py-12'>
        {/* top header */}
     <div className="px-16">
     <div className="container text-white">
        <h4 className='text-center font-bold uppercase text-xl'>Clients Across Industries</h4>
        <h4 className='text-center font-bold text-4xl mt-2'>Full-Service Web Design Agency</h4>
        <p className='text-center font-medium text-lg mt-2  '>
        From startups to Fortune 500 companies,
        <p className='text-2xl font-semibold'>we create custom solutions that grow brands online   </p>
        </p>
      </div>
     </div>
      {/* marquee top  */}
      <div className="mt-14 overflow-hidden">
 
    <div  className="flex animate-marquee gap-8"
        style={{
          animation: 'marquee 20s linear infinite',
        }}>
      {[...Array(2)].flatMap((_, index) => [
        <div key={`buddha-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
          <img src={slide1} alt="" className="w-60 mx-auto h-24" />
          <h3 className="text-center capitalize text-[#ffffff70]">Buddha brands</h3>
        </div>,
        <div key={`paul-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
          <img src={slide2} alt="" className="w-60 mx-auto h-24" />
          <h3 className="text-center capitalize text-[#ffffff70]">Paul stuart</h3>
        </div>,
        <div key={`spar-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
          <img src={slide3} alt="" className="w-60 mx-auto h-24" />
          <h3 className="text-center capitalize text-[#ffffff70]">Spar bernstein</h3>
        </div>,
          <div key={`spar-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
          <img src={slide4} alt="" className="w-60 mx-auto h-24" />
          <h3 className="text-center capitalize text-[#ffffff70]">babies rus</h3>
        </div>,
          <div key={`spar-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
          <img src={slide5} alt="" className="w-60 mx-auto h-24" />
          <h3 className="text-center capitalize text-[#ffffff70]">rollnik</h3>
        </div>,
      ])}
    </div>
 
</div>
 {/* marquee bottom  */}
 <div className="mt-10 overflow-hidden">
 
 <div  className="flex animate-marquee-two gap-8"
     style={{
       animation: 'marquee2 20s linear infinite',
     }}>
   {[...Array(2)].flatMap((_, index) => [
     <div key={`buddha-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
       <img src={slide1} alt="" className="w-60 mx-auto h-24" />
       <h3 className="text-center capitalize text-[#ffffff70]">Buddha brands</h3>
     </div>,
     <div key={`paul-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
       <img src={slide2} alt="" className="w-60 mx-auto h-24" />
       <h3 className="text-center capitalize text-[#ffffff70]">Paul stuart</h3>
     </div>,
     <div key={`spar-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
       <img src={slide3} alt="" className="w-60 mx-auto h-24" />
       <h3 className="text-center capitalize text-[#ffffff70]">Spar bernstein</h3>
     </div>,
       <div key={`spar-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
       <img src={slide4} alt="" className="w-60 mx-auto h-24" />
       <h3 className="text-center capitalize text-[#ffffff70]">babies rus</h3>
     </div>,
       <div key={`spar-${index}`} className="border shrink-0 w-[300px] bg-[#ffffff09] flex flex-col gap-4 p-4 border-[#ffffff20] h-40">
       <img src={slide5} alt="" className="w-60 mx-auto h-24" />
       <h3 className="text-center capitalize text-[#ffffff70]">rollnik</h3>
     </div>,
   ])}
 </div>
 <div className="flex items-center justify-center mt-10 pb-2">
<Button text={"Explore All Services"}/>
 </div>

</div>

      {/* Custom keyframes for smooth infinite scroll */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
         {`
          @keyframes marquee2 {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>

    </div>
  )
}

export default WebDesignAgency
