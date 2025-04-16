import React from "react";

const WorkAction = () => {
  return (
    <div className=" mt-20 flex w-full items-center pl-16 ">
       <div className="w-60 bg-green-700 h-32">
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src="https://www.digitalsilk.com/wp-content/uploads/2022/07/video.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>

    <div className=" bg-gradient-to-r from-[#9536E5] to-[#1B2C5F] w-full  pl-10 flex items-start flex-col justify-center h-20 ">
      <p className="font-bold capitalize">See Our Work In action</p>
      <h2 className="uppercase">1 minute</h2>
    </div>
   
  </div>
  
  );
};

export default WorkAction;
