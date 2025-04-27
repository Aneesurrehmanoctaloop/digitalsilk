import React, { useState } from "react";

const VideoCard = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true); // Expand video
  };

  const handleCloseClick = () => {
    setIsVideoPlaying(false); // Close the expanded video
  };

  return (
    <div className="flex items-center justify-end pt-8 p-6 rounded-lg shadow-lg">
      {/* Video Section */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isVideoPlaying
            ? "fixed top-20 left-20 right-20 h-[80dvh] w-[80dvh] "
            : "w-[220px] h-[140px]"
        }`}
      >
        <div className="relative w-full h-full">
          {!isVideoPlaying && (
            <div
              className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center cursor-pointer"
              onClick={handlePlayClick}
            >
              <div className="text-white text-3xl">►</div>
            </div>
          )}
          <iframe
            src="https://www.youtube.com/embed/Qv2CZoeLOPI"
            className="w-full h-full transition-all duration-500 ease-in-out"
            frameBorder="0"
            allowFullScreen
            title="Video"
          ></iframe>
          {isVideoPlaying && (
            <button
              onClick={handleCloseClick}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
            >
              ✖
            </button>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="ml-6 text-white flex flex-col justify-center">
        <h2 className="text-xl font-medium">See Our Work</h2>
        <p className="text-3xl mt-2 font-bold">IN ACTION</p>
        <p className="text-lg mt-2">1 MINUTE</p>
      </div>
    </div>
  );
};

export default VideoCard;
