import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = ({handleFilterData}) => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className='flex flex-wrap gap-4 justify-center px-1 py-16'>
            {
                categories.map(category=> <Category 
                    category ={category}
                    handleFilterData={handleFilterData}
                ></Category> )
            }
        </div>
    );
};

export default Categories;