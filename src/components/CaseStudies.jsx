import React, { useState } from 'react';
import leftimg from "../assets/case1.jpg";
import Button from './shared/Button';

const caseStudiesData = [
    {
      id: 1,
      name: 'HP',
      logo: 'https://www.digitalsilk.com/wp-content/uploads/2022/07/hp-logo.svg',
      darkLogo: 'https://www.digitalsilk.com/wp-content/uploads/2022/07/bo-logo-dark.svg',
      desc: 'HP needed to implement a global rewards program.',
      stats: [
        { value: '40', suffix: 'K', title: 'active members', subtitle: 'inside the program' },
        { value: '56', suffix: '%', title: 'of customers are', subtitle: 'repeat customers' }
      ]
    },
    {
      id: 2,
      name: 'Xerox',
      logo: 'https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo.svg',
      darkLogo: 'https://www.digitalsilk.com/wp-content/uploads/2022/07/xerox-logo-dark.svg',
      desc: 'Xerox streamlined its B2B operations across regions.',
      stats: [
        { value: '25', suffix: 'K', title: 'documents processed', subtitle: 'per day' },
        { value: '70', suffix: '%', title: 'increase in', subtitle: 'productivity' }
      ]
    },
    {
      id: 3,
      name: 'doForms',
      logo: 'https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-blue.svg',
      darkLogo: 'https://www.digitalsilk.com/wp-content/uploads/2022/11/doForms-logo-blue.svg',
      desc: 'doForms built custom mobile solutions.',
      stats: [
        { value: '12', suffix: 'K', title: 'mobile users', subtitle: 'on platform' },
        { value: '88', suffix: '%', title: 'user satisfaction', subtitle: 'increased' }
      ]
    },
    {
      id: 4,
      name: 'FieldEdge',
      logo: 'https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-blue.svg',
      darkLogo: 'https://www.digitalsilk.com/wp-content/uploads/2022/11/FieldEdge-logo-blue.svg',
      desc: 'FieldEdge optimized field service management with automation.',
      stats: [
        { value: '30', suffix: '%', title: 'increase in', subtitle: 'job completion rate' },
        { value: '90', suffix: '%', title: 'technician adoption', subtitle: 'within 3 months' }
      ]
    },
    
    {
      id: 6,
      name: 'MCDS',
      logo: 'https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-blue.svg',
      darkLogo: 'https://www.digitalsilk.com/wp-content/uploads/2022/11/MCDS-logo-blue.svg',
      desc: 'MCDS launched a multi-platform education system.',
      stats: [
        { value: '5', suffix: 'M', title: 'students reached', subtitle: 'globally' },
        { value: '95', suffix: '%', title: 'satisfaction rate', subtitle: 'from institutions' }
      ]
    }
  ];
  

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = caseStudiesData[activeTab];

  return (
    <div className='bg-gradient-to-b from-blue-100 to-white flex'>
      {/* LEFT SIDE */}
      <div className="w-[35%] relative bg-black">
        <img src={leftimg} alt="" className='h-full w-full absolute top-0 opacity-50' />
        <div className="text-right mt-20 z-10 relative text-white text-6xl font-bold">
          <p>Case</p>
          <p className='-mr-4'>
            Studie
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, white 50%, #00042A 50%)' }}>
              s
            </span>
          </p>

          {/* TABS */}
          <div className="mt-20 mb-20">
            {caseStudiesData.map((tab, index) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer ml-auto py-6 border-b-4 transition-all duration-300 ${
                  index === activeTab ? 'w-60 -mr-16 border-[#04E4FF]' : 'w-44 border-white '
                }`}
              >
                <img src={tab.logo} alt={tab.name} className={` ${index===activeTab?"":"brightness-0 invert hover:brightness-100 hover:invert-0"}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 mt-20 pr-20 pl-20">
        <div className="text-right text-[#1B2C5F]">
          <p className='font-normal text-2xl'>From Concept To Market:</p>
          <p className='font-normal text-2xl'>
            We Engineer Projects For <span className='text-[#18CCFC]'>Superior Performance</span>
          </p>
        </div>

        {/* DYNAMIC CONTENT */}
        <div className="mt-20 flex gap-8 items-center relative">
          {/* Faded absolute logo */}
          <div className="">
            <img
              src={activeData.darkLogo}
              alt=""
              className="absolute w-48 -top-8 left-40 opacity-10 "
            />
          </div>
          {/* Brand logo */}
          <img src={activeData.darkLogo} alt="" className='w-20' />
          <div className='w-60 bg-[#18CCFC] p-[1px]'></div>
          <div className='flex-1 '>
            <p className='text-[#1B2C5F]'>{activeData.desc}</p>
            <p className='mt-4 text-[#1B2C5F]'><span className="font-bold">In 6 months,</span> we achieved:</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32  flex justify-between px-8">
          {activeData.stats.map((stat, idx) => (
            <div key={idx} className="grid-cols-1 ">
              <p className='text-[#18CCFC] text-9xl font-bold'>
                <span>{stat.value}</span>
                <span className='text-4xl'>{stat.suffix}</span>
              </p>
              <p className='text-[#1B2C5F] text-xl font-semibold mt-4'>{stat.title}</p>
              <p className='text-[#1B2C5F] text-xl font-semibold'>{stat.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-20 flex flex-col gap-6">
          <Button text={`Read ${activeData.name.toLowerCase()} case study`} className={""} />
          <Button text={"Start your project"} className={""} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
