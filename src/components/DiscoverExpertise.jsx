import React from 'react';
import leftlogo from "../assets/expertise1.webp"
import mobicon from "../assets/mob1.svg"
import mobicon2 from "../assets/mob2.webp"

const DiscoverExpertise = () => {
    const projects=[
        {
            id:1,
            title:"Custom Web Design",
            desc:"Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience.",

        },
        {
            id:2,
            title:"Responsive Web Design",
            desc:"We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site.",

        },
        {
            id:3,
            title:"Website Redesign",
            desc:"Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.",

        },
        {
            id:4,
            title:"UX/UI Web Design",
            desc:"Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional.",

        },
        {
            id:5,
            title:"Search Engine Optimization",
            desc:"We offer a comprehensive range of services designed to boost your website’s ranking and attract organic, non-paid Google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.",

        },
        {
            id:6,
            title:"eCommerce Design & Development",
            desc:"We specialize in design and development for leading content management systems (CMSs) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers.",

        },

    ]
  return (
    <div className="bg-[#00042A] px-16 py-12">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        {/* Left - stays visible while scrolling the right */}
        <div className="sticky top-24 h-fit w-[90%]  ">
         <h3 className='uppercase font-medium text-xl text-[#18CCFC]'>Why digital silk?</h3>
         <h2 className='mt-2 font-medium text-5xl text-white flex flex-col gap-1'>
            <span>  Discover Our Expertise</span>
            <span>   as a Web Design</span>
            <span>  Company</span>
            </h2>
            <p className="mt-20 text-white w-[90%]">
            As a full-service web design agency, we handle all your digital needs under one roof. Our custom web design services include thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and encourage engagement.
            </p>
            <div className="mt-20 ">
                <img src={leftlogo} alt=""  />
            </div>
        </div>

        {/* Right - scrolls with the page naturally */}
        <div className="flex flex-col gap-6">
          {projects.map((data) => (
            <div key={data.id} className="w-full relative text-white hover:text-[#1B2C5C] h-96 hover:bg-white  bg-[#ffffff09] border-[#ffffff20]  border p-8 group hover:w-[110%]">
                <div className="w-60 absolute right-8 top-0 z-0 group-hover:block hidden">
                    <img src={mobicon2} alt=""  />
                </div>
                <div className="">
<img src={mobicon} alt="" />

                </div>
                <h3 className='mt-6  font-bold text-3xl z-10 relative'>{data.title}</h3>
                <p className="mt-4 ">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverExpertise;
