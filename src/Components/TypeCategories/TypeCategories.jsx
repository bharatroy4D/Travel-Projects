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
            icon: <GiAirplaneDeparture />
        },
        {
            name:"Tour",
            icon:<TfiWorld/>
        },
        {
            name:"Hotel",
            icon:<FaHotel/>
        },
        {
            name:"Visa",
            icon:<FaCcVisa/>
        },
        {
            name:"Apartments",
            icon:<MdApartment/>
        },
        {
            name:"Bus",
            icon:<FaBus/>

        },
        {
            name:"Cruise",
            icon:<SiMentorcruise/>

        },
    ]
    return (
        <div>
            <div className='flex items-center justify-center gap-6 py-5 w-[95%] mx-auto  my-5 '>
                {
                    categories.map(category =>(
                        <div className='flex items-center gap-2 text-xl border hover:bg-blue-600 hover:text-white hover:border-none hover:cursor-pointer  border-blue-600 rounded py-2 px-4'>
                            <h1>{category.icon}</h1>
                            <h2>{category.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TypeCategories;