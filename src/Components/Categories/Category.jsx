import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <h1 className='text-xl font-medium border border-blue-600 rounded py-1 px-3 hover:bg-blue-600 hover:text-white hover:shadow'>{category.name}</h1>
        </div>
    );
};

export default Category;