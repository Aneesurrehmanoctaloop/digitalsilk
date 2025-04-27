import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import logo1 from "../../../assets/images/logo-2.webp";
import logo2 from "../../../assets/images/logo-symple.webp";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import CarouselLogo from "../logodesign/CarouselLogo";
import VideoCard from "../logodesign/VideoCard";
import img1 from "../../../assets/images/webdesign1.webp";
import img2 from "../../../assets/images/carouselLogo2.png";
import img3 from "../../../assets/images/carouselLogo3.png";

const WebHeader = () => {
  const navigate = useNavigate(); // Corrected usage of useNavigate
  const carouselData = [
    {
      image: img1,
      title: "Absolute Dogs",
    },
    {
      image: img2,
      title: "Dog Training",
    },
    {
      image: img3,
      title: "Pet Care",
    },
  ];

  return (
    <div className="font-sans min-h-[100dvh] bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center pt-[10%] py-16 px-6 grid grid-cols-2 h-full">
          <div className="left">
            <div className="bradCrumbs flex gap-x-2 items-center">
              <span className="text-[#04e4ff]">
                <AiOutlineHome />
              </span>
              <span
                className="cursor-pointer hover:text-[#04e4ff] font-medium"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <FaAngleRight />
              <span className="font-medium"> Web Design </span>
              <FaAngleRight />
              <span className="font-semibold"> Custom Web Design </span>
            </div>
            <h1 className="font-bold mb-4 text-start w-2/3 py-4 text-6xl">
              Custom WEbsite Design Company
            </h1>
            <p className="text-xl mb-8 text-left text-gray-100">
              Partner with a top-rated custom website design company to create a
              fully optimized website, ready to drive engagement and
              conversions.
            </p>
            <div className="mt-4 text-gray-100 flex flex-col gap-y-4 text-start">
              <p className="flex items-center gap-x-2">
                <span className="text-[#04e4ff]">
                  <FaAngleRight />
                </span>{" "}
                Create A Unique Digital Experience
              </p>
              <p className="flex items-center gap-x-2">
                <span className="text-[#04e4ff]">
                  <FaAngleRight />
                </span>{" "}
                Drive Higher Conversions
              </p>
              <p className="flex items-center gap-x-2">
                <span className="text-[#04e4ff]">
                  <FaAngleRight />
                </span>{" "}
                Attract Qualified Traffic
              </p>
            </div>
            <Button className="my-4 mt-8" text={"Request a quote"} />
          </div>
          <div className="right">
            <CarouselLogo slides={carouselData} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className=" flex justify-center items-center w-full flex-1">
            <div className="flex items-center justify-between p-4">
              <img src={logo2} alt="logo1" className="" />
              <div className="flex flex-col items-start justify-start space-x-4 ">
                <span className="text-white text-sm font-medium">
                  5 Star DesignRush Reviews
                </span>
                <div className="flex space-x-1 text-start">
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <img src={logo1} alt="logo2" className="" />
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  Web Design Excellence Award
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 w-1/2">
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHeader;
