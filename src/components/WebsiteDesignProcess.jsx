import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

const WebsiteDesignProcess = ({ header, steps }) => {
  const containerRef = useRef(null);

  // Setup scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll into horizontal motion
  const x = useTransform(
    scrollYProgress,
    [0, 4],
    ["0%", `-${(steps.length - 2) * 100}%`]
  );
  // steps.length - 2 → shows 2 cards at a time

  return (
    <section className="bg-[#1B2C5C] text-white py-16">
      <h3 className="capitalize text-center font-bold text-4xl">
        {header[0].heading}
      </h3>
      <p className="mt-4 text-lg mx-auto text-center w-2/3">
        {header[0].subHeading}
      </p>

      <div
        ref={containerRef}
        className="sticky top-0 min-h-screen overflow-hidden mt-10"
      >
        <motion.div
          style={{ x }}
          className="flex h-full items-center gap-10 px-20 transition-transform duration-500 ease-in-out"
        >
          {steps.map((step, i) => (
            <div key={i} className="min-w-[50%] flex flex-col justify-start">
              <img src={step.img} alt="" className="w-60" />
              <div className="mt-16 flex items-center">
                <span className="w-4 h-4 rounded-full border-[1px] border-[#18CCFC]"></span>
              </div>
              <h5 className="text-2xl font-semibold mb-4 mt-16 text-[#18CCFC]">
                {step.title}
              </h5>
              <p className="mb-4">{step.desc}</p>
              <h6 className="mb-6">{step.listtitle}</h6>
              <div className="text-sm">{step.lists}</div>
              <h3 className="mt-10 text-8xl text-[#ffffff60] font-bold opacity-30">
                0{step.id}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteDesignProcess;
