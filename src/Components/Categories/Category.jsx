import React from 'react';

const Category = ({ category, handleFilterData, activeCategory }) => {
  const isActive = activeCategory === category.name;  // Check if this category is active

  return (
    <div className="inline-block">
      <button
        onClick={() => handleFilterData(category)}  // Set the clicked category as active
        className={`text-base font-medium border rounded py-1 px-3 transition duration-300
          ${isActive ? 'bg-blue-600 text-white' : 'bg-transparent hover:bg-blue-600 hover:text-white'}
        `}
      >
        {category.name}
      </button>
    </div>
  );
};

export default Category;
