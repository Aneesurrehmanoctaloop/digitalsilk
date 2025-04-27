import React from "react";
import MediaHeader from "../components/page/socialMediaMarketing/MediaHeader";
import SocialServices from "../components/page/socialMediaMarketing/SocialServices";
import WebDesignAgency from "../components/common/WebDesignAgency";
import ExperiencesMarketing from "../components/page/socialMediaMarketing/ExperiencesMarketing";
import ConsultMarketers from "../components/page/socialMediaMarketing/ConsultMarketers";
import FrequentlyQuestions from "../components/common/FrequentlyQuestions";
import pic1 from "../assets/images/faq1.webp";
import pic2 from "../assets/images/faq2.webp";
import pic3 from "../assets/images/faq3.webp";
import MarketingProjects from "../components/page/socialMediaMarketing/MarketingProjects";
import MarketingSignup from "../components/page/socialMediaMarketing/MarketingSignup";
import MarketingExpert from "../components/page/socialMediaMarketing/MarketingExpert";
import ConsultMeeting from "../components/page/socialMediaMarketing/ConsultMeeting";
import Conversations from "../components/Conversations";

const SocialMediaMarketing = () => {
  const faqData = [
    {
      number: "01",
      question: "What should I consider when choosing a logo for my brand?",
      answer: (
        <>
          "Key elements to consider when creating or choosing a logo for your
          brand include your brand’s personality, your core values, and your
          target audience. From colors to typography, different elements evoke
          certain human responses and emotions. Ultimately, the colors, shapes,
          and typography you choose should reflect who you are as a brand and
          what you want to convey.",
          <img src={pic1} className="p-2 mt-2 rounded-lg" alt="faq-img1" />
        </>
      ),
    },
    {
      number: "02",
      question:
        "How is a premium logo design different from a basic logo design?",
      answer: (
        <>
          "Key elements to consider when creating or choosing a logo for your
          brand include your brand’s personality, your core values, and your
          target audience. From colors to typography, different elements evoke
          certain human responses and emotions. Ultimately, the colors, shapes,
          and typography you choose should reflect who you are as a brand and
          what you want to convey.",
          <img src={pic2} className="p-2 mt-2 rounded-lg" alt="faq-img1" />
        </>
      ),
    },
    {
      number: "03",
      question: "How long does it take to create a premium logo?",
      answer: (
        <>
          "Key elements to consider when creating or choosing a logo for your
          brand include your brand’s personality, your core values, and your
          target audience. From colors to typography, different elements evoke
          certain human responses and emotions. Ultimately, the colors, shapes,
          and typography you choose should reflect who you are as a brand and
          what you want to convey.",
          <img src={pic1} className="p-2 mt-2 rounded-lg" alt="faq-img1" />
        </>
      ),
    },
    {
      number: "04",
      question: "How long does it take to complete a logo design project?",
      answer: (
        <>
          "Key elements to consider when creating or choosing a logo for your
          brand include your brand’s personality, your core values, and your
          target audience. From colors to typography, different elements evoke
          certain human responses and emotions. Ultimately, the colors, shapes,
          and typography you choose should reflect who you are as a brand and
          what you want to convey.",
          <img src={pic2} className="p-2 mt-2 rounded-lg" alt="faq-img1" />
        </>
      ),
    },
    {
      number: "05",
      question: "How will I receive the final logo design files?",
      answer: (
        <>
          "Key elements to consider when creating or choosing a logo for your
          brand include your brand’s personality, your core values, and your
          target audience. From colors to typography, different elements evoke
          certain human responses and emotions. Ultimately, the colors, shapes,
          and typography you choose should reflect who you are as a brand and
          what you want to convey.",
          <img src={pic3} className="p-2 mt-2 rounded-lg" alt="faq-img1" />
        </>
      ),
    },
    {
      number: "06",
      question:
        "How can I ensure consistency in my brand design across different platforms and mediums?",
      answer: (
        <>
          "Key elements to consider when creating or choosing a logo for your
          brand include your brand’s personality, your core values, and your
          target audience. From colors to typography, different elements evoke
          certain human responses and emotions. Ultimately, the colors, shapes,
          and typography you choose should reflect who you are as a brand and
          what you want to convey.",
          <img src={pic1} className="p-2 mt-2 rounded-lg" alt="faq-img1" />
        </>
      ),
    },
  ];
  const faqData1 = [
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
      <MediaHeader />
      <SocialServices />
      <WebDesignAgency
        head1="Our Clients"
        head2="Reliable Social Media Marketing Agency"
        head3="We partner with businesses across industries to establish and grow their social media presence."
      />
      <ExperiencesMarketing />
      <ConsultMarketers />
      <FrequentlyQuestions faqData={faqData} color="blue" />
      <MarketingProjects />
      <MarketingSignup
        head="Stay On Top Of Branding & Digital Trends"
        dsc="Subscribe to our newsletter to get the latest industry insights and web design best practices delivered to your inbox."
      />
      <MarketingExpert />
      <FrequentlyQuestions faqData={faqData1} color="blue" />
      <ConsultMeeting />
      <Conversations />
    </div>
  );
};

export default SocialMediaMarketing;
