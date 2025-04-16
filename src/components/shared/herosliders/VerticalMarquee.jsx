import React from 'react';
import image1 from '../../../assets/8.jpg.webp';
import image2 from '../../../assets/9.jpg.webp';
import image3 from '../../../assets/10.jpg.webp';
import image4 from '../../../assets/11.jpg.webp';
import image5 from '../../../assets/12.jpg.webp';

const VerticalMarquee = () => {
  return (
    <div className="absolute opacity-70 w-96 -top-20 -bottom-20 right-32 rotate-[16deg] overflow-hidden">
      <div
        className="flex flex-col animate-scrollUp"
        style={{
          animation: 'scrollUp 20s linear infinite',
        }}
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            <img src={image1} alt="" className="h-60 w-full rounded-lg mb-2 object-cover" />
            <img src={image2} alt="" className="h-60 w-full rounded-lg mb-2 object-cover" />
            <img src={image3} alt="" className="h-60 w-full rounded-lg mb-2 object-cover" />
            <img src={image4} alt="" className="h-60 w-full rounded-lg mb-2 object-cover" />
            <img src={image5} alt="" className="h-60 w-full rounded-lg mb-2 object-cover" />
          </React.Fragment>
        ))}
      </div>

      {/* Custom keyframes right here */}
      <style>
        {`
          @keyframes scrollUp {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default VerticalMarquee;
