import React from 'react';
import Button from './shared/Button';
import CustomCard from './CustomCard';




const CustomDesign = () => {
  return (
   <div className="px-16  bg-cover bg-center bg-no-repeat  pt-20 "  style={{
    backgroundImage:
      "url('https://www.digitalsilk.com/wp-content/uploads/2024/09/Custom_Web_Design_Pricing.jpg.webp')",
  }}>
     <div
      className="flex container flex-col items-center justify-between text-center"
     
    >
      <h2 className=" text-2xl font-bold md:text-4xl  text-white max-w-12xl mb-8">
        Custom Web Design Pricing For<span className="text-[#04E4FF] px-2">Each Client’s Objectives</span> 
      </h2>

      <ul className="text-white text-lg space-y-4 max-w-4xl">
        <li>
          Every website design project comes with unique challenges and specific
          requirements that influence its final cost. A simple project typically
          ranges from{' '}
          <span className="text-[#04E4FF] font-semibold">$25,000</span> to{' '}
          <span className="text-[#04E4FF] font-semibold">$30,000</span>, while
          more complex endeavors can reach{' '}
          <span className="text-[#04E4FF] font-semibold">$50,000</span> to{' '}
          <span className="text-[#04E4FF] font-semibold">$60,000</span> or more.
        </li>
        <li>
          The technical setup of your website, which directly impacts its
          performance, is a key factor in determining cost. More complex setups
          that demand significant time and effort will naturally increase the
          overall price.
        </li>
      </ul>

      <div className="mt-10 flex justify-center items-center ">
        <Button text={"calculate your website"}/>
      </div>
     <CustomCard/>
    </div>
   </div>
  );
};

export default CustomDesign;
