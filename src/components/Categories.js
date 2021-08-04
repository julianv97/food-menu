import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="mb-8  flex  items-center justify-between">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
            className="capitalize mx-2 font-semibold py-1 px-4 text-beige hover:bg-beige hover:text-white rounded transition ease-in duration-300"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
