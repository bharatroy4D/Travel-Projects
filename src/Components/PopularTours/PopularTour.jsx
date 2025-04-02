import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const PopularTour = ({ popularTour }) => {
    const { name, image, location, description, rating } = popularTour;
    return (
        <div>
            <div>
                <div className="card bg-base-100 h-96 md:w-96 shadow-sm  hover:shadow hover:border border-gray-300">
                    <figure>
                        <img
                            src={image}
                            alt="Shoes" className='transform hover:scale-125 duration-1000' />
                    </figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title font-bold">{name}</h2>
                            <p className='flex gap-1 items-center justify-end'>
                                <FaStar className='text-xl text-yellow-300' />
                                <h4 className='text-xl'>{rating}</h4>
                            </p>
                        </div>
                        <p className=''>{description}</p>
                        <div className='flex gap-2 '>
                            <IoLocationSharp className='text-xl text-blue-500' />
                            <p className='text-gray-500'>{location}</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularTour;