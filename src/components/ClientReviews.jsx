import React, { useState } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import review from "../assets/review1.png"


const reviews = [
  {
    id: 1,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/07/smart-solutions.svg',
    title:"Ted Elfethrious,PGA",

    short: 'Amazing service and quality!',
    full: 'They delivered our project ahead of schedule and exceeded our expectations.',
  },
  {
    id: 2,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/07/benigro.svg',
    title:"Ivana Kljaic-Peric",
    short: 'Great experience overall.',
    full: 'The team was responsive, skilled, and easy to work with.',
  },
  {
    id: 3,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg',
    title:"Holly Rolder",

    short: 'Highly recommend them!',
    full: 'Top-notch developers with professional communication throughout.',
  },
  {
    id: 4,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg',
    title:"Stephen Drisgner",

    short: 'Very satisfied with the results.',
    full: 'They understood our vision perfectly and implemented it beautifully.',
  },
  {
    id: 5,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/07/benigro.svg',
    title:"Nora COllins",

    short: 'Excellent partnership.',
    full: 'A trustworthy team that delivers consistent value.',
  },
  {
    id: 6,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/07/smart-solutions.svg',
    title:"Ted Elfethrious,PGA",

    short: 'Amazing service and quality!',
    full: 'They delivered our project ahead of schedule and exceeded our expectations.',
  },
  {
    id: 7,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/07/smart-solutions.svg',
    title:"Ted Elfethrious,PGA",

    short: 'Amazing service and quality!',
    full: 'They delivered our project ahead of schedule and exceeded our expectations.',
  },
  {
    id: 8,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg',
    title:"Stephen Drisgner",

    short: 'Very satisfied with the results.',
    full: 'They understood our vision perfectly and implemented it beautifully.',
  },
  {
    id: 9,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg',
    title:"Stephen Drisgner",

    short: 'Very satisfied with the results.',
    full: 'They understood our vision perfectly and implemented it beautifully.',
  },
  {
    id: 10,
    logo: 'https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg',
    title:"Stephen Drisgner",

    short: 'Very satisfied with the results.',
    full: 'They understood our vision perfectly and implemented it beautifully.',
  },
];

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleUp = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  
  const handleDown = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const getDisplayReviews = () => {
    const start = Math.max(0, activeIndex - 1);
    return reviews.slice(start, start + 3);
  };

  return (
    <div className="bg-[#00042A] px-16 py-12 text-white">
      <div className="container mx-auto flex gap-6 items-center relative">
        {/* Left Review Column */}
        <div className="flex-1 flex flex-col gap-4">
          {getDisplayReviews().map((review,) => (
            <div
              key={review.id}
              className={`flex items-center gap-4 p-8  transition-all duration-300 ease-in-out ${
                activeIndex === review.id - 1
                  ? 'bg-[#0693e3] h-44 shadow-[0px_0px_30px_#9536E5] '
                  : ' opacity-70'
              }`}
            >
              <img src={review.logo} alt="logo" className="w-32 " />
<div className="">
<p className="text-xl font-semibold">{review.title}</p>
<p className="text-lg">{review.short}</p>

    </div>           
 </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-col gap-0 text-[#18CCFC]">
          <button
            onClick={handleUp}
            className="rotate-270 cursor-pointer"
          >
            <IoMdArrowDropright size={40} />
          </button>
          <button
            onClick={handleDown}
            className="rotate-90  cursor-pointer"
          >
            <IoMdArrowDropright size={40} />
          </button>
        </div>

        {/* Right Description Panel */}
        <div className="flex-1   transition-all duration-300 ease-in-out  relative">
          <h3 className="text-xl font-semibold mb-2 text-[#18CCFC] uppercase">What our client love about our work</h3>
          <p className="text-2xl font-semibold ">{reviews[activeIndex].full}</p>
         
         
        </div>
        {/* teh right bnottom review bar  */}
        <div className="  absolute right-0 bottom-10 w-1/2 px-12 flex items-center gap-4">
        <img src={review} alt="" className='w-40' />
            <button className='flex items-center gap-1 text-xl font-semibold uppercase text-[#18CCFC]'>View Client Reviews
            <IoMdArrowDropright size={30} />

                  </button>
        </div>

      </div>
    </div>
  );
};

export default ClientReviews;
