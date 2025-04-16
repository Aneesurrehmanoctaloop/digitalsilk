import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoMdArrowDropright } from "react-icons/io";


const tabImages = [
  "https://www.digitalsilk.com/wp-content/uploads/2023/09/Web-Design-Company-B2B-Projects-Verus-Logo-1.png.webp",
  "https://www.digitalsilk.com/wp-content/uploads/2023/09/Ventura-Foods.png.webp",
  "https://www.digitalsilk.com/wp-content/uploads/2023/09/AUBG.png.webp",
  "https://www.digitalsilk.com/wp-content/uploads/2023/09/Powr.png.webp",
  "https://www.digitalsilk.com/wp-content/uploads/2023/09/New-Church.png.webp"
];
const largeImages = [
    "https://www.digitalsilk.com/wp-content/uploads/2022/11/Web-design-company-custom-website-Ventura-Foods.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/11/Website-redesign-AUBG.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/11/Web-design-company-custom-website-New-Church-Live.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/11/Web-design-company-custom-website-Powr2.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/Web-design-company-custom-website-Verus.png.webp"
  ];

const FeaturedWebsites = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [expanded, setExpanded] = useState(false);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setExpanded(false); // reset to collapsed when tab changes
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % tabImages.length);
    setExpanded(false);
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + tabImages.length) % tabImages.length);
    setExpanded(false);
  };

  return (
    <div className="px-16 py-12">
      <div className="container">
        <h3 className='uppercase font-bold text-xl text-[#18CCFC] text-center'>Before & After</h3>
        <h2 className='text-4xl font-bold text-center text-[#1B2C5F] mt-2'>Featured Website Redesigns</h2>
        <p className='text-center text-lg mt-2 text-[#5F6568]'>Our web design agency reimagines digital experiences for brands of all sizes and across industries.</p>
        <p className='text-center text-2xl font-bold mt-2 text-[#5F6568]'>Explore our redesign portfolio.</p>
      </div>

      <div className="mt-14">
        <div className="flex  justify-center border-b border-gray-300 ">
          {tabImages.map((img, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`relative cursor-pointer   px-6 py-4  ${activeIndex === index ? 'border-b-6 border-[#90C404]' : 'border-x border-gray-300'}`}
            >
              <img src={img} alt={`tab-${index}`} className="w-40 h-20 object-contain" />
              {activeIndex === index && (
                <IoMdArrowDropright size={40} className="absolute bottom-[-30px] left-[45%] rotate-90 text-[#90C404] " />
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 mb-16 flex items-center justify-center gap-4 text-[#90C404]">
            <span className='uppercase font-bold text-lg'>Before</span>
            <span  className=' -mt-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="33" viewBox="0 0 78 33" fill="none">
<path d="M0.431065 24.8783C0.431065 24.8783 9.18396 13.8405 26.9263 17.1095C26.9263 17.1095 35.8731 18.7369 45.1643 24.0844L41.2862 31.01C41.2062 31.1531 41.1654 31.3147 41.1677 31.4786C41.1701 31.6425 41.2155 31.8029 41.2995 31.9438C41.3835 32.0846 41.5031 32.2008 41.6463 32.2808C41.7894 32.3608 41.9511 32.4018 42.115 32.3996L59.493 32.1755L76.8734 31.9542C77.0376 31.9521 77.1984 31.9068 77.3395 31.8229C77.4807 31.739 77.5972 31.6194 77.6774 31.4762C77.7576 31.333 77.7986 31.1711 77.7964 31.007C77.7942 30.8428 77.7488 30.6821 77.6647 30.541L68.7689 15.6101L59.8779 0.677859C59.7946 0.536387 59.6755 0.419386 59.5325 0.338703C59.3895 0.25802 59.2278 0.216519 59.0636 0.218394C58.8995 0.220267 58.7388 0.265453 58.5978 0.349377C58.4568 0.433304 58.3404 0.552987 58.2606 0.696322L53.868 8.54074C40.7346 0.614263 28.9945 3.46496 28.9945 3.46496C11.6267 6.16114 0.431065 24.8783 0.431065 24.8783Z" fill="#90C404"></path>
</svg>
</span>
            <span className='uppercase font-bold text-lg'>after</span>
        </div>

        <div className="relative mt-12 flex items-center justify-center ">
          <button onClick={handlePrev} className="absolute rotate-180 left-0 cursor-pointer text-[#18CCFC] ">
            <IoMdArrowDropright size={50}  />
          </button>

        <div className={`overflow-hidden mb-10  transition-all duration-500 ease-in-out ${expanded ? 'h-auto' : 'h-[600px]'}`}>
        <img src={largeImages[activeIndex]} alt="active-tab" className="w-full max-w-4xl object-center shadow-xl rounded-xl" />
        </div>
        {!expanded && (
            <div className="absolute bottom-[-20px]">
              <button
                className="mt-10 text-xl flex items-center gap-1  uppercase cursor-pointer text-[#18CCFC] font-semibold  hover:text-[#0aabdd]"
                onClick={() => setExpanded(true)}
              >
            Click here to view more 
            <IoMdArrowDropright size={30} className='rotate-90'  />

              </button>
            </div>
          )}

          {expanded && (
            <div className="absolute bottom-[-20px]">
              <button
                className="mt-10  flex items-center gap-1 uppercase text-xl cursor-pointer text-[#90C404] font-semibold  hover:text-[#74a103]"
                onClick={() => setExpanded(false)}
              >
                Hide 
            <IoMdArrowDropright size={30} className='rotate-270'  />

              </button>
            </div>
          )}

          <button onClick={handleNext} className="absolute right-0 cursor-pointer text-[#18CCFC] ">
            <IoMdArrowDropright size={50}  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWebsites;
