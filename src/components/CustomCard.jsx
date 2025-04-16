import React from "react";

const CustomCard = () => {
  return (
    <>
    <div className=" grid grid-cols-4 gap-6 space-x-4 mt-20">
  {/* Card 1 */}
  <div className="p-4 shadow border-l border-blue-500 ">
    <h2 className="text-2xl font-semibold mb-2 text-white">Your choice of platform</h2>
    <p className="text-white">
      also plays a role in the cost. Templated solutions are more affordable,
      while developing a fully custom site will increase the project’s total expense.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-4 shadow border-l border-blue-500">
    <h2 className="text-2xl font-semibold mb-2 text-white">Custom graphic elements</h2>
    <p className="text-white">
      are essential for enhancing your web presence. However, the more complex
      the design requirements, the higher the overall cost.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-4 shadow border-l border-blue-500">
    <h2 className="text-2xl font-semibold mb-2 text-white">After launching</h2>
    <p className="text-white">
      your new website, the next step is to outperform competitors in search
      engine rankings and secure top positions in your industry.
    </p>
  </div>

  {/* Card 4 */}
  <div className="p-4 pb-16 shadow border-l border-r border-blue-500">
    <h2 className="text-2xl font-semibold mb-2 text-white">Our full-service</h2>
    <p className="text-white">
      web design company offers expertise to clients of all sizes. You can use
      our design cost calculator below for an estimate or schedule a free
      consultation with one of our experts to discuss your project’s specifics.
    </p>
  </div>
</div>
    </>


  );
};

export default CustomCard;
