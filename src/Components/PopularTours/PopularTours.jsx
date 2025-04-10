import React, { useEffect, useState } from 'react';
import PopularTour from './PopularTour';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const PopularTours = () => {
  const [popularTours, setPopularTours] = useState([]);

  useEffect(() => {
    fetch('place.json')
      .then(res => res.json())
      .then(data => setPopularTours(data))
      .catch(err => console.error('Error loading data:', err));
  }, []);

  const popularData = popularTours.filter(tour => tour.category === 'Historical');

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div  data-aos="fade-up"  data-aos-duration="1000"
      className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-800">Popular Tours</h1>
        <div className="hidden md:flex items-center gap-3 text-3xl text-gray-600">
          <FaArrowCircleLeft className="hover:text-blue-600 cursor-pointer hover:scale-110 transition duration-300" />
          <FaArrowCircleRight className="hover:text-blue-600 cursor-pointer hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          popularData.length > 0 ? (
            popularData.map(tour => (
              <PopularTour key={tour.id} popularTour={tour} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">No tours available at the moment.</p>
          )
        }
      </div>
    </div>
  );
};

export default PopularTours;
