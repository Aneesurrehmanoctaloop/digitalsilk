import React from "react";

const StayAhead = () => {
  return (
    <div className="bg-gradient-to-r from-[#9536E5] to-[#3B7BCE] text-white px-16 py-10">
      <div className="container grid grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-5xl font-bold"> Stay Ahead in 2025!</h3>
          <h3 className="text-3xl font-bold mt-4">
            {" "}
            <span className="">Download</span> the Top Digital Trends Shaping
            Branding & Web Design
          </h3>
          <div className="mt-8 h-20 border flex items-center p-1 justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 flex-1 border-none outline-none"
            />
            <button className="h-full bg-[#007aff] w-40 flex justify-center text-lg font-bold uppercase items-center text-white">
              Download
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://www.digitalsilk.com/wp-content/uploads/2024/12/digitalsilk_whitepaper_2025-1024x768.png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default StayAhead;
