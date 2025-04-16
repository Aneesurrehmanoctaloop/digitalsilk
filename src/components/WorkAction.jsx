import React from "react";

const WorkAction = () => {
  return (
    <div className="work mt-20 flex w-full">
      {/* test commir  */}
         <div className="video w-120  ml-16">
      <video className="w-full h-full ">
        <source src="https://www.digitalsilk.com/wp-content/uploads/2022/07/video.mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="box bg-blue-400 w-400  pl-20 h-20 mt-3">
      <p className="font-bold">See Our Work In action</p>
      <h2>1 minute</h2>
    </div>
   
  </div>
  
  );
};

export default WorkAction;
