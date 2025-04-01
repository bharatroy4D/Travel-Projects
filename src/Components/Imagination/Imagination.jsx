import React from 'react';
import plan from '../../assets/plan-md.png'
import price from '../../assets/price.png'
import customer from '../../assets/customer.png'

const Imagination = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-15 px-10 '>
                {/* card-1 */}
                <div className="card bg-base-100 md:w-96 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-6 duration-700">
                    <figure className="px-10 pt-10">
                        <img
                            src={plan}
                            alt="Pland-md"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">550+ destinations</h2>
                        <p className='text-xl text-gray-500'>Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.</p>            
                    </div>
                </div>
                {/* card-2 */}
                <div className="card bg-base-100 m:w-96 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-6 duration-700">
                    <figure className="px-10 pt-10">
                        <img
                            src={price}
                            alt="Pland-md"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Best price guarantee
                        </h2>
                        <p className='text-xl text-gray-500'>Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla irure nostrud.</p>            
                    </div>
                </div>
                {/* card-3 */}
                <div className="card bg-base-100 md:w-96 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-6 duration-700">
                    <figure className="px-10 pt-10">
                        <img
                            src={customer}
                            alt="Pland-md"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Top quality customer support</h2>
                        <p className='text-xl text-gray-500'>Aliquip enim ad quis duis velit ad aliqua dolore elit eae velit labore nulla.</p>            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Imagination;