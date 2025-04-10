import React from 'react';
import { FaBus, FaCcVisa, FaHotel } from 'react-icons/fa';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { MdApartment } from 'react-icons/md';
import { SiMentorcruise } from 'react-icons/si';
import { TfiWorld } from 'react-icons/tfi';

const TypeCategories = () => {
    const categories = [
        {
            name: "Flight",
            icon: <GiAirplaneDeparture className='text-2xl' />
        },
        {
            name: "Tour",
            icon: <TfiWorld className="text-2xl" />
        },
        {
            name: "Hotel",
            icon: <FaHotel className="text-2xl" />
        },
        {
            name: "Visa",
            icon: <FaCcVisa className="text-2xl" />
        },
        {
            name: "Apartments",
            icon: <MdApartment className="text-2xl" />
        },
        {
            name: "Bus",
            icon: <FaBus className="text-2xl" />
        },
        {
            name: "Cruise",
            icon: <SiMentorcruise className="text-2xl" />
        },
    ];

    return (
        <div>
            <div className='flex flex-wrap items-center justify-center gap-6 py-5 w-[95%] mx-auto my-5'>
                {
                    categories.map((category, index) => (
                        <div key={index} className='flex items-center gap-2 text-xl font-semibold border hover:bg-blue-600 hover:text-white hover:border-none hover:cursor-pointer border-blue-600 rounded py-2 px-4 transition-all duration-300 ease-in-out focus:outline-none'>
                            <div className="flex items-center justify-center">{category.icon}</div>
                            <h2>{category.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TypeCategories;
