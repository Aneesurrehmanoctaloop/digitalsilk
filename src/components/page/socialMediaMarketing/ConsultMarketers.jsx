import React from "react";
import Button from "../../shared/Button";
const ConsultMarketers = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-500 mb-6">
          Meet With Our Social Media Marketing Experts
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Request a brand audit and free, custom proposal for your logo design
          project.
        </p>
        <div className="w-fit mx-auto pt-4">
          <Button text="Set up a free consultation" />
        </div>
      </div>
    </div>
  );
};

export default ConsultMarketers;
