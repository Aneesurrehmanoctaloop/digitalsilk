import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FrequentlyQuestions = ({ faqData, color }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`px-6 md:px-16 py-12 ${
        color === "blue"
          ? "bg-gradient-to-r from-[#170f49] via-[#170f49] to-[#4d2e97]"
          : ""
      }`}
    >
      <div className="container">
        <h2
          className={`text-4xl font-bold text-center ${
            color === "blue" ? "text-white" : "text-[#1B2C5F]"
          }`}
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-12 w-full mx-auto max-w-[800px] space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b border-blue-500 pb-4 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left cursor-pointer"
                >
                  <div className="flex gap-4 items-start">
                    <span
                      className={`text-xl font-bold ${
                        color === "blue" ? "text-white" : "text-[#1B2C5F]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`text-xl font-medium ${
                        color === "blue" ? "text-white" : "text-[#1B2C5F]"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <FaChevronDown
                    className={`${
                      color === "blue" ? "text-white" : "text-[#1B2C5F]"
                    } text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] mt-6" : "max-h-0"
                  }`}
                >
                  <p
                    className={`${
                      color === "blue" ? "text-white" : "text-[#1B2C5F]"
                    } text-lg pl-10`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
