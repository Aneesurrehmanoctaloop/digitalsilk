import React from "react";
import Button from "../../shared/Button";
import bg from "../../../assets/images/bgsec.webp"; // Assuming bgsec.webp is in the images folder

const ConsultMeeting = () => {
  return (
    <div
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Ready To Grow Your Social Media Presence?
        </h2>
        <div className="w-fit mx-auto pt-4">
          <Button text="request a quote" />
        </div>
      </div>
    </div>
  );
};

export default ConsultMeeting;
