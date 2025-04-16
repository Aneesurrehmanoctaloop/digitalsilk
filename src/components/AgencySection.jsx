import React from "react";
import { FaCheck } from "react-icons/fa";
import WorkAction from "./workAction";
import StarRush from "./StarRush";

const AgencySection = () => {
  return (
    <section className="bg-blue-950 py-10 px-5 text-white">
      {/* Marquee Slider */}
      <div class="mb-10">
        <marquee direction="left" scrollamount="5">
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png.webp"
              alt="1"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png.webp"
              alt="2"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png.webp"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png"
              alt="1"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png.webp"
              alt="2"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png.webp"
              alt="4"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/PG_logo-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/nfl_logo-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png.webp"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png.webp"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png.webp"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png.webp"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/mcds_logo-1.png.webp"
              alt="3"
              width="100"
            />
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png.webp"
              alt="3"
              width="100"
            />
          </div>
        </marquee>
      </div>

      {/* Agency Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pl-20">
        {/* Text Section */}
        <div className="max-w-lg">
          <h1 className="text-3xl lg:text-3xl font-bold mb-6 leading-tight font-serif">
            Creative Web Agency Delivering Custom Solutions
          </h1>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-2">
              <FaCheck className="text-blue-400 mt-1 font-bold" />
              <span className=" font-bold ">
                Custom Web Design Solutions
                <a className="text-[#04E4FF] ">To Drive Conversions</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-[#04E4FF] mt-1 font-bold" />
              <span className=" font-bold font-bold">
                Effective Marketing Campaigns
                <a className="text-[#04E4FF] font-bold">To Generate Growth</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-[#04E4FF] mt-1" />
              <span className=" font-bold ">
                Tailored Branding Strategies
                <a className="text-[#04E4FF] ">To Drive Engagement</a>
              </span>
            </li>
            <li className="flex items-start gap-10">
              <p className="pt-6 ">
                Digital Silk is a web design company & digital marketing agency
                focused on growing brands online. We create effective brand
                strategies, custom web design, development, and digital
                marketing solutions to generate greater brand engagement and
                conversions. We work closely with our clients to ensure each
                project meets their brand guidelines and business goals and
                provide technical and marketing expertise to ensure optimal
                results.
              </p>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 pr-5">
          <img
            src="https://www.digitalsilk.com/wp-content/uploads/2025/01/web-designs-with-trophy.png.webp"
            alt="Agency"
            className="w-full h-120  max-w-sm"
          />
        </div>
      </div>
      <WorkAction />
      <StarRush/>
    </section>
  );
};

export default AgencySection;
