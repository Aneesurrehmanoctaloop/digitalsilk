import React, { useState } from "react";

const NewsletterSignUp = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the form submission
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="bg-gradient-to-b from-[#181d54] to-[#3d46ab] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-white flex">
        <div className="text-start w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Stay On Top Of Branding & Digital Trends
          </h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter to get the latest industry insights and
            web design best practices delivered to your inbox.
          </p>
        </div>
        <div className="flex-1 items-center flex">
          <form
            onSubmit={handleSubmit}
            className="flex w-full border border-gray-200 p-1 justify-center items-center"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 outline-none w-full"
            />
            <button
              type="submit"
              className="px-6 h-full py-4 bg-blue-600 text-white font-semibold  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-nowrap"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
