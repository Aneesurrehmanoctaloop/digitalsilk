import React from "react";
import Button from "../../shared/Button";

const WebServices = () => {
  return (
    <div className="min-h-dvh bg-[#f1f5fe] p-8 ">
      <div className="container mx-auto  p-8 max-w-[1440px]  flex justify-between">
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl font-semibold text-[#04e4ff] mb-4">
            Custom Website Design Services
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Digital Silk is a full-service agency comprised of leading web
            designers from around the globe. Whether building a website from
            scratch or redesigning your current digital presence, our web design
            services include:
          </p>
          <ul className=" space-y-8">
            <li className="text-4xl font-semibold text-[#04e4ff] group mt-2 cursor-pointer">
              Custom Web Design
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                Leverage the expertise of our award-winning designers to build a
                fully custom website for your brand. Our web design deliverables
                include research, analysis and planning, tailored UX and UI
                design and SEO to drive traffic to your site.
                <span className="block mt-4">
                  From branded animations to custom iconography and a
                  strategically planned conversion funnel, our design team will
                  work closely with your website strategist to build a custom
                  design that improves visibility, engagement and conversions
                  for your brand.
                </span>
              </p>
            </li>
            <li className="text-4xl font-semibold text-[#04e4ff] group mt-2 cursor-pointer">
              Custom Website Redesign
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                Reimage your digital presence with expert guidance from our
                award-winning web designers and digital strategists.
                <span className="block my-1">
                  Our website redesign deliverables include strategic website
                  planning, UX and UI design and search engine optimization to
                  increase your ranking and visibility.
                </span>
                Whether you’re looking to modernize your website, improve your
                user experience, transition to a different CMS or all of the
                above, our Digital Silk team will work with you to turn your
                ideas into reality and build a custom website that delivers
                measurable results.
                <span className="block my-1">
                  Explore our{" "}
                  <span className="text-[#04e4ff]">
                    website redesign services.
                  </span>
                </span>
              </p>
            </li>
            <li className="text-4xl font-semibold text-[#04e4ff] group mt-2 cursor-pointer">
              Brand Book & Guidelines
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                After collaborating with you to establish your visual identity,
                we’ll create a custom brand book that outlines logo usage, key
                messaging and more for your brand.
                <span className="block my-1">
                  The result will be a distinctive and memorable brand image for
                  your business.
                </span>
              </p>
            </li>
            <li className="text-4xl font-semibold text-[#04e4ff] group mt-2 cursor-pointer">
              Branding Implementation
              <p className="hidden group-hover:block text-lg font-normal text-gray-500 my-2 ">
                Our team will provide guidance throughout the entire
                implementation process, ensuring that your new brand identity is
                applied consistently and accurately across all touchpoints.
              </p>
            </li>
          </ul>
        </div>

        <div className="w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold  mb-4 text-[#04e4ff]">
            Request A Proposal
          </h2>
          <p className="text-blue-700 text-4xl font-medium mb-6">
            Maximize Your Website’s Potential With Digital Silk
          </p>

          <form>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Company Name"
              />
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Phone"
              />
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Your Message"
              />
            </div>
            <div className="mt-6">
              <Button text={"Request a quote"} />
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default WebServices;
