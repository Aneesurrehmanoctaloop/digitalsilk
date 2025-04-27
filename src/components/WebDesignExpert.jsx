import React, { useState } from "react";
import Button from "./shared/Button";

const WebDesignExpert = () => {
  const [activeTab, setActiveTab] = useState("awards");

  const awardImages = [
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/award-IMA-WHITE-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/pngwing-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/Marcom_logo-1-120x67.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/award-IMA-WHITE-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/pngwing-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/Marcom_logo-1-120x67.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/award-IMA-WHITE-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/pngwing-1.svg",
  ];

  const recognitionImages = [
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/Marcom_logo-1-120x67.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/FoxNews_logo-1-120x112.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/New_Bloomberg_Logo-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/Marcom_logo-1-120x67.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/FoxNews_logo-1-120x112.png.webp",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/New_Bloomberg_Logo-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/07/New_Bloomberg_Logo-1.svg",
    "https://www.digitalsilk.com/wp-content/uploads/2022/12/Marcom_logo-1-120x67.png.webp",
  ];

  const expertiseList = [
    "Brand Strategy",
    "Communication Strategy",
    "Logo & Graphic Design",
    "UI & UX Design",
    "Package Design",
    "Custom Web Design",
    "eCommerce Development",
    "Mobile App Development",
    "Software & AI Development",
    "ERP Portal Integration",
    "Marketing Strategy",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Paid Media Marketing",
    "Email Marketing",
    "Creative Copywriting",
    "Content Marketing",
    "Influencer Marketing",
    "Affiliate Marketing",
    "B2B Direct Marketing",
  ];

  return (
    <div className="bg-[#1B2C5F] px-6 md:px-16 py-12">
      <div className="container text-white">
        <h3 className="text-lg font-bold uppercase text-center">
          Our Experts Have Won Industry Awards
        </h3>
        <h2 className="text-4xl mt-2 font-bold uppercase text-center">
          Recognized Web Design Experts
        </h2>

        {/* Tabs */}
        <div className="mt-12 flex border-b-2 border-gray-500">
          {["awards", "recognition", "expertise"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 cursor-pointer text-center pb-2 uppercase text-xl font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {activeTab === "awards" && (
            <div className="grid grid-cols-2 space-y-8 md:grid-cols-4 gap-6">
              {awardImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Award ${index}`}
                  className="w-60 h-24 "
                />
              ))}
            </div>
          )}

          {activeTab === "recognition" && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 space-y-8">
              {recognitionImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Recognition ${index}`}
                  className="w-60 h-24"
                />
              ))}
            </div>
          )}

          {activeTab === "expertise" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {expertiseList.map((item, index) => (
                <div key={index} className="text-white">
                  • {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-fit mx-auto mt-16">
          <Button text={"Request a quote"} />
        </div>
      </div>
    </div>
  );
};

export default WebDesignExpert;
