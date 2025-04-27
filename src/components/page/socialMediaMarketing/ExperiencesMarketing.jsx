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

const ExperiencesMarketing = () => {
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
      type: "Project Owner",
      logo: project1,
      description:
        "We handle every social media project uniquely depending on its needs and goals, but put in the same effort and dedication into leading each project and driving it to completion.",
    },
    {
      id: 2,
      type: "Transarency",
      logo: project2,
      description:
        "A strong focus on B2B projects to ensure businesses maximize their digital impact and connect with their target audiences effectively.",
    },
    {
      id: 3,
      type: "Results",
      logo: project3,
      description:
        "B2C projects designed to engage customers directly through innovative marketing strategies and creative content delivery.",
    },
    {
      id: 4,
      type: "ecommerce",
      logo: project4,
      description:
        "E-commerce solutions that deliver seamless shopping experiences while increasing sales and customer engagement.",
    },
    {
      id: 5,
      type: "featured",
      logo: project5,
      description:
        "High-impact projects tailored to showcase the power of a brand through effective marketing and innovative campaigns.",
    },
    {
      id: 6,
      type: "b2b",
      logo: project6,
      description:
        "Focused on creating sustainable B2B relationships through high-level marketing strategies that drive success.",
    },
  ];

  const activeProjects = projects.filter(
    (project) => project.type === activeTab
  );

  return (
    <div className="py-12">
      {/* Top Header */}
      <div className="container text-white">
        <h4 className="text-center font-semibold uppercase text-xl text-[#04e4ff]">
          Our Difference
        </h4>
        <h4 className="text-center font-semibold text-gray-700 text-4xl mt-2">
          Experience Social Media Marketing With Digital Silk
        </h4>
        <p className="text-center text-gray-600 font-medium text-lg mt-8 w-2/5 mx-auto">
          Here are the building blocks we lean on to build lasting client
          relationships.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-16 container flex gap-4 justify-center flex-wrap">
        {tabs.map((data) => {
          const isActive = activeTab === data.title;
          return (
            <div
              key={data.id}
              onClick={() => setActiveTab(data.title)}
              className={`w-32 h-32 cursor-pointer rounded-md group flex flex-col gap-2 justify-center items-center transition-all duration-300 ${
                isActive ? "bg-white" : ""
              }`}
            >
              <span
                className={`text-lg font-medium uppercase ${
                  isActive
                    ? "text-[#04e4ff]"
                    : "bg-transparent text-[#1B2C5C] group-hover:text-[#01AFE9]"
                }`}
              >
                {data.icon}
              </span>
              <span
                className={`text-lg font-medium uppercase ${
                  isActive
                    ? "bg-gradient-to-r from-[#04e4ff] to-[#1B2C5C] text-transparent bg-clip-text"
                    : "bg-transparent text-[#1B2C5C] group-hover:text-[#01AFE9]"
                }`}
              >
                {data.title}
              </span>
              <span>
                <IoMdArrowDropright
                  size={30}
                  className={`rotate-90 ${
                    isActive ? "text-[#01AFE9]" : "opacity-0"
                  }`}
                />
              </span>
            </div>
          );
        })}
      </div>

      {/* Project List */}
      <div className="container px-12 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-16">
        {activeProjects.map((project) => (
          <div
            key={project.id}
            className={`relative cursor-pointer group flex items-center justify-between gap-8 ${
              project.id % 2 === 1 ? "" : "flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="flex-shrink-0 w-1/2">
              <img
                src={project.logo}
                alt={`Project ${project.id}`}
                className="w-[95%] h-auto"
              />
            </div>

            {/* Text Section */}
            <div className="w-1/2  flex flex-col gap-y-4 justify-between">
              <p className="mt-2 text-xl font-semibold">{project.type}</p>
              <p className="mt-2 text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesMarketing;
