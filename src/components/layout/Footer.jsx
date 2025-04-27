import React from "react";
import FooterHamburger from "../FooterHamburger";

const Footer = () => {
  return (
    <div className="bg-[#18CCFC] px-16 py-12 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10">Let’s Grow Your Brand</h2>

        <div className="grid grid-cols-4 gap-10 mt-10">
          {/* Main Services */}
          <div className="flex flex-col gap-2 border-l-1 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-2">Main Services</h3>
            <a href="#" className="text-sm hover:underline">
              Custom Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              Branding Services
            </a>
            <a href="#" className="text-sm hover:underline">
              eCommerce Design
            </a>
            <a href="#" className="text-sm hover:underline">
              Shopify Website Design
            </a>
            <a href="#" className="text-sm hover:underline">
              WordPress Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              Digital Marketing
            </a>
            <a href="#" className="text-sm hover:underline">
              Apps & Development
            </a>
            <a href="#" className="text-sm hover:underline">
              Website Cost Calculator
            </a>
            <a href="#" className="text-sm hover:underline">
              Conversion Rate Calculator
            </a>
            <a href="#" className="text-sm hover:underline">
              Custom Web Development
            </a>
            <a href="#" className="text-sm hover:underline">
              Magento Development
            </a>
            <a href="#" className="text-sm hover:underline">
              eCommerce Development
            </a>
            <a href="#" className="text-sm hover:underline">
              WooCommerce Development
            </a>
          </div>

          {/* Location Services */}
          <div className="flex flex-col gap-2 border-l-1 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-2">Location Services</h3>
            <a href="#" className="text-sm hover:underline">
              NYC Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              California Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              Miami Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              Los Angeles Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              Denver Web Design
            </a>
            <a href="#" className="text-sm hover:underline">
              San Francisco Web Design
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2 border-l-1 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-2">Company</h3>
            <a href="#" className="text-sm hover:underline">
              About Us
            </a>
            <a href="#" className="text-sm hover:underline">
              Case Studies
            </a>
            <a href="#" className="text-sm hover:underline">
              Digital Trends
            </a>
            <a href="#" className="text-sm hover:underline">
              Top Companies
            </a>
            <a href="#" className="text-sm hover:underline">
              Reviews
            </a>
            <a href="#" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="#" className="text-sm hover:underline">
              Locations
            </a>
          </div>

          {/* Apps & Development */}
          <div className="flex flex-col gap-2 border-l-1 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-2">Apps & Development</h3>
            <a href="#" className="text-sm hover:underline">
              Get in Touch
            </a>
            <a href="#" className="text-sm hover:underline">
              Request a Quote
            </a>
            <a href="#" className="text-sm hover:underline">
              Schedule a Call
            </a>
            <a href="#" className="text-sm hover:underline">
              Support
            </a>
          </div>
        </div>
        {/* locations  */}
        <div className="mt-12  pb-10 border-b border-blue-500">
          <div className="flex items-center gap-2 mb-10">
            <h3 className="text-2xl font-bold uppercase ">DigitalSilk</h3>
            <div className="flex-1 p-[0.5px] bg-blue-500"></div>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {/* Location 1 */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold">Miami</h4>
              <p>17975 Collins Avenue</p>
              <p>Sunny Isles Beach, FL 33160</p>
            </div>

            {/* Location 2 */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold">New York</h4>
              <p>18 West 18th Street</p>
              <p>New York, NY 10011</p>
            </div>

            {/* Location 3 */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold">Chicago</h4>
              <p>625 W Adams St</p>
              <p>Chicago, IL 60661</p>
            </div>

            {/* Location 4 */}
            <div className="flex flex-col items-start">
              <h4 className="font-bold">California</h4>
              <p>600 B St, San Diego</p>
              <p>CA 92101</p>
            </div>
          </div>
        </div>
        <FooterHamburger />
      </div>
    </div>
  );
};

export default Footer;
