import React from 'react';

const Category = ({ category, handleFilterData, activeCategory }) => {
  const isActive = activeCategory === category.name;

  return (
    <div className="inline-block ">
      <button
        onClick={() => handleFilterData(category)}
        className={`text-lg font-semibold py-2 px-5 rounded-full transition-all duration-300
          ${isActive 
            ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-2xl' 
            : 'bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-600 hover:text-white border border-blue-500 hover:shadow-lg'}
        `}
      >
        {category.name}
      </button>
    </div>
  );
};

export default Category;
