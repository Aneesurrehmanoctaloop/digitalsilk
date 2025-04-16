import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoMdArrowDropright } from "react-icons/io";

const steps = [
    {
    id: 1,
    title: "Web Strategy",
    img:"https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-2.png.webp",
    desc: "We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
    listtitle: "In this phase, we:",
    lists: (
      <ul className='space-y-3'>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Identify your target audiences</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Analyze user pain-points & define your UVPs</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Define key performance indicators (KPIs)</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Create a roadmap to growing your brand online</li>

      </ul>
    )
  },
  {
    id: 2,
    title: "Planning & Information Architecture",
    img:"https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",

    desc: "We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, we ensure seamless user journeys to key conversion points.",
    listtitle: "In this phase, we:",
    lists: (
      <ul className='space-y-3'>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Identify your target audiences</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Analyze user pain-points & define your UVPs</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Define key performance indicators (KPIs)</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Create a roadmap to growing your brand online</li>
      </ul>
    )
  },
  {
    id: 3,
    title: "Creative Design",
    img:"https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",

    desc: "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in NYC.",
    listtitle: "In this phase, we:",
    lists: (
      <ul className='space-y-3'>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Identify your target audiences</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Analyze user pain-points & define your UVPs</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Define key performance indicators (KPIs)</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Create a roadmap to growing your brand online</li>
      </ul>
    )
  },
  {
    id: 4,
    title: "Responsive Development",
    img:"https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",

    desc: "A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
    listtitle: "In this phase, we:",
    lists: (
      <ul className='space-y-3'>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Identify your target audiences</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Analyze user pain-points & define your UVPs</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Define key performance indicators (KPIs)</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Create a roadmap to growing your brand online</li>
      </ul>
    )
  },
  {
    id: 5,
    title: "Quality Assurance (QA)",
    img:"https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",

    desc: "At Digital Silk, we pride ourselves on delivering measurable results and professional outcomes. By following a strict quality assurance (QA) protocol, we guarantee a high-quality digital experience for your brand.",
    listtitle: "In this phase, we:",
    lists: (
      <ul className='space-y-3'>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Identify your target audiences</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Analyze user pain-points & define your UVPs</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Define key performance indicators (KPIs)</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Create a roadmap to growing your brand online</li>
      </ul>
    )
  },
  {
    id: 6,
    title: "Launch & Optimization",
    img:"https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",

    desc: "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
    listtitle: "In this phase, we:",
    lists: (
      <ul className='space-y-3'>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Identify your target audiences</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Analyze user pain-points & define your UVPs</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Define key performance indicators (KPIs)</li>
        <li className='flex items-center gap-1 text-white'><IoMdArrowDropright size={30} className='text-[#18CCFC]' /> Create a roadmap to growing your brand online</li>
      </ul>
    )
  },
];

const WebsiteDesignProcess = () => {
  const containerRef = useRef(null);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll into horizontal motion
  const x = useTransform(scrollYProgress, [0, 4], ['0%', `-${(steps.length - 2) * 100}%`]); 
  // steps.length - 2 → shows 2 cards at a time

  return (
    <section className=" bg-[#1B2C5C] text-white py-16">
      <h3 className="capitalize text-center font-bold text-4xl">
        Website Design Process
      </h3>
      <p className="mt-4 text-lg mx-auto text-center w-2/3">
        Take a peek behind the curtain and explore the custom web design process our team follows.
      </p>
      <p className="text-lg mx-auto text-center w-2/3">
        We build custom sites for brands of all sizes that deliver <span className="text-[#18CCFC]">measurable results</span>.
      </p>

      <div ref={containerRef} className="sticky top-0 min-h-screen overflow-hidden mt-10">
        <motion.div
          style={{ x }}
          className="flex h-full  items-center gap-10 px-20 transition-transform duration-500 ease-in-out"
        >
          {steps.map((step, i) => (
            <div
            key={i}
            className="min-w-[50%]   flex flex-col justify-start"
          >
            <img src={step.img} alt="" className='w-60' />
            <div className="mt-16 flex items-center">
                <span className='w-4 h-4 rounded-full border-[1px] border-[#18CCFC]'></span>
                {/* <span className='flex-1 bg-[#18CCFC] p-1 rounded-sm'></span> */}
            </div>
            <h5 className="text-2xl font-semibold mb-4 mt-16 text-[#18CCFC]">{step.title}</h5>
            <p className=" mb-4">{step.desc}</p>
            <h6 className="  mb-6">{step.listtitle}</h6>
            <div className="text-sm">{step.lists}</div>
            <h3 className='mt-10 text-8xl text-[#ffffff60] font-bold opacity-30'>0{step.id}</h3>
          </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDesignProcess;
