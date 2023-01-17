import React from "react";
import Category from "./Category";
import Videos from "./Videos";

const Body = () => {
  const categories = [
    "Add",
    "Music",
    "Bollywood Music",
    "Bhavya Gandhi",
    "Dramedy",
    "Sumona Chakravarti",
    "Comedy",
    "Live",
    "Gaming",
    "Tamil Cinema",
    "News",
    "Podcasts",
    "Bhajan Music",
    "Cooking Shows",
    "Cricket",
    "Lectures",
    "Physics",
    "Children's Music",
    "Courses",
    "Cars",
    "Recently Uploaded",
  ];
  return (
    <div className="ml-[245px]">
      {/* Video Categories */}
      <div className="flex fixed bg-[#0f0f0f] flex-row ml-2  max-w-[1630px] text-center scrollbar-hide overflow-x-auto">
        {categories.map((cat) => (
          <Category title={cat} />
        ))}
      </div>
      {/* VIDEOS */}
      <div className="mt-[110px]">
        <Videos />
      </div>
    </div>
  );
};

export default Body;