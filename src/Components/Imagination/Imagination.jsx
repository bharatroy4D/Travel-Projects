import React from 'react';
import plan from '../../assets/plan-md.png';
import price from '../../assets/price.png';
import customer from '../../assets/customer.png';

const Imagination = () => {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* card-1 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-6 duration-700 border-b-4 border-blue-700">
          <figure className="px-10 pt-10">
            <img
              src={plan}
              alt="A variety of travel destinations"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-medium text-gray-800">550+ Destinations</h2>
            <p className="text-lg text-gray-600">
              Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.
            </p>
          </div>
        </div>

        {/* card-2 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-6 duration-700 border-b-4 border-blue-700">
          <figure className="px-10 pt-10">
            <img
              src={price}
              alt="Affordable pricing options"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-medium text-gray-800">Best Price Guarantee</h2>
            <p className="text-lg text-gray-600">
              Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.
            </p>
          </div>
        </div>

        {/* card-3 */}
        <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-6 duration-700 border-b-4 border-blue-700">
          <figure className="px-10 pt-10">
            <img
              src={customer}
              alt="Exceptional customer support"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-medium text-gray-800">Top Quality Customer Support</h2>
            <p className="text-lg text-gray-600">
              Aliquip enim ad quis duis velit ad aliqua dolore elit eae velit labore nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagination;
