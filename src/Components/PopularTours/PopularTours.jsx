import React, { useEffect, useState } from 'react';
import PopularTour from './PopularTour';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const PopularTours = () => {
    const [popularTours, setPopularTours] = useState([]);
    console.log(popularTours)
    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setPopularTours(data))
    }, [])

    const popularData = popularTours.filter(popular => popular.category === 'Historical');
    return (
        <div className='px-10'>
            <div className='flex justify-between'>
                <h1 className='text-4xl text-center md:text-left font-medium pb-8'>Popular Tours</h1>
                <div className='hidden md:inline-flex gap-1  items-center text-3xl '>
                    <FaArrowCircleLeft className='hover:text-blue-600 transform hover:scale-110'/>
                    <FaArrowCircleRight className='hover:text-blue-600 transform hover:scale-110'/>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    popularData.map(popularTour => <PopularTour
                        key={popularTour.id}
                        popularTour={popularTour}
                    ></PopularTour>)
                }
            </div>
        </div>
    );
};

export default PopularTours;