import React from "react";
import Button from "./shared/Button";
import VerticalMarquee from "./shared/herosliders/VerticalMarquee";
import VerticalMarquee2 from "./shared/herosliders/VerticalMarquee2";
import VerticalMarquee3 from "./shared/herosliders/VerticalMarquee3";

const HeroSection = () => {
  return (
    <div className="relative h-full flex items-center  px-16 overflow-hidden ">
      {/* used for the spreded bg affect  */}
      <div className="absolute bg-[#725AC1] rounded-full shadow-[0_0_30px_100px_#725AC1] opacity-40 w-[50%] top-0 bottom-0 left-0"></div>
      {/* teh left hero section data  */}
      <div className="container  z-10  mx-auto flex items-center justify-between ">
        <div className="w-[60%] flex flex-col gap-2   ">
          <h3 className="text-xl font-medium text-white uppercase">
            Premium web design agency
          </h3>
          <h1 className="text-white font-bold text-7xl uppercase leading-20">
            We grow brands online
          </h1>
          <h4 className="text-lg font-medium text-white ">
            Custom websites, Branding & Digital Marketing
          </h4>
          <div className="mt-6">
            <Button text={"Request a quote"} />
          </div>{" "}
        </div>
        <div className="flex"></div>
      </div>
      {/* vertical marquee slides on bg  */}
      <VerticalMarquee />
      <VerticalMarquee2 />
      <VerticalMarquee3 />
    </div>
  );
};

export default HeroSection;
