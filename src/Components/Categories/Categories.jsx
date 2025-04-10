import React, { useEffect, useState } from 'react';
import Category from './Category';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Categories = ({ handleFilterData }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='px-4 md:mx-16 py-10 '>
            {/* Header Section */}
            <div  data-aos="fade-up"  data-aos-duration="1000"
             className='flex justify-between items-center mb-8'>
                <h1 className='text-3xl font-bold text-gray-800 hidden md:inline-flex'>Travel Places
                </h1>
                <div className='flex flex-wrap gap-4 justify-center'>
                    {
                        categories.map(category => (
                            <Category
                                key={category.name}
                                category={category}
                                handleFilterData={handleFilterData}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;
