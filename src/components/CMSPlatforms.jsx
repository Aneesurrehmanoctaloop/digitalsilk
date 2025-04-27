import React from "react";
import cmslogo from "../assets/cms1.webp";
import Button from "./shared/Button";
const CMSPlatforms = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white px-16 ">
      <div className="container grid grid-cols-2 gap-6">
        <div className="pl-8 flex flex-col justify-between">
          <div className="">
            <h3 className="mt-16 text-[#1B2C5F] text-[40px] font-bold">
              CMS Platform Tailored For Client Needs
            </h3>
            <p className="mt-10 text-[#1B2C5F] ">
              No matter which Content Management System (CMS) your website
              utilizes, our experts are here to help. We tailor our services to
              meet your specific needs, ensuring your CMS is optimized for
              performance, flexibility, and ease of use.
            </p>
          </div>
          <div className="">
            <img src={cmslogo} alt="" />
          </div>
        </div>
        <div className="">
          {/* wrodpress  */}
          <div className="py-12 flex items-center border-l-6 border-[#3B7BCE] gap-1 hover:bg-[#3b7bce70] hover:w-[110%] transition-all group pr-6">
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/09/g10.svg"
              alt=""
            />
            <div className="text-[#1B2C5F] ">
              <h3 className="text-3xl font-semibold mb-4">WordPress</h3>
              <p>
                At Digital Silk, we deliver high-performance, fully customized
                WordPress websites that align perfectly with your brand and
                business goals. Our experts create seamless, user-friendly
                experiences designed to drive engagement and conversions. With
                robust security measures and ongoing support, we ensure your
                WordPress site remains optimized, secure, and scalable as your
                business grows.
              </p>
              <div className="mt-6 group-hover:block hidden">
                <Button text={"Wordpress development"} />
              </div>
            </div>
          </div>
          {/* shoppify  */}
          <div className="py-12 flex items-center border-l-6 border-[#95bf47] gap-1 hover:bg-[#95bf4780] hover:w-[110%] transition-all group pr-6">
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/09/g10-1.svg"
              alt=""
            />
            <div className="text-[#1B2C5F] ">
              <h3 className="text-3xl font-semibold mb-4">Shopify</h3>
              <p>
                Our web design company excels in planning, developing, and
                scaling Shopify websites to drive growth. From concept to
                launch, our consultants guide you through every step, while our
                expert developers and designers transform your vision into a
                thriving e-store. We turn your ideas into a powerful online
                presence that fosters growth and success.
              </p>
              <div className="mt-6 group-hover:block hidden">
                <Button text={"Shopify development"} />
              </div>
            </div>
          </div>
          {/* magento  */}
          {/* shoppify  */}
          <div className="py-12 flex items-center border-l-6 border-[#f26322] gap-1 hover:bg-[#f2632270] hover:w-[110%] transition-all group pr-6">
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2024/09/g10-2.svg"
              alt=""
            />
            <div className="text-[#1B2C5F] ">
              <h3 className="text-3xl font-semibold mb-4">Magento</h3>
              <p>
                As a top-rated Magento web development and design company, we
                create premium online stores that attract organic traffic,
                deliver exceptional user experiences, and significantly boost
                your revenue. Our expertise ensures your Magento site stands out
                and performs at its best, driving growth and success for your
                business.
              </p>
              <div className="mt-6 group-hover:block hidden">
                <Button text={"Mangeto development"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSPlatforms;
