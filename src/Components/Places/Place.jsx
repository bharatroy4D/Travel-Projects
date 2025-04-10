import React from 'react';
import plan from '../../assets/plan-md.png';
import price from '../../assets/price.png';
import customer from '../../assets/customer.png';

const Imagination = () => {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* card-1 */}
        <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden border border-gray-200 flex flex-col">
          <figure className="relative w-full h-48 overflow-hidden">
            <img
              src={plan}
              alt="Travel Plan"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold tracking-wide text-center px-2">
                550+ Destinations
              </h2>
            </div>
          </figure>
          <div className="card-body text-center px-6 py-4 flex flex-col justify-between h-full">
            <p className="text-gray-600 text-sm mb-4">
              Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition transform shadow-md">
                View
              </button>
            </div>
          </div>
        </div>

        {/* card-2 */}
        <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden border border-gray-200 flex flex-col">
          <figure className="relative w-full h-48 overflow-hidden">
            <img
              src={price}
              alt="Affordable Price"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold tracking-wide text-center px-2">
                Best Price Guarantee
              </h2>
            </div>
          </figure>
          <div className="card-body text-center px-6 py-4 flex flex-col justify-between h-full">
            <p className="text-gray-600 text-sm mb-4">
              Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition transform shadow-md">
                View
              </button>
            </div>
          </div>
        </div>

        {/* card-3 */}
        <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden border border-gray-200 flex flex-col">
          <figure className="relative w-full h-48 overflow-hidden">
            <img
              src={customer}
              alt="Customer Support"
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold tracking-wide text-center px-2">
                Top Quality Customer Support
              </h2>
            </div>
          </figure>
          <div className="card-body text-center px-6 py-4 flex flex-col justify-between h-full">
            <p className="text-gray-600 text-sm mb-4">
              Aliquip enim ad quis duis velit ad aliqua dolore elit eae velit labore nulla.
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition transform shadow-md">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagination;
