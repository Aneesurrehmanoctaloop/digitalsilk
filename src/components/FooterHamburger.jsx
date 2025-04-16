import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const FooterHamburger = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTab, setHoveredTab] = useState("Web Design Services");

  const tabs = {
    "Web Design Services": [
      "Custom Web Design",
      "UI/UX Design",
      "Responsive Design",
      "Website Redesign",
      "Landing Page Design"
    ],
    "Branding Services": [
      "Logo Design",
      "Corporate Branding",
      "Brand Strategy",
      "Visual Identity",
      "Stationery Design"
    ],
    "eCommerce & Development": [
      "Shopify Development",
      "Magento Solutions",
      "Custom eCommerce",
      "WooCommerce",
      "Payment Integration"
    ],
    "Consulting Services": [
      "Digital Strategy",
      "IT Consulting",
      "Brand Consulting",
      "Marketing Planning",
      "Startup Guidance"
    ],
    "Marketing Services": [
      "SEO Optimization",
      "PPC Campaigns",
      "Email Marketing",
      "Social Media Management",
      "Content Strategy"
    ],
    "Branding Locations": [
      "New York",
      "Los Angeles",
      "Miami",
      "Chicago",
      "Austin"
    ],
    "Web Design Locations": [
      "San Francisco",
      "Boston",
      "Houston",
      "Atlanta",
      "Seattle"
    ],
    "Digital Agency Locations": [
      "Philadelphia",
      "Phoenix",
      "San Diego",
      "Denver",
      "Dallas"
    ]
  };

  return (
    <div className="mt-10 relative z-50 text-white">
      {/* Footer Bottom Bar */}
      <div className="flex justify-between items-center text-sm gap-4">
        {/* Left Text Links */}
        <div className="flex flex-wrap gap-4 font-medium">
          <span>©2025 Digital Silk. All rights reserved</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Manage Your Consent</span>
          <span className="hover:underline cursor-pointer">Accessibility</span>
          <span>Call us at (800) 206-9413</span>
        </div>

        {/* Hamburger Icon */}
        <div
          className=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <HiMenu size={40} className="cursor-pointer text-white" />

          {/* Sliding Panel */}
          {isHovered && (
            <div className="absolute  h-[85dvh] -bottom-12 -right-16 w-[700px] bg-[#1B2C5F] text-white shadow-lg border border-gray-300 z-50">
              <div className="grid grid-cols-2 h-full">
                {/* Left Tabs */}
                <div className="border-r border-gray-200 p-4 overflow-y-auto">
                  <ul className="space-y-2">
                    {Object.keys(tabs).map((tab) => (
                      <li
                        key={tab}
                        onMouseEnter={() => setHoveredTab(tab)}
                        className={`text-base font-medium cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 ${
                          hoveredTab === tab ? 'bg-gray-100 text-blue-600 font-semibold' : 'bg-[#ffffff30]'
                        }`}
                      >
                        {tab}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Sub-Tabs */}
                <div className="p-4 overflow-y-auto">
                  <h3 className="text-xl font-bold mb-4">{hoveredTab}</h3>
                  <ul className="space-y-2">
                    {tabs[hoveredTab]?.map((item, index) => (
                      <li key={index} className="text-base hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterHamburger;
