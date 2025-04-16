import React from "react";

const Table = () => {
  return (
    <>
     <div className="working-agency bg-gray-600">
      <div className="work pt-6">
        <p className="p text-blue-400 text-2xl">Finding & Working With The</p>
        <h2 className="text-blue-400 font-bold text-4xl">Best Web Design Agency</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10">
  {/* Column 1: Heading */}
  <div>
    <h1 className="text-3xl font-bold text-blue-400 p-10">
      Whether starting a brand from the ground up or overhauling your
      current website, working with a website design agency gives you access
      to the top experts in web design.
    </h1>
  </div>

  {/* Column 2: Paragraph */}
  <div>
    <p className="text-white p-10">
      In turn, these experts have access to leading tools, modern trends,
      best practices and more to help ensure that your website is not only
      unique but built to perform — if you find the right agency, that is.
      Not all agencies are created equal.<br/><br/> We’ll breakdown exactly what to
      look for in a partner to help you choose the best website design
      agency for your project.
    </p>
  </div>
  
</div>
<div className="text-center pl-20 pr-20">
<p className="pt-6">
Whether you’re starting a brand from the ground up or your current website needs a 
complete overhaul due to lack of performance, working with a website design agency gives you access to 
the top experts in web design.
</p>
<p lassName="pt-4">
Whether you’re starting a brand from the ground up or your current website needs a 
complete overhaul due to lack of performance, working with a website design agency gives you access to 
the top experts in web design.
</p>
  </div>
    </div>
  
    </>
   
  );
};

export default Table;
