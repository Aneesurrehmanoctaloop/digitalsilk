import React, { useState } from 'react';
import sidebarbg from "../../assets/navbg1.png"
import { IoMdArrowDropright } from "react-icons/io";
import Button from './Button';

const tabsdata = [
    {
      id: 1,
      title: "Services",
      childs: [
        {
          toptitle: "View All Services",
          services: [
            "Branding",
            "Branding Services",
            "Logo Design",
            "Brand Identity",
            "Graphic Design",
            "Brand Marketing",
            "Web Design",
            "Custom Website Design",
            "Shopify Website Design",
            "WordPress Web Design",
            "Magento Web Design",
            "eCommerce Web Design",
            "Integrated Marketing Services",
            "Search Engine Optimization",
            "Social Media Marketing",
            "Consulting Services",
            "Before & After Designs"
          ]
        }
      ]
    },
    { id: 2, title: "Case Studies" },
    { id: 3, title: "Work by Industry",
        childs: [
            {
              services: [
                "Auto Repair Website Design",
                "Bank Website Design",
                "Corporate Web Design",
                "Construction Web Design",
                "Dental Web Design",
                "Family Law Attorney Website Design",
                "Financial Advisor Website Design",
                "Gym Web Design Agency",
                "Healthcare Web Design",
                "Hotel Web Design",
                "HVAC Web Design",
                "Law Firm Web Design",
                "Manufacturing Website Design",
                "Plumber Web Design",
                "Restaurant Web Design",
                "Real Estate Website Design Company",
                "Venture Capital Website Design"
              ]
            }
          ]
     },
    { id: 4, title: "Digital Trends" },
    { id: 5, title: "About" },
    { id: 6, title: "Contact" }
  ];

const Hamburger = () => {
  const [open, setOpen] = useState(false);
 
  

  return (
  <>
      
   <button onClick={() => setOpen(!open)} className=' cursor-pointer  text-white font-bold uppercase text-lg flex items-center gap-1' >
  
   <label
      className="relative z-10 cursor-pointer"
    >
      {/* Gradient Shadow */}
      <div
        className="absolute inset-0 -z-10 blur-2xl rounded-full opacity-70 pointer-events-none"
        style={{
          background:
            'linear-gradient(94deg, #009cff -2.26%, #9536e5 63.14%)',
        }}
      />

      <svg
        viewBox="0 0 32 32"
        className={`h-12 transition-transform duration-700 ease-in-out ${
          open ? '-rotate-45' : ''
        }`}
      >
        <path
          className={`line line-top-bottom stroke-white ${
            open ? 'open-top-bottom' : ''
          }`}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        />
        <path
          className="line stroke-white"
          d="M7 16 27 16"
        />
      </svg>
    </label>
    {!open && ( <>Menu</>)}
   
   </button>
   
    {open && (
       <CardANimation/>
    )}
  </>
  );
};

export default Hamburger;
const CardANimation=()=>{
    const [activeTabId, setActiveTabId] = useState(null);

    const handleTabClick = (tab) => {
      if (tab.childs) {
        // Toggle open/close
        setActiveTabId(prev => prev === tab.id ? null : tab.id);
      }
    };
    return (
        <div className="bg-[#132761] px-16 absolute top-0 bottom-0 w-full h-dvh -z-10 left-0 right-0">
        <div className="z-10 container mx-auto h-full pt-24 flex items-center justify-between gap-6 relative">
            <div className=" pl-20 ">
                <img src={sidebarbg} alt="" className='h-96 transition-all duration-700 ease-in-out  '
 style={{
    width: open ? '500px' : '800px',
    transform: `perspective(${open ? '500px' : '1000px'}) rotateY(15deg)`,
    transformOrigin: 'center',
  }} />
            </div>
            {/* tabs  */}
            <div className="flex-1 flex flex-col gap-4 h-full pt-12 overflow-auto ">
{tabsdata.map((data)=>(
   <div className="" key={data.id}>
     <div className='uppercase text-[40px] font-bold text-white flex items-center cursor-pointer hover:text-[#04E4FF]' onClick={() => handleTabClick(data)}>{data.title}
    {data.childs &&  <IoMdArrowDropright size={30} className='rotate-90' />}
    </div>
      {/* Render children if this tab is active */}
      {data.childs && activeTabId === data.id && (
                <div className=" mt-2 text-white text-lg ">
                  <div className="text-xl text-white mb-2 uppercase font-semibold">{data.childs[0].toptitle}</div>
                  <ul  className={`grid gap-2 ${
      data.title === "Work by Industry" ? "grid-cols-2" : "grid-cols-3"
    }`}>
                    {data.childs[0].services.map((service, idx) => (
                      <li key={idx} className="hover:text-[#04E4FF] text-sm cursor-pointer transition">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
   </div>
))}
<div className="py-6">
<Button text={"Request a quote"} className={"border-2 border-[#9536E5]"} />

</div>
            </div>
            {/* the bg effect  */}
            <div className="bg-[#9536E5] -z-10 shadow-[0px_0px_100px_200px_#9536E5]  absolute bottom-0 w-60 h-60 left-1/3 opacity-80 rounded-full">
            </div>
        </div>
    </div>
    )
}
