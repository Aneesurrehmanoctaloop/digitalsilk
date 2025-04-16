import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    number: '01',
    question: 'What does a web design agency do?',
    answer: 'A web design agency grows your brand online by bringing a team of experts together to create a custom site that is optimized for SEO and drives higher conversions for more leads and increased sales.',
  },
  {
    number: '02',
    question: 'What is the difference between web design and web development?',
    answer: 'Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices.',
  },
  {
    number: '03',
    question: 'Why is responsive web design important?',
    answer: 'A great user experience is crucial across all devices — mobile, desktop, and tablets. Mobile users make up 80% of visitors, and search engines prioritize mobile-friendly design.',
  },
  {
    number: '04',
    question: 'How long does it take to design a website?',
    answer: 'A custom website starts with a strategy and planning before going into design and development. Timelines vary depending on complexity, but typically range from 4–12 weeks.',
  },
  {
    number: '05',
    question: 'How much should I expect to pay for web design?',
    answer: 'Costs vary based on scope, features, and agency experience. Expect to pay anywhere between $3,000–$15,000 for a professional custom website.',
  },
  {
    number: '06',
    question: 'How can you help me generate leads after my website is launched?',
    answer: 'Through SEO, performance optimization, and CRO (conversion rate optimization), your site will be geared toward attracting the right visitors and converting them into leads.',
  },
  {
    number: '07',
    question: 'Do you offer website redesign services?',
    answer: 'Yes, we offer full redesign services with strategy, content review, UI/UX improvements, and performance enhancements.',
  },
  {
    number: '08',
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes, all of our websites are built using responsive frameworks to ensure excellent mobile performance and experience.',
  },
  {
    number: '09',
    question: 'Can you create a logo for my brand?',
    answer: 'Yes, we offer branding services including logo design, visual identity systems, and brand guidelines.',
  },
];

const FrequentlyQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 md:px-16 py-12">
      <div className="container">
        <h2 className="text-4xl font-bold text-[#1B2C5F] text-center">Frequently Asked Questions</h2>

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
                    <span className="text-blue-600 font-bold text-xl">{item.number}</span>
                    <span className="text-xl font-medium text-[#1B2C5F]">{item.question}</span>
                  </div>
                  <FaChevronDown
                    className={`text-blue-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] mt-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#1B2C5F] text-lg pl-10">{item.answer}</p>
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
