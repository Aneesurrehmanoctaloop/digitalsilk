import React from "react";
import LogoHeader from "../components/page/logodesign/LogoHeader";
import LogoDesignAgency from "../components/page/logodesign/logoForm";
import WebDesignAgency from "../components/common/WebDesignAgency";
import FeaturedProjects from "../components/page/logodesign/FeaturedProject";
import Solutions from "../components/page/logodesign/Solutions";
import WebsiteDesignProcess from "../components/WebsiteDesignProcess";

import { IoMdArrowDropright } from "react-icons/io";
import LogoDesignExpert from "../components/page/logodesign/LogoDesignExpert";
import WebDesignExpert from "../components/WebDesignExpert";
import NewsletterSignUp from "../components/page/logodesign/Email";
import Reviews from "../components/page/logodesign/Reviews";
import FrequentlyQuestions from "../components/common/FrequentlyQuestions";
import KeepExploringSection from "../components/page/logodesign/KeepExploringSec";
import RequestQuoteSection from "../components/page/logodesign/RequestQuoteSection .jsx";
import Conversations from "../components/Conversations.jsx";

const LogoDesign = () => {
  const logodesignStrategy = [
    {
      heading: "Our Logo Design Process",
      subHeading: (
        <>
          Take a peek behind the curtain and explore the custom logo design
          process our team follows to deliver measurable results.{" "}
          <a href="#" className="text-[#04e4ff]">
            measurable results
          </a>
          .
        </>
      ),
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Web Strategy",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-2.png.webp",
      desc: "We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.",
      listtitle: "In this phase, we:",
      lists: (
        <ul className="space-y-3">
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Identify
            your target audiences
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Analyze
            user pain-points & define your UVPs
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Define
            key performance indicators (KPIs)
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Create a
            roadmap to growing your brand online
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Planning & Information Architecture",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",
      desc: "We utilize proven techniques to map your content, meet user intentions and create an engaging user experience. By outlining your site’s structure, we ensure seamless user journeys to key conversion points.",
      listtitle: "In this phase, we:",
      lists: (
        <ul className="space-y-3">
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Identify
            your target audiences
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Analyze
            user pain-points & define your UVPs
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Define
            key performance indicators (KPIs)
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Create a
            roadmap to growing your brand online
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Creative Design",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",
      desc: "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design.",
      listtitle: "In this phase, we:",
      lists: (
        <ul className="space-y-3">
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Identify
            your target audiences
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Analyze
            user pain-points & define your UVPs
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Define
            key performance indicators (KPIs)
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Create a
            roadmap to growing your brand online
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      title: "Responsive Development",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",
      desc: "A responsive website is fast, accessible and easy to navigate. It automatically scales to various screen sizes and devices, driving user experience and climbing search engine rankings.",
      listtitle: "In this phase, we:",
      lists: (
        <ul className="space-y-3">
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Identify
            your target audiences
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Analyze
            user pain-points & define your UVPs
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Define
            key performance indicators (KPIs)
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Create a
            roadmap to growing your brand online
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      title: "Quality Assurance (QA)",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",
      desc: "At Digital Silk, we pride ourselves on delivering measurable results and professional outcomes. By following a strict quality assurance (QA) protocol, we guarantee a high-quality digital experience for your brand.",
      listtitle: "In this phase, we:",
      lists: (
        <ul className="space-y-3">
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Identify
            your target audiences
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Analyze
            user pain-points & define your UVPs
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Define
            key performance indicators (KPIs)
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Create a
            roadmap to growing your brand online
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "Launch & Optimization",
      img: "https://www.digitalsilk.com/wp-content/uploads/2024/06/iStock-932335774-4.png.webp",
      desc: "Our end-to-end website design services cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
      listtitle: "In this phase, we:",
      lists: (
        <ul className="space-y-3">
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Identify
            your target audiences
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Analyze
            user pain-points & define your UVPs
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Define
            key performance indicators (KPIs)
          </li>
          <li className="flex items-center gap-1 text-white">
            <IoMdArrowDropright size={30} className="text-[#18CCFC]" /> Create a
            roadmap to growing your brand online
          </li>
        </ul>
      ),
    },
  ];
  const faqData = [
    {
      number: "01",
      question: "What should I consider when choosing a logo for my brand?",
      answer:
        "Key elements to consider when creating or choosing a logo for your brand include your brand’s personality, your core values, and your target audience. From colors to typography, different elements evoke certain human responses and emotions. Ultimately, the colors, shapes, and typography you choose should reflect who you are as a brand and what you want to convey.",
    },
    {
      number: "02",
      question:
        "How is a premium logo design different from a basic logo design?",
      answer:
        "A premium logo design goes beyond basic design elements by considering factors like versatility, scalability, and how it resonates emotionally with your target audience. A premium design ensures your logo will grow with your brand and stand out in the competitive market.",
    },
    {
      number: "03",
      question: "How long does it take to create a premium logo?",
      answer:
        "The time to create a premium logo varies depending on the complexity of the design and the feedback process. On average, it can take anywhere between 1 to 3 weeks, including revisions, to ensure a high-quality and well-thought-out logo.",
    },
    {
      number: "04",
      question: "How long does it take to complete a logo design project?",
      answer:
        "A complete logo design project usually takes 2 to 4 weeks, including the concept creation, feedback, and final adjustments. The timeline can vary depending on the specific needs of the client and the complexity of the project.",
    },
    {
      number: "05",
      question: "How will I receive the final logo design files?",
      answer:
        "Once the logo design is finalized, you'll receive the logo files in multiple formats, including AI, EPS, PNG, and JPG. These files will be compatible with both print and digital mediums, ensuring your logo looks great everywhere.",
    },
    {
      number: "06",
      question:
        "How can I ensure consistency in my brand design across different platforms and mediums?",
      answer:
        "Consistency is key for brand recognition. We provide brand guidelines along with your logo design that include color palettes, typography choices, and logo usage instructions to ensure your brand remains cohesive across all platforms and mediums.",
    },
  ];

  return (
    <div>
      <LogoHeader />
      <LogoDesignAgency />
      <WebDesignAgency
        head1="Our Clients"
        head2="A Reliable Logo Design Agency"
        head3="We craft remarkable logos to help businesses across industries be easily recognized."
      />
      <FeaturedProjects />
      <Solutions />
      <WebsiteDesignProcess header={logodesignStrategy} steps={steps} />
      <WebDesignExpert />
      <LogoDesignExpert />
      <NewsletterSignUp />
      <Reviews />
      <FrequentlyQuestions faqData={faqData} color="blue" />
      <KeepExploringSection />
      <RequestQuoteSection />
      <Conversations />
    </div>
  );
};

export default LogoDesign;
