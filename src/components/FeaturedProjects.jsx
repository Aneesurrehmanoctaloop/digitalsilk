import React, { useState } from "react";
import { FaRegStar, FaHandshake } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { id: 1, title: "featured", icon: <FaRegStar size={30} /> },
    { id: 2, title: "b2b", icon: <FaHandshake size={30} /> },
    { id: 3, title: "b2c", icon: <LuWallet size={30} /> },
    { id: 4, title: "ecommerce", icon: <IoCartOutline size={30} /> },
  ];
  const projects = [
    { id: 1, type: "featured", logo: project1 },
    { id: 2, type: "featured", logo: project2 },
    { id: 3, type: "featured", logo: project3 },
    { id: 4, type: "featured", logo: project4 },
    { id: 5, type: "featured", logo: project5 },
    { id: 6, type: "featured", logo: project6 },
    { id: 7, type: "b2b", logo: project6 },
    { id: 8, type: "b2b", logo: project5 },
    { id: 9, type: "b2b", logo: project4 },
    { id: 10, type: "b2b", logo: project3 },
    { id: 11, type: "b2c", logo: project4 },
    { id: 12, type: "b2c", logo: project3 },
    { id: 13, type: "ecommerce", logo: project2 },
    { id: 14, type: "ecommerce", logo: project5 },
  ];
  const activeprojects = projects.filter(
    (project) => project.type === activeTab
  );

  return (
    <div className="bg-[#1e3075] px-16 py-12">
      {/* top header */}
      <div className="container text-white">
        <h4 className="text-center font-bold uppercase text-xl">Our work</h4>
        <h4 className="text-center font-bold text-4xl mt-2">
          Featured Website Design Projects
        </h4>
        <p className="text-center font-medium text-lg mt-2 w-2/5 mx-auto">
          Custom B2C, B2B and eCommerce solutions optimized for traffic,
          engagement and conversion.
        </p>
      </div>

      {/* tabs */}
      <div className="mt-16 container flex gap-4 justify-center flex-wrap">
        {tabs.map((data) => {
          const isActive = activeTab === data.title;
          return (
            <div
              key={data.id}
              onClick={() => setActiveTab(data.title)}
              className={`w-32 h-32 cursor-pointer rounded-md flex flex-col gap-2 justify-center items-center transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-[#1B2C5C]"
                    : "bg-transparent text-white  hover:text-[#01AFE9]"
                }`}
            >
              <span>{data.icon}</span>
              <span className="text-lg font-medium uppercase">
                {data.title}
              </span>
              <span>
                <IoMdArrowDropright
                  size={30}
                  className={`rotate-90 ${isActive ? "" : "opacity-0"}`}
                />
              </span>
            </div>
          );
        })}
      </div>
      {/* project list  */}
      <div className="container grid grid-cols-2 gap-6 mt-16">
        {activeprojects.map((project) => (
          <div key={project.id} className="relative cursor-pointer group">
            <img src={project.logo} alt="" />
            <div className="absolute bg-[#00000050] uppercase text-white font-semibold rounded-full   top-1/3 left-1/3  flex-col items-center p-10 group-hover:flex hidden">
              <span>Click</span>
              <span>to view</span>
              <span>project</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
