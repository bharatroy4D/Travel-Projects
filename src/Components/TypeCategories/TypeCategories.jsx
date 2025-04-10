import React from 'react';
import { FaBus, FaCcVisa, FaHotel } from 'react-icons/fa';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { MdApartment } from 'react-icons/md';
import { SiMentorcruise } from 'react-icons/si';
import { TfiWorld } from 'react-icons/tfi';

const TypeCategories = () => {
  const categories = [
    { name: "Flight", icon: <GiAirplaneDeparture className="text-2xl" /> },
    { name: "Tour", icon: <TfiWorld className="text-2xl" /> },
    { name: "Hotel", icon: <FaHotel className="text-2xl" /> },
    { name: "Visa", icon: <FaCcVisa className="text-2xl" /> },
    { name: "Apartments", icon: <MdApartment className="text-2xl" /> },
    { name: "Bus", icon: <FaBus className="text-2xl" /> },
    { name: "Cruise", icon: <SiMentorcruise className="text-2xl" /> },
  ];

  return (
    <div className="w-[95%] mx-auto my-5">
      <div className="flex flex-wrap items-center justify-center gap-6 py-5">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-2 text-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded py-2 px-4 transition duration-300"
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeCategories;
