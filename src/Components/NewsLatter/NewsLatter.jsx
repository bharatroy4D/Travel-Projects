import React from 'react';
import { IoMailOpenOutline } from 'react-icons/io5';

const NewsLatter = () => {
    return (
        <div>
            {/* div-1 */}
            <div>
                <div className='flex gap-5 items-center'>
                    <IoMailOpenOutline className='text-9xl text-blue-600' />
                    <div>
                        <h4 className='text-2xl font-semibold'>Get the latest news and offers</h4>
                        <h1 className='text-3xl font-bold'>Subscribe to our newsletter</h1>
                    </div>
                </div>
            </div>

            {/* div-2 */}
            <div>

            </div>
        </div>
    );
};

export default NewsLatter;