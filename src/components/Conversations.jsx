import React from 'react';
import { FiUser, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Button from './shared/Button';

const Conversations = () => {
  return (
    <div className="bg-[#1B2C5F] px-6 md:px-16 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h3 className="uppercase text-white font-bold text-lg">Take The Silk Road To</h3>
          <h2 className="text-5xl mt-2 font-bold text-[#18CCFC]">Digitizing Your Business Growth</h2>

          {/* Social Follow */}
          <div className="mt-20 flex items-center gap-4 text-white">
            <span className="uppercase font-medium">Follow Us:</span>
            <div className="flex gap-2">
              <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#1B2C5F] transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 border border-white rounded-full hover:bg-white hover:text-[#1B2C5F] transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h1 className="text-white text-2xl font-bold mb-6">Start a Conversation With Us</h1>
          <form className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex items-center border-b border-white text-white">
              <FiUser className="mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent flex-1 py-2 placeholder-white text-white focus:outline-none"
              />
            </div>

            {/* Company Name */}
            <div className="flex items-center border-b border-white text-white">
              <FiUser className="mr-2" />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-transparent flex-1 py-2 placeholder-white text-white focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border-b border-white text-white">
              <FiPhone className="mr-2" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent flex-1 py-2 placeholder-white text-white focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-white text-white">
              <FiMail className="mr-2" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent flex-1 py-2 placeholder-white text-white focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border-b border-white text-white">
              <FiMessageCircle className="mr-2 mt-2" />
              <textarea
                placeholder="Your Message"
                className="bg-transparent flex-1 py-2 placeholder-white text-white focus:outline-none resize-none"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button text={"submit"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
