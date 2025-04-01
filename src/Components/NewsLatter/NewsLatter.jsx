import React from 'react';
import { IoMailOpenOutline } from 'react-icons/io5';

const NewsLatter = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl px-10  py-20 bg-blue-50'>
            {/* div-1 */}
            <div>
                <div className='flex gap-5 items-center'>
                    <IoMailOpenOutline className='text-9xl text-blue-600' />
                    <div>
                        <h4 className='text-2xl font-semibold'>Get the latest news and offers</h4>
                        <h1 className='text-3xl font-bold pt-'>Subscribe to our newsletter</h1>
                    </div>
                </div>
            </div>

            {/* div-2 */}
            <div className='flex border rounded-r w-[40%]'>
                <input type="email" name="email" id="" placeholder='Enter your email' className=' w-full py-3 px-3 outline-none ' />
                <button className=' py-3 px-3 border rounded-r bg-blue-600 text-white'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLatter;