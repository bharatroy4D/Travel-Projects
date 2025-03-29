import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <nav>
                {/* first part */}
                <div className='flex items-center gap-3 bg-blue-700'>
                    <div className=' text-xl flex gap-2 my-2 pr-5 border-r border-white'>                   
                    <FaFacebook className='text-white'/>
                    <FaInstagram className='text-white'/>
                    <FaTwitter className='text-white'/>
                    <FaLinkedin className='text-white'/>
                    </div>
                    <h3 className='text-white my-2 pr-5 border-r border-white'>+8801714414775</h3>
                    <h3 className='text-white '>contact@domain.com</h3>

                </div>
                {/* second part */}
                <div>

                </div>
            </nav>

        </div>
    );
};

export default Header;