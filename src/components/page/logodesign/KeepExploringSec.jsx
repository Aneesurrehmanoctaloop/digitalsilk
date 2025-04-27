import React from "react";

const KeepExploringSection = () => {
  return (
    <div className="bg-gradient-to-l from-[#4d2e97] to-[#6344ad] py-16 px-6 md:px-16 ">
      <div className=" mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-semibold text-white mb-12">
          Keep Exploring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding Services Column */}
          <div className="space-y-4  pl-4 border-l-1 border-[#6229e9] text-white  text-start">
            <h3 className="text-lg font-semibold ">Branding Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">
                Brand Consulting
              </li>
              <li className="cursor-pointer hover:underline">Brand Design</li>
              <li className="cursor-pointer hover:underline">Brand Strategy</li>
            </ul>
          </div>

          {/* Design Locations Column */}
          <div className="space-y-4  pl-4 border-l-1 border-[#6229e9] text-white  text-start">
            <h3 className="text-lg font-semibold ">Design Locations</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">
                Chicago Logo Design
              </li>
              <li className="cursor-pointer hover:underline">
                Los Angeles Logo Design
              </li>
              <li className="cursor-pointer hover:underline">
                Miami Logo Design
              </li>
              <li className="cursor-pointer hover:underline">
                New York Logo Design
              </li>
            </ul>
          </div>

          {/* Learn More About Web Design Column */}
          <div className="space-y-4 pl-4 border-l-1 border-[#6229e9] text-white text-start">
            <h3 className="text-lg font-semibold ">
              Learn More About Web Design
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:underline">
                How Much Does A Custom Website Design Cost?
              </li>
              <li className="cursor-pointer hover:underline">
                Best Tech Websites
              </li>
              <li className="cursor-pointer hover:underline">
                Why Hire A Digital Agency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepExploringSection;
