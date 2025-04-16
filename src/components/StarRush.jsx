import React from "react";

const StarRush = () => {
  return (
    <div className="start flex items-center justify-start mt-10 ml-10">
      <div className="star-web flex items-center space-x-16">
        {/* Logo Section */}
        <div className="logo ">
         
           
            <div className="text pl-12 text-sm  -mb-8">
              <span className=" text-white ">5 Star DesignRush Reviews</span>
            </div>
            <img
              
              src="https://www.digitalsilk.com/wp-content/uploads/2023/09/dr.png"
              alt="DesignRush Reviews logo"
             
            />
        
        </div>

        {/* Award Text and Logo */}
        <div className="star text-white">
          <small className="text-small">Latest Web Design Award</small>
          <ul>
            <li>
              <picture>
                <source
                  srcSet="https://www.digitalsilk.com/wp-content/uploads/2024/06/logo.png.webp"
                  type="image/webp"
                />
                <img
                  decoding="async"
                  loading="lazy"
                  src="https://www.digitalsilk.com/wp-content/uploads/2024/06/logo.png"
                  alt="Award logo"
                  width="148"
                  height="23"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StarRush;
