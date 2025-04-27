import React, { useState } from "react";
import { FaRegStar, FaHandshake } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import project1 from "../../../assets/project1.png";
import project2 from "../../../assets/project2.png";
import project3 from "../../../assets/project3.png";
import project4 from "../../../assets/project4.png";
import project5 from "../../../assets/project5.png";
import project6 from "../../../assets/project6.png";
import { IoMdArrowForward } from "react-icons/io";

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { id: 1, title: "featured", icon: <FaRegStar size={30} /> },
    { id: 2, title: "b2b", icon: <FaHandshake size={30} /> },
    { id: 3, title: "b2c", icon: <LuWallet size={30} /> },
    { id: 4, title: "ecommerce", icon: <IoCartOutline size={30} /> },
  ];

  const projects = [
    {
      id: 1,
      type: "featured",
      logo: project1,
      description: {
        head: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
        subDsc1:
          "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
        subDsc2:
          "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless, while dynamic content and video marketing showcase the brand’s expertise and engage customers on a deeper level.",
        websiteLink: "#",
      },
    },
    {
      id: 2,
      type: "featured",
      logo: project2,
      description: {
        head: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
        subDsc1:
          "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
        subDsc2:
          "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless, while dynamic content and video marketing showcase the brand’s expertise and engage customers on a deeper level.",
        websiteLink: "#",
      },
    },
    {
      id: 3,
      type: "featured",
      logo: project3,
      description: {
        head: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
        subDsc1:
          "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
        subDsc2:
          "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless, while dynamic content and video marketing showcase the brand’s expertise and engage customers on a deeper level.",
        websiteLink: "#",
      },
    },
    {
      id: 4,
      type: "featured",
      logo: project4,
      description: {
        head: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
        subDsc1:
          "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
        subDsc2:
          "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless, while dynamic content and video marketing showcase the brand’s expertise and engage customers on a deeper level.",
        websiteLink: "#",
      },
    },
    {
      id: 5,
      type: "featured",
      logo: project5,
      description: {
        head: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
        subDsc1:
          "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
        subDsc2:
          "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless, while dynamic content and video marketing showcase the brand’s expertise and engage customers on a deeper level.",
        websiteLink: "#",
      },
    },
    {
      id: 6,
      type: "featured",
      logo: project6,
      description: {
        head: "Reeling In More Customers: J&H Tackle’s eCommerce Evolution",
        subDsc1:
          "We reimagined J&H Tackle’s online store by enhancing UX/UI design and optimizing conversion funnels.",
        subDsc2:
          "Improved visual hierarchy, streamlined navigation and customer-centric design make shopping for fishing gear effortless, while dynamic content and video marketing showcase the brand’s expertise and engage customers on a deeper level.",
        websiteLink: "#",
      },
    },
    // Other projects go here...
  ];

  const activeProjects = projects.filter(
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

      {/* project list */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-16">
        {activeProjects.map((project) => (
          <div
            key={project.id}
            className={`relative cursor-pointer group flex items-center justify-between gap-8 ${
              project.id % 2 === 1 ? "" : "flex-row-reverse"
            }`}
          >
            {/* Image section */}
            <div className="flex-shrink-0 w-1/2 ">
              <img
                src={project.logo}
                alt={`Project ${project.id}`}
                className="w-[95%] h-auto "
              />
            </div>

            {/* Text section */}
            <div className="w-1/2 text-white flex flex-col gap-y-4 justify-between ">
              <h5 class="text-4xl font-bold bg-gradient-to-r from-[#04e4ff] to-[#009cff] via-[#009cff] bg-clip-text text-transparent">
                {project.description.head}
              </h5>
              <p className="mt-2 text-lg">{project.description.subDsc1}</p>
              <p className="mt-2 text-lg">{project.description.subDsc2}</p>
              <div className="grid grid-cols-2 gap-x-4 mt-8">
                <button className="uppercase cursor-pointer flex text-[#18CCFC] hover:text-white text-xl items-center gap-x-2 font-bold  hover:gap-x-4">
                  Launch WEBSITE
                  <span>
                    <IoMdArrowForward size={20} />
                  </span>
                </button>
                <button className="uppercase cursor-pointer flex text-white hover:text-[#18CCFC] items-center gap-x-2 font-bold  hover:gap-x-4">
                  request a quote
                  <span>
                    <IoMdArrowForward size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
