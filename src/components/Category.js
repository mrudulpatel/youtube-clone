import React from "react";

const Category = ({ title }) => {
  return (
    <div className="m-3 border min-w-max border-[#2e2e2e] flex flex-row items-center rounded-md cursor-pointer hover:text-white hover:bg-[#2e2e2e] transition-all ease-in duration-400">
      <p className="p-2 w-full h-full">{title}</p>
    </div>
  );
};

export default Category;
