import React from 'react'

const ChooseWebDesign = () => {
  return (
    <div className='px-16 bg-white py-14'>
        <div className="container">
            <div className="grid grid-cols-2 gap-10 ">
                <div className='text-4xl font-bold text-[#1B2C5F]'>Why Choose <span className='text-[#18CCFC]'>Professional</span> Web Design Company?</div>
                <div className="">
                    <img src="https://www.digitalsilk.com/wp-content/uploads/2024/09/image-104-1.png.webp" alt="" />
                </div>
            </div>
            {/* first cards  */}
            <div className="grid -mt-10 pb-16 border-b-3 border-[#18CCFC]  z-10 relative    grid-cols-2 gap-12">
<CommonCard number={"01"} title={"Have A Clear Web Strategy"} desc={"Before launching your digital presence, having a well-defined plan is crucial. Our experts conduct thorough research on your industry, competitors, and target market to develop a tailored digital strategy that aligns with your goals. This strategic approach ensures a strong foundation for your website’s success."}/>
<CommonCard number={"02"} title={"Build A Strong Online Presence"} desc={"Establishing a strong and professional online presence positions you as a leader in your industry. We’ve successfully guided numerous clients in building their online authority and are ready to help you achieve the same."}/>
            </div>
             {/* second cards  */}
             <div className="grid mt-10 pb-16 border-b-3 border-[#18CCFC]      grid-cols-2 gap-12">
<CommonCard number={"03"} title={"Boost Conversion Rates With User-Centric Design"} desc={"Our expert website designers focus on optimizing your website for an exceptional user experience, transforming visitors into loyal customers. We ensure your site is designed to engage and convert, driving higher conversion rates."}/>
<CommonCard number={"04"} title={"Increase User Engagement"} desc={"Professional website design keeps visitors on your site longer, reducing bounce rates. Our designers create intuitive, easy-to-navigate websites that enhance user engagement and improve conversion rates."}/>
            </div>
             {/* third cards  */}
             <div className="grid mt-10 pb-16 border-b-3 border-[#18CCFC]      grid-cols-2 gap-12">
<CommonCard number={"05"} title={"Create A Custom eCommerce Design for Better Performance"} desc={"Our award-winning designers craft e-Stores with user interfaces that captivate your customers and maximize your revenue. We ensure your online store not only attracts but retains customers effectively."}/>
<CommonCard number={"06"} title={"Optimize For Search Engines"} desc={"We implement proven SEO strategies to enhance your website’s search engine ranking and drive organic traffic, helping you reach a broader audience."}/>
            </div>
              {/* fdourth cards  */}
              <div className="grid mt-10 pb-10      grid-cols-2 gap-12">
<CommonCard number={"07"} title={"Improve Your Load Times And Retain More Visitors"} desc={"Our experts optimize your website’s load times, ensuring fast performance that keeps visitors engaged and boosts your conversion rates."}/>
<CommonCard number={"08"} title={"Receive Ongoing Support And Maintenance"} desc={"With professional website design services, you benefit from continuous support and maintenance. Our team is committed to ensuring your website remains optimized and performs at its best long after launch."}/>
            </div>
        </div>
      
    </div>
  )
}

export default ChooseWebDesign
const CommonCard=({number,title,desc})=>{
    return(
        <div className='flex gap-4'>
            <span className='font-bold text-3xl text-[#18CCFC]'>{number}</span>
            <div>
                <h3 className='text-2xl font-bold text-[#1B2C5F]'>{title}</h3>
                <p className='mt-4 text-[#1B2C5F]'>{desc}</p>
            </div>
        </div>
    )
}
