import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import tour from '../../assets/earth.png';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className="bg-blue-500 h-screen">
            <nav className="px-10">
                {/* Top Navbar Section */}
                <div className="flex flex-wrap justify-between py-2 border-b border-base-100">
                    <div className="flex items-center gap-3">
                        {/* Social Icons */}
                        <div className="text-xl flex gap-2 pr-5 border-r border-white">
                            <FaFacebook className="text-white cursor-pointer" />
                            <FaInstagram className="text-white cursor-pointer" />
                            <FaTwitter className="text-white cursor-pointer" />
                            <FaLinkedin className="text-white cursor-pointer" />
                        </div>
                        {/* Contact Details */}
                        <h3 className="text-white pr-5 border-r border-white">
                            +8801714414775
                        </h3>
                        <h3 className="text-white">contact@domain.com</h3>
                    </div>
                    {/* Menu Section */}
                    <div className="text-white ">
                        <ul className="flex items-center gap-4 font-medium">
                            <li className="flex items-center gap-2">
                                <button className="hover:text-black">Login</button>
                                <span className="text-gray-300">|</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <button className="hover:text-black">Sign up</button>
                                <span className="text-gray-300">|</span>
                            </li>
                            {/* Language Dropdown */}
                            <li className="relative group flex items-center gap-2">
                                <button className="hover:underline flex items-center ">
                                    English <span className="text-center "><IoIosArrowDown /
                                    >
                                    </span>
                                </button>
                                <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">English</button>
                                    </li>
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">Bangla</button>
                                    </li>
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">Hindi</button>
                                    </li>
                                </ul>
                                <span className="text-gray-300">|</span>
                            </li>
                            {/* Currency Dropdown */}
                            <li className="relative group flex items-center">
                                <button className="hover:underline flex items-center">
                                    USD <span><IoIosArrowDown />
                                    </span>
                                </button>
                                <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 right-8 p-8 rounded-md shadow-lg">
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">USDT</button>
                                    </li>
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">USD</button>
                                    </li>
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">BD</button>
                                    </li>
                                    <li>
                                        <button className="block px-2 py-1 hover:bg-gray-100">IN</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between py-3">
                    <div className="">
                        <img src={logo} alt="" className="" />
                    </div>
                    <div>
                        <div className="">

                            <div className="flex-none">
                                <ul className="menu menu-horizontal px-1">

                                    {/* list-1 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Home <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100 border w-full">Home one</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home two</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home three</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home four</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home five</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home six</button>
                                            </li>
                                           
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-2 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Pages <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">English</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Bangla</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Hindi</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-3 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Dashboard <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">English</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Bangla</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Hindi</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-4 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            News <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">English</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Bangla</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Hindi</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-5 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Contact <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">English</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Bangla</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Hindi</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
