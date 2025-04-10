import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const PopularTour = ({ popularTour }) => {
  const { name, image, location, description, rating } = popularTour;

  return (
    <div data-aos="fade-up"  data-aos-duration="1000">
      <motion.div
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-500"
      >
        {/* Image Section */}
        <div className="relative w-full h-52 overflow-hidden group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <h2 className="text-white text-xl font-semibold tracking-wide text-center px-2">
              {name}
            </h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-5 flex flex-col justify-between h-[calc(100%-13rem)]">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 leading-tight">{name}</h3>
            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold">
              <FaStar className="text-base" />
              {rating}
            </div>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {description.length > 100 ? description.slice(0, 100) + '...' : description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <IoLocationSharp className="text-blue-500 text-lg" />
              {location}
            </div>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition transform shadow-md">
              View
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PopularTour;
