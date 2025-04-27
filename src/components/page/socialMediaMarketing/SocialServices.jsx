import React from "react";
import Button from "../../shared/Button";
import pic2 from "../../../assets/images/savImg.webp";

const SocialServices = () => {
  return (
    <div className="min-h-dvh bg-[#f1f5fe] p-8 ">
      <div className="container mx-auto  p-8 max-w-[1440px]  flex justify-between">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-semibold text-[#5f8bea] mb-4">
            Social Media Strategy
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            We are a full-service logo design agency that offers visual identity
            design for brands large and small, across industries and target
            markets. Our designers will create a distinctive, eye-catching
            identity that accurately represents your brand and distinguishes you
            from the competition.
          </p>
          <ul className=" space-y-8">
            <li className="text-4xl font-semibold text-[#5f8bea] group mt-2 cursor-pointer">
              Social Media Management
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                75% of consumers recognize a brand by its logo, making it the
                most important identifier of your brand. Our designers will work
                <span className="block my-1">
                  with you to develop a customized logo that represents your
                  brand and offers meaning to your target audience. Your logo
                  design
                </span>
                will include a tailored color palette, typography, and imagery
                that accurately embodies your brand.
              </p>
            </li>
            <li className="text-4xl font-semibold text-[#5f8bea] group mt-2 cursor-pointer">
              Social Media Advertising
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                Reinvent or simply modernize your logo with the help of our logo
                designers.
                <span className="block my-1">
                  Whether part of a rebranding strategy or a light visual
                  identity refresh, our team will work towards your specific
                  goals.
                </span>
              </p>
            </li>
            <li className="text-4xl font-semibold text-[#5f8bea] group mt-2 cursor-pointer">
              Content Creation
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                After collaborating with you to establish your visual identity,
                we’ll create a custom brand book that outlines logo usage, key
                messaging and more for your brand.
                <span className="block my-1">
                  The result will be a distinctive and memorable brand image for
                  your business.
                </span>
              </p>
            </li>
            <li className="text-4xl font-semibold text-[#5f8bea] group mt-2 cursor-pointer">
              Influencer Marketing
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                Our team will provide guidance throughout the entire
                implementation process, ensuring that your new brand identity is
                applied consistently and accurately across all touchpoints.
              </p>
            </li>
          </ul>
          <div>
            <img src={pic2} alt="pic2" />
          </div>
        </div>

        <div className="max-w-[550px] bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold  mb-4 text-[#04e4ff]">
            Request A Proposal
          </h2>
          <p className="text-blue-700 text-4xl font-medium mb-6">
            Design A Logo That Delivers With Digital Silk
          </p>

          <form>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Company Name"
              />
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Phone"
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Your Message"
              />
            </div>
            <div className="mt-6">
              <Button text={"Request a quote"} />
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SocialServices;
