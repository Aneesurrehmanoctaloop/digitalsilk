import React from "react";
import { FaArrowRight } from "react-icons/fa"; // using react-icons

const BestWebAgency = () => {
  return (
    <div className="bg-[#F1F5FE] px-16 py-10">
      <div className="container ">
        <div className="  text-center">
          <p className=" text-[#3B7BCE] text-xl uppercase font-black">
            Finding & Working With The
          </p>
          <h2 className="text-[#3B7BCE] font-bold text-4xl mt-2">
            Best Web Design Agency
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  py-10">
          {/* Column 1: Heading */}
          <div>
            <h1 className="text-3xl font-bold text-[#3B7BCE] p-8">
              Whether starting a brand from the ground up or overhauling your
              current website, working with a website design agency gives you
              access to the top experts in web design.
            </h1>
          </div>

          {/* Column 2: Paragraph */}
          <div>
            <p className="text-[#5F6568] p-10">
              In turn, these experts have access to leading tools, modern
              trends, best practices and more to help ensure that your website
              is not only unique but built to perform — if you find the right
              agency, that is. Not all agencies are created equal.
              <br />
              <br /> We’ll breakdown exactly what to look for in a partner to
              help you choose the best website design agency for your project.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full max-w-[600px] mx-auto">
        {/* table  */}
        <div className="bg-white shadow-lg rounded-md p-4 md:p-6 mb-10">
          <h3 className="text-xl font-bold mb-2 pb-2 text-[#1B2C5F] border-[#3B7BCE] border-b">
            Table of Contents
          </h3>
          <ul className="space-y-2">
            {[
              "How To Find The Best Web Design Company",
              "Step 1: Define Your Needs",
              "Step 2: Start Your Search",
              "Step 3: Research & Shortlist Agencies",
              "Step 4: Meet With The Agency(s)",
              "Step 5: Make Your Decision",
              "Why Digital Silk Is The Best Web Design Agency For Your Project",
            ].map((item, idx) => (
              <li
                key={idx}
                className="group relative overflow-hidden flex items-center text-sm gap-2 border-[#3B7BCE] border-b py-2 text-[#1B2C5F] font-medium cursor-pointer"
              >
                <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-blue-200 z-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <FaArrowRight className="text-[#3B7BCE]" />
                  <span>{item}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* content  */}

        <div className="py-6 text-[#1B2C5F] space-y-10 ">
          <section className="space-y-4">
            <p>
              Whether you’re starting a brand from the ground up or your current
              website needs a complete overhaul due to lack of performance,
              working with a website design agency gives you access to the top
              experts in web design.
            </p>
            <p>
              In turn, these experts have access to leading tools, modern
              trends, best practices and more to help ensure that your website
              is not only unique but built to perform — if you find the right
              agency, that is. Not all agencies are created equal.
            </p>
            <p>
              We’ll breakdown exactly what to look for in a partner to help you
              choose the best website design agency for your project.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">
              How To Find The Best Web Design Company
            </h2>
            <p>
              Follow the step-by-step guide below to kickstart your search and
              learn how to evaluate potential web design companies to partner
              with your brand.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Step 1: Define Your Needs
            </h3>
            <p>
              Before you start the hunt, the first step is to fully define your
              needs. Here are three key areas to consider:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Design needs:</strong> Are you looking to build a new
                website from the ground up? Or do you have a current digital
                presence that needs either a light refresh or a complete
                overhaul?
              </li>
              <li>
                <strong>Design approach:</strong> Are you satisfied to settle
                for an agency that works with templates or do you need an agency
                that designs custom websites?
              </li>
              <li>
                <strong>Website goals:</strong> What are your specific goals for
                the website? For example: Higher search engine ranking, more
                traffic, greater engagement, increased conversion.
              </li>
              <li>
                <strong>Website requirements:</strong> What are your specific
                requirements for the website? Do you have a platform in mind?
                Create a list of must-have features and functionalities, along
                with a list of nice-to-haves if your budget allows.
              </li>
            </ul>
            <p>
              Creating a website request for proposal (RFP) document can help
              you organize and outline your project for potential agencies.
              Agencies that are interested in taking on your project can then
              use this document to respond by submitting a proposal or a bid.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Step 2: Start Your Search
            </h3>
            <p>
              The best way to find an agency for your digital project is, of
              course, online! Use a search engine or check out a B2B marketplace
              like DesignRush — you can actually post your RFP here and wait for
              a bid, or search agencies and reach out to a few on your own.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Step 3: Research & Shortlist Agencies
            </h3>
            <p>
              Whether you use a marketplace or Google to find potential
              partners, the next step is thorough research. For each agency
              you’re interested in, explore the agency’s:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Website:</strong> A professional website design is a
                must.
              </li>
              <li>
                <strong>Services:</strong> Some agencies focus on specific areas
                while others offer full-service solutions.
              </li>
              <li>
                <strong>Portfolio:</strong> Check their capabilities in various
                industries.
              </li>
              <li>
                <strong>Client testimonials:</strong> Understand their
                reputation and client experience.
              </li>
            </ul>
            <p>Shortlist 3-5 agencies for meetings.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Step 4: Meet With The Agency(s)
            </h3>
            <p>Meeting allows you to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Understand their processes and team structure</li>
              <li>
                Ask questions like:
                <ul className="list-[circle] list-inside ml-5 space-y-1">
                  <li>What sets you apart?</li>
                  <li>Do you have experience in my industry?</li>
                  <li>What does the process look like?</li>
                  <li>How do you communicate?</li>
                  <li>What’s the cost and timeline?</li>
                  <li>How do you measure success?</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Step 5: Make Your Decision
            </h3>
            <p>
              Choose the agency based on experience, past work, communication
              style, and how they measure results. The right agency will be
              transparent and collaborative.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-semibold">
              Why Digital Silk Is The Best Web Design Agency For Your Project
            </h2>
            <p>
              Whether you need a brand-new website or a redesign, Digital Silk
              is a leading full-service web design agency comprised of trusted
              website design experts.
            </p>
            <p>
              <strong>
                What does Digital Silk offer that other agencies don’t?
              </strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Project ownership:</strong> On-time delivery and
                detailed management.
              </li>
              <li>
                <strong>Expert guidance:</strong> Team includes award-winning
                designers and strategists.
              </li>
              <li>
                <strong>Transparency:</strong> Regular updates and open
                communication.
              </li>
              <li>
                <strong>Results:</strong> Strategic work leading to measurable
                growth and success.
              </li>
            </ul>
            <p>
              If you’re looking for a reliable web design team that will deliver
              a custom website that’s unique to your brand identity, your
              offering and your target market, you’ve found your match in
              Digital Silk.
            </p>
            <p>
              Our trusted web design experts work with brands across industries
              to deliver fully custom website projects, from web design and
              development to website strategy, content creation and more.
            </p>
            <p>
              <strong>
                Schedule a consultation to meet our team and get a custom quote
                for your project.
              </strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BestWebAgency;
