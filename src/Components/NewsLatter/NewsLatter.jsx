import React from 'react';
import { IoMailOpenOutline } from 'react-icons/io5';

const NewsLatter = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="1000"
         className=' md:flex justify-between items-center max-w-7xl px-10  py-20 bg-blue-50'>
            {/* div-1 */}
            <div>
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <IoMailOpenOutline className='text-9xl text-blue-600' />
                    <div>
                        <h4 className='text-2xl font-semibold text-center md:text-left'>Get the latest news and offers</h4>
                        <h1 className='text-3xl font-bold text-center md:text-left'>Subscribe to our newsletter</h1>
                    </div>
                </div>
            </div>

            {/* div-2 */}
            <div className='flex border rounded-r md:w-[40%] mt-20 md:mt-0'>
                <input type="email" name="email" id="" placeholder='Enter your email' className=' w-full py-3 px-3 outline-none ' />
                <button className=' py-3 px-3 border rounded-r bg-blue-600 text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLatter;