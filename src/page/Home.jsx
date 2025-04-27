import React from "react";
import HeroSection from "../components/HeroSection";
import AgencySection from "../components/AgencySection";
import FeaturedProjects from "../components/FeaturedProjects";
import WebDesignAgency from "../components/common/WebDesignAgency";
import DiscoverExpertise from "../components/DiscoverExpertise";
import CaseStudies from "../components/CaseStudies";
import ClientReviews from "../components/ClientReviews";
import CMSPlatforms from "../components/CMSPlatforms";
import Conversations from "../components/Conversations";
import SignUp from "../components/SignUp";
import WebDesignExpert from "../components/WebDesignExpert";
import FrequentlyQuestions from "../components/common/FrequentlyQuestions";
import Locations from "../components/Locations";
import ChooseWebDesign from "../components/ChooseWebDesign";
import StayAhead from "../components/StayAhead";
import BestWebAgency from "../components/BestWebAgency";
import FeaturedWebsites from "../components/FeaturedWebsites";
import CustomDesign from "../components/CustomDesign";
import WebsiteDesignProcess from "../components/WebsiteDesignProcess";
import { IoMdArrowDropright } from "react-icons/io";

const Home = () => {
  const webDesignProcess = [
    {
      heading: "Our Logo Design Process",
      subHeading: (
        <>
          Take a peek behind the curtain and explore the custom logo design
          process our team follows to deliver measurable results.{" "}
          <p className="text-[#04e4ff]"> measurable results</p>.
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

      desc: "This stage is where you will see your site come to life. Our award-winning designers implement your unique branding elements to add your identity to your custom web design in NYC.",
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
      title: "Quality Assurance (QA)",
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

      desc: "Our end-to-end website design services in New York cover both launch and post-launch support. We meticulously monitor, test and optimize your website elements to ensure every part of your site is functioning optimally.",
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
      question: "What does a web design agency do?",
      answer:
        "A web design agency grows your brand online by bringing a team of experts together to create a custom site that is optimized for SEO and drives higher conversions for more leads and increased sales.",
    },
    {
      number: "02",
      question:
        "What is the difference between web design and web development?",
      answer:
        "Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices.",
    },
    {
      number: "03",
      question: "Why is responsive web design important?",
      answer:
        "A great user experience is crucial across all devices — mobile, desktop, and tablets. Mobile users make up 80% of visitors, and search engines prioritize mobile-friendly design.",
    },
    {
      number: "04",
      question: "How long does it take to design a website?",
      answer:
        "A custom website starts with a strategy and planning before going into design and development. Timelines vary depending on complexity, but typically range from 4–12 weeks.",
    },
    {
      number: "05",
      question: "How much should I expect to pay for web design?",
      answer:
        "Costs vary based on scope, features, and agency experience. Expect to pay anywhere between $3,000–$15,000 for a professional custom website.",
    },
    {
      number: "06",
      question:
        "How can you help me generate leads after my website is launched?",
      answer:
        "Through SEO, performance optimization, and CRO (conversion rate optimization), your site will be geared toward attracting the right visitors and converting them into leads.",
    },
    {
      number: "07",
      question: "Do you offer website redesign services?",
      answer:
        "Yes, we offer full redesign services with strategy, content review, UI/UX improvements, and performance enhancements.",
    },
    {
      number: "08",
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all of our websites are built using responsive frameworks to ensure excellent mobile performance and experience.",
    },
    {
      number: "09",
      question: "Can you create a logo for my brand?",
      answer:
        "Yes, we offer branding services including logo design, visual identity systems, and brand guidelines.",
    },
  ];

  return (
    <div className="h-[90vh] bg-[#00042A]">
      <HeroSection />
      <AgencySection />
      <FeaturedProjects />
      <WebDesignAgency
        head1="Clients Across Industries "
        head2="  Full-Service Web Design Agency"
        head3="From startups to Fortune 500 companies"
        subhead3="we create custom solutions that grow brands online"
      />
      <DiscoverExpertise />
      <CaseStudies />
      <ClientReviews />
      <CMSPlatforms />
      <WebsiteDesignProcess header={webDesignProcess} steps={steps} />
      <CustomDesign />
      <FeaturedWebsites />
      <BestWebAgency />
      <StayAhead />
      <ChooseWebDesign />
      <Locations />
      <FrequentlyQuestions faqData={faqData} />
      <WebDesignExpert />
      <SignUp />
      <Conversations />
    </div>
  );
};

export default Home;
