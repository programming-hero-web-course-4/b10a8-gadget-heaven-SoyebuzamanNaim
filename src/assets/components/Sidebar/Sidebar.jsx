import React, { useState } from "react";

const Sidebar = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Product");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="p-4 bg-base-100 rounded-lg shadow-lg ">
      <ul className="space-y-3">
        {["All Product", ...categories].map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`block w-full text-left p-5 text-xl  rounded-2xl  ${
                selectedCategory === category
                  ? "bg-purple-600 text-white font-extrabold"
                  : "bg-gray-50 text-gray-600 border border-gray-300"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
