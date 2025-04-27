import React from "react";
import Button from "../../shared/Button";
import bg from "../../../assets/images/bgsec.webp";

const RequestQuoteSection = () => {
  return (
    <div
      className=" py-20 px-6 md:px-16"
      style={{
        backgroundImage: `url(${bg})`, // Use the imported image for background
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Grow Your Brand Online?
        </h2>
        <div className="w-fit mx-auto mt-4">
          <Button text="request a quote" />
        </div>
      </div>
    </div>
  );
};

export default RequestQuoteSection;
