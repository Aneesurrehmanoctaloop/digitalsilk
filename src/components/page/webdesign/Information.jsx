import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Information = () => {
  return (
    <div className="bg-[#F1F5FE] px-16 py-10">
      <div className="container ">
        <div className="text-center">
          <p className="text-[#3B7BCE] text-xl uppercase font-black">
            What’s Best For Your Business?
          </p>
          <h2 className="text-[#3B7BCE] font-bold text-4xl mt-2">
            Custom Fit Web Design vs. Website Templates
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
          {/* Column 1: Heading */}
          <div>
            <h1 className="text-3xl font-bold text-[#3B7BCE] p-8">
              No matter the industry, market, or niche, we all have that special
              something that distinguishes us from our competitors.
              <span className="block mt-2">
                The challenge we all have is to present our unique selling
                points online.
              </span>
            </h1>
          </div>

          {/* Column 2: Paragraph */}
          <div>
            <p className="text-[#5F6568] p-10">
              Perhaps it’s just the brand recognition and awareness that you
              need, which can be achieved with a simple WordPress website.
              <span className="block my-2">
                On the other hand, an omni-channel solution like Magento 2 can
                provide even the most complex custom features to support your
                sales and communication funnels.
              </span>
              Here are a few things to take in consideration when deciding
              what’s the best fit for your business.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="w-full max-w-[600px] mx-auto">
        <div className="bg-white shadow-lg rounded-md p-4 md:p-6 mb-10">
          <h3 className="text-xl font-bold mb-2 pb-2 text-[#1B2C5F] border-[#3B7BCE] border-b">
            Table of Contents
          </h3>
          <ul className="space-y-2">
            {[
              "What Are The Benefits Of A Custom Website Design?",
              "What To Consider When Choosing The Best Custom Website Design Company?",
              "5 Signs That You Should Invest In Custom Web Design",
              "Custom Web Design Best Practices",
              "What To Do Once You Hire A Custom Web Design Company?",
              "Custom Website Examples From Our Kitchen",
              "Drive Higher Conversions To Your Tailor-Made Website With Digital Silk",
            ].map((item, idx) => (
              <li
                key={idx}
                className="group relative overflow-hidden flex items-center text-sm gap-2 border-[#3B7BCE] border-b py-2 text-[#1B2C5F] font-medium cursor-pointer"
              >
                <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-blue-200 z-0"></span>
                <a
                  href={`#section-${idx + 1}`}
                  className="relative z-10 flex items-center gap-2"
                >
                  <FaArrowRight className="text-[#3B7BCE]" />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-6 text-[#1B2C5F] space-y-10">
        <section id="section-1" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            What Are The Benefits Of A Custom Website Design?
          </h2>
          <p>
            While theme and page templates are often a quicker and cheaper
            option, there are numerous benefits to choosing a custom web design
            for your website:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Supported Brand Identity</li>
            <li>Enhanced User Experience</li>
            <li>Tailored Functionality</li>
            <li>Seamless Integration With Other Systems</li>
            <li>Long-Term Cost Savings</li>
          </ul>
        </section>

        <section id="section-2" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            What To Consider When Choosing The Best Custom Website Design
            Company?
          </h2>
          <p>
            Choosing the right agency to deliver your custom web design is an
            individual process, but there are several factors to keep in
            consideration:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Experience & Expertise</li>
            <li>Client Testimonials & Reviews</li>
            <li>Understanding Of Your Business & Goals</li>
            <li>Customization & Flexibility</li>
            <li>Full-Service Capabilities</li>
            <li>Project Timeline & Communication</li>
            <li>Support & Maintenance</li>
          </ul>
        </section>

        <section id="section-3" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            5 Signs That You Should Invest In Custom Web Design
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Your Page Speed Is Lagging</li>
            <li>You Are Not Reaching Your Target Audience</li>
            <li>You Are Not Achieving Your Conversion Goals</li>
            <li>Your Website Looks Generic</li>
            <li>Your Site Is Optimized For Desktop Viewing Only</li>
          </ul>
        </section>

        <section id="section-4" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Custom Web Design Best Practices
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Strategic Planning</li>
            <li>Responsive Design</li>
            <li>Search Engine Optimization</li>
          </ul>
        </section>

        <section id="section-5" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            What To Do Once You Hire A Custom Web Design Company?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Establish Clear Communication Channels</li>
            <li>Share Your Brand Vision & Goals</li>
            <li>Provide Required Media Assets</li>
            <li>Collaborate On Design Concepts</li>
            <li>Review & Provide Feedback</li>
          </ul>
        </section>

        <section id="section-6" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Custom Website Examples From Our Kitchen
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>J&H Tackle</li>
            <li>Sandler</li>
            <li>G Pen</li>
            <li>American University in Bulgaria</li>
            <li>Buddha Brands</li>
          </ul>
        </section>

        <section id="section-7" className="space-y-4">
          <h2 className="text-3xl font-semibold">
            Drive Higher Conversions To Your Tailor-Made Website With Digital
            Silk
          </h2>
          <p>
            At Digital Silk, we provide bespoke services based on consumer,
            industry and competitive research. This way, we make goal-oriented
            decisions and custom web designs that drive conversions for your
            brand.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Information;
