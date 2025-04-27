import React from "react";
import WebHeader from "../components/page/webdesign/WebHeader";
import WebServices from "../components/page/webdesign/WebServices";
import WebDesignAgency from "../components/common/WebDesignAgency";
import FeaturedProjects from "../components/page/logodesign/FeaturedProject";
import CMSPlatforms from "../components/CMSPlatforms";
import WebsiteDesignProcess from "../components/WebsiteDesignProcess";
import { IoMdArrowDropright } from "react-icons/io";
import WebDesignExpert from "../components/WebDesignExpert";
import FeaturedWebsites from "../components/FeaturedWebsites";
import ChooseWebDesign from "../components/ChooseWebDesign";
import Reviews from "../components/page/logodesign/Reviews";
import KeepExploringSection from "../components/page/logodesign/KeepExploringSec";
import Conversations from "../components/Conversations";
import Signup from "../components/page/socialMediaMarketing/MarketingSignup";
import StayAhead from "../components/StayAhead";
import FrequentlyQuestions from "../components/common/FrequentlyQuestions";
import Information from "../components/page/webdesign/Information";

const WebsiteDesign = () => {
  const webDesignProcess = [
    {
      heading: "Our Custom Website Design Process",
      subHeading: (
        <>
          We use proprietary processes and industry standard methodologies to
          design and develop high-performance digital experiences.
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
      question: "What is a custom website design?",
      answer: (
        <>
          A custom website design is a build-from-scratch approach that enables
          your online presence to match your business’ goals, in terms of both
          aesthetics and functions.
          <span className="mt-4 block">
            Unlike the limitations of template websites, a custom web design has
            the freedom to tailor the site to your needs, to keep it flexible
            and scalable to fit your business growth.
          </span>
        </>
      ),
    },
    {
      number: "02",
      question: "How does custom web design make a website unique?",
      answer: (
        <>
          A custom website design is a build-from-scratch approach that enables
          your online presence to match your business’ goals, in terms of both
          aesthetics and functions.
          <span className="my-4 block">
            With this flexibility, your tailor-made website can fit your SEO
            needs, follow business growth and achieve a design that is both
            responsive and highly optimized for mobile.
          </span>
          This type of attention to detail and personalization result in a
          one-of-a-kind website that stands out from the crowd and effectively
          represents your business or organization online.
        </>
      ),
    },
    {
      number: "03",
      question: "Should I use custom design or a website builder?",
      answer: (
        <>
          A custom website design is a build-from-scratch approach that enables
          your online presence to match your business’ goals, in terms of both
          aesthetics and functions.
          <span className="my-4 block">
            With this flexibility, your tailor-made website can fit your SEO
            needs, follow business growth and achieve a design that is both
            responsive and highly optimized for mobile.
          </span>
          This type of attention to detail and personalization result in a
          one-of-a-kind website that stands out from the crowd and effectively
          represents your business or organization online.
        </>
      ),
    },
    {
      number: "04",
      question: "How long does it take to complete a logo design project?",
      answer: (
        <>
          A complete logo design project usually takes 2 to 4 weeks, including
          the concept creation, feedback, and final adjustments. The timeline
          can vary depending on the specific needs of the client and the
          complexity of the project.
        </>
      ),
    },
    {
      number: "05",
      question: "How will I receive the final logo design files?",
      answer: (
        <>
          Once the logo design is finalized, you'll receive the logo files in
          multiple formats, including AI, EPS, PNG, and JPG. These files will be
          compatible with both print and digital mediums, ensuring your logo
          looks great everywhere.
        </>
      ),
    },
    {
      number: "06",
      question:
        "How can I ensure consistency in my brand design across different platforms and mediums?",
      answer: (
        <>
          Consistency is key for brand recognition. We provide brand guidelines
          along with your logo design that include color palettes, typography
          choices, and logo usage instructions to ensure your brand remains
          cohesive across all platforms and mediums.
        </>
      ),
    },
  ];
  return (
    <div>
      <WebHeader />
      <WebServices />
      <WebDesignAgency
        head1="Our Clients"
        head2="Trusted Web Design Agency"
        head3="Our experts work with brands of all sizes across different industries to grow their online presence and increase visibility."
      />{" "}
      <FeaturedProjects />
      <CMSPlatforms />
      <WebsiteDesignProcess header={webDesignProcess} steps={steps} />
      <WebDesignExpert />
      <FeaturedWebsites />
      <ChooseWebDesign />
      <Reviews />
      <Information />
      <FrequentlyQuestions color="blue" faqData={faqData} />
      <StayAhead />
      <Signup
        head="Stay On Top Of Digital Trends"
        dsc="Subscribe to our newsletter to get the latest industry insights and web design best practices delivered to your inbox."
      />
      <Conversations />
      <KeepExploringSection />
    </div>
  );
};

export default WebsiteDesign;
