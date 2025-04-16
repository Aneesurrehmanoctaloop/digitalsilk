import React from "react";
import { FaCheck } from "react-icons/fa";
import WorkAction from "./workAction";
import StarRush from "./StarRush";


const AgencySection = () => {
  return (
    <>
     <section className="bg-[#00042A]   text-white overflow-hidden" >
      {/* Marquee Slider */}
        <div  className="flex   items-center gap-12 pt-8"
              style={{
                animation: 'marquee 20s linear infinite',
              }}>
            {[...Array(2)].flatMap((_, index) => [
                <img
                key={index}
                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png.webp"
                alt="1"
                className="w-32 "
              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png.webp"
                alt="2"
                className="w-32"
             
              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png.webp"
                alt="3"
                className="w-32"
              
              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png"
                alt="1"
                className="w-32"
              
              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png.webp"
                alt="2"
                className="w-32"
               
              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png.webp"
                alt="4"
                className="w-32"
                
              />,
             
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/PG_logo-1.png"
                alt="3"
                className="w-32"

              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png"
                alt="3"
                className="w-32"

              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/nfl_logo-1.png"
                alt="3"
                className="w-32"

              />,
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png"
                alt="3"
                className="w-32"

              />,
             
            
              <img
              key={index}

                src="https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png.webp"
                alt="3"
                className="w-32"

              />
            ])}
          </div>
     

      {/* Agency Content Section */}
      <div className="px-16 mt-16">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-[40px]  font-bold mb-6  leading-12">
            Creative Web Agency Delivering Custom Solutions
          </h1>

          <ul className="space-y-4 text-lg mt-16">
            <li className="flex items-start gap-4">
              <FaCheck className="text-blue-400 mt-1 font-bold" />
              <span className=" font-semibold flex gap-2 ">
                Custom Web Design Solutions 
                <a className="text-[#04E4FF] ">To Drive Conversions</a>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#04E4FF] mt-1 font-bold" />
              <span className=" font-semibold flex gap-2 ">
                Effective Marketing Campaigns
                <a className="text-[#04E4FF] font-bold">To Generate Growth</a>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#04E4FF] mt-1" />
              <span className=" font-semibold flex gap-2 ">
                Tailored Branding Strategies
                <a className="text-[#04E4FF] ">To Drive Engagement</a>
              </span>
            </li>
            <li className="flex items-start gap-10">
              <p className="pt-6  text-[16px]">
                Digital Silk is a web design company & digital marketing agency
                focused on growing brands online. We create effective brand
                strategies, custom web design, development, and digital
                marketing solutions to generate greater brand engagement and
                conversions. We work closely with our clients to ensure each
                project meets their brand guidelines and business goals and
                provide technical and marketing expertise to ensure optimal
                results.
              </p>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://www.digitalsilk.com/wp-content/uploads/2025/01/web-designs-with-trophy.png.webp"
            alt="Agency"
            className="w-full  "
          />
        </div>
      </div>
      </div>
      <WorkAction />
      <StarRush/>
     
    </section>
    <style>
    {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
    </style>
     </>
   
  );
};

export default AgencySection;
