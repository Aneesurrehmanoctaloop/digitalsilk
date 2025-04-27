import React from "react";
import Button from "../../shared/Button";
import pic1 from "../../../assets/images/profile1.webp";
const Reviews = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            WHY COMPANIES CHOOSE US
          </h2>
          <h3 className="text-4xl text-gray-800 font-semibold mb-6">
            Digital Silk’s Unique Value As A Logo Design Agency
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Brand-Specific And Results-Driven Strategies
          </p>

          <Button text="SCHEDULE A CONSULTATION" />
        </div>

        {/* Right Section */}
        <div className="flex-1  text-center lg:text-left">
          <div className="pic mb-2">
            <img
              src={pic1}
              alt="Expert 1"
              className="w-20 h-20 rounded-full border-4 border-blue-600"
            />
          </div>
          <div className="mb-8 mt-4">
            <h4 className="text-2xl font-semibold text-[#1b2c5c] mb-4">
              EXPERTISE
            </h4>
            <p className="text-gray-600">
              Our design team combines expertise with creativity to craft logos
              that reflect your brand’s essence and engage your audience.
              <span className="block mt-2">
                We specialize in creating custom logo designs for major brands,
                ensuring that each design effectively conveys your business
                identity and distinguishes you within your industry.
              </span>
            </p>
          </div>
          <div className="5-start">
            <div className="flex justify-center lg:justify-start ">
              <img
                src={pic1}
                alt="Expert 1"
                className="w-20 h-20 rounded-full border-4 border-blue-600"
              />
              <img
                src={pic1}
                alt="Expert 2"
                className="w-20 h-20 -ml-8 rounded-full border-4 border-blue-600"
              />
              <img
                src={pic1}
                alt="Expert 3"
                className="w-20 h-20 -ml-6 rounded-full border-4 border-blue-600"
              />
            </div>
            <h4 className="text-2xl font-semibold text-[#1b2c5c] my-4">
              FIVE-STAR REVIEWS
            </h4>
            <p className="text-lg text-gray-600 mb-4">
              Our clients consistently acknowledge our dedication, creativity
              and attention to detail. Our reviews on platforms like Clutch and
              DesignRush speak for themselves:
            </p>
            <blockquote className="text-lg text-gray-500 italic mb-8 border-l-1 border-blue-400 pl-2">
              “We communicated online, but all our meetings were very
              informative, driven and creative. Digital Silk team developed the
              whole brand book, logo, visuals and a communication plan based on
              our pick. We are getting really positive comments on our visuals.”
            </blockquote>
          </div>

          <div className="project-ownership">
            <div className="flex justify-center lg:justify-start ">
              <img
                src={pic1}
                alt="Expert 1"
                className="w-20 h-20 rounded-full border-4 border-blue-600"
              />
              <img
                src={pic1}
                alt="Expert 2"
                className="w-20 h-20 -ml-8 rounded-full border-4 border-blue-600"
              />
              <img
                src={pic1}
                alt="Expert 3"
                className="w-20 h-20 -ml-6 rounded-full border-4 border-blue-600"
              />
            </div>
            <h4 className="text-2xl font-semibold text-[#1b2c5c] my-4 uppercase">
              Project Ownership
            </h4>
            <p className="text-lg text-gray-600 mb-4">
              Our clients consistently acknowledge our dedication, creativity
              and attention to detail. Our reviews on platforms like Clutch and
              DesignRush speak for themselves:
            </p>
            <p className="text-lg text-gray-500 italic mb-8 ">
              “We communicated online, but all our meetings were very
              informative, driven and creative. Digital Silk team developed the
              whole brand book, logo, visuals and a communication plan based on
              our pick. We are getting really positive comments on our visuals.”
            </p>
          </div>
          <div className="brand-growth">
            <div className="flex justify-center lg:justify-start ">
              <img
                src={pic1}
                alt="Expert 1"
                className="w-20 h-20 rounded-full border-4 border-blue-600"
              />
              <img
                src={pic1}
                alt="Expert 2"
                className="w-20 h-20 -ml-8 rounded-full border-4 border-blue-600"
              />
              <img
                src={pic1}
                alt="Expert 3"
                className="w-20 h-20 -ml-6 rounded-full border-4 border-blue-600"
              />
            </div>
            <h4 className="text-2xl font-semibold text-[#1b2c5c] my-4">
              Brand Growth
            </h4>
            <p className="text-lg text-gray-600 mb-4">
              Our clients consistently acknowledge our dedication, creativity
              and attention to detail. Our reviews on platforms like Clutch and
              DesignRush speak for themselves:
            </p>
            <p className="text-lg text-gray-500 italic mb-8 ">
              We communicated online, but all our meetings were very
              informative, driven and creative. Digital Silk team developed the
              whole brand book, logo, visuals and a communication plan based on
              our pick. We are getting really positive comments on our visuals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
