import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

import { IoMdArrowForward } from "react-icons/io";
import pic1 from "../../../assets/images/exp1.jpg"; // Replace with correct paths
import pic2 from "../../../assets/images/exp2.jpg";
import pic3 from "../../../assets/images/exp3.jpg";

// Data for the slides
const data = [
  {
    id: 1,
    pic: pic1,
    head: "Build An Organic Following",
    dsc: "Best practices in building an organic following include: publishing consistent, high-quality and relevant content, partnering with influencers, running contests or giveaways, and utilizing branded hashtags and geotags to increase visibility.",
  },
  {
    id: 2,
    pic: pic2,
    head: "Utilize The Right Platforms",
    dsc: "Choosing the right platforms is crucial for success. We help you select the best platforms for your brand and audience, ensuring maximum engagement and visibility.",
  },
  {
    id: 3,
    pic: pic3,
    head: "Partner With Niche Influencers",
    dsc: "Collaborating with niche influencers helps you connect with the right audience. We guide you to choose influencers that align with your brand values and goals.",
  },
];

const MarketingExpert = () => {
  const [activeTab, setActiveTab] = useState(1); // To keep track of the active tab

  // Tabs data for easy management
  const tabs = [
    { id: 1, title: "Build An Organic Following" },
    { id: 2, title: "Utilize The Right Platforms" },
    { id: 3, title: "Partner With Niche Influencers" },
  ];

  return (
    <div className="container py-12 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "text-[#04e4ff] border-b-4 border-[#04e4ff]"
                : "text-gray-700"
            } text-xl font-semibold uppercase cursor-pointer transition-all duration-300`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <Carousel
        selectedItem={activeTab - 1} // Adjust for 0-based index
        onChange={(index) => setActiveTab(index + 1)} // Set active tab when carousel slides
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        swipeable={true}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center gap-x-8"
          >
            {/* Image section */}
            <div className="w-1/2">
              <img
                src={item.pic}
                alt={`Slide ${item.id}`}
                className="max-w-[360px]"
              />
            </div>

            {/* Text section */}
            <div className="w-1/2  text-start">
              <h3 className="text-3xl font-semibold text-[#04e4ff] mb-4">
                {item.head}
              </h3>
              <p className="text-lg text-gray-700">{item.dsc}</p>
              <div className="mt-4"></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MarketingExpert;
