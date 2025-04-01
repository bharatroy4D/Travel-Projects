import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo.png'
import hero from '../../assets/hero-5.jpg'
import { GoSearch } from "react-icons/go";

const Header = () => {


    return (
        <header className=" h-screen relative ">
            <nav className="max-w-7xl mx-auto px-10 absolute z-40 w-full">
                {/* Top Navbar Section */}
                <div className="flex flex-wrap justify-between py-2 border-b border-base-100/20">
                    <div className="flex items-center gap-3">
                        {/* Social Icons */}
                        <div className=" flex gap-2 pr-5 border-r border-white">
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
                                <ul className="hidden group-hover:block absolute bg-white text-black  mt-1 top-8 right-8 p-8 rounded-md shadow-lg">
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
                {/* second nav */}
                <div className="flex justify-between items-center py-5  ">
                    <div className="">
                        <img src={logo} alt="" className="" />
                    </div>
                    <div>
                        <div className="">

                            <div className="flex-none">
                                <ul className="flex items-center gap-4 px-1">

                                    {/* list-1 */}
                                    <li className="relative group flex items-center gap-2 hover:border-b hover:border-white hover:transform-border hover:duration-1000  ">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Home <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden gap-5 group-hover:block absolute   transform duration-1000 bg-white text-black w-60  mt-1 top-8 p-5  rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home one</button>
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
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home seven</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home eight</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Home nine</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>

                                    {/* list-2 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Categories <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Tours</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Flights</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Hotel</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Visa</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Bus</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Apartments</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-3 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Pages <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">About
                                                </button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Team
                                                </button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Testimonials
                                                </button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">FAQ
                                                </button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Booking Confirmation
                                                </button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Become Expert
                                                </button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-4 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Dashboard <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Dashboard</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Hotel booking</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Tour booking</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Flight booking</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Tour booking</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">Wallet</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-5 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            News <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v1</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v2</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v3</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v4</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News Details</button>
                                            </li>
                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                    {/* list-6 */}
                                    <li className="relative group flex items-center gap-2">
                                        <button className=" flex items-center text-base-100 hover:text-black text-xl ">
                                            Contact <span className="text-center "><IoIosArrowDown /
                                            >
                                            </span>
                                        </button>
                                        <ul className="hidden group-hover:block absolute bg-white text-black mt-1 top-8 p-8 rounded-md shadow-lg">

                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v1</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v2</button>
                                            </li>
                                            <li>
                                                <button className="block px-2 py-1 hover:bg-gray-100">News v3</button>
                                            </li>

                                        </ul>
                                        <span className="text-gray-300"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <GoSearch className="text-white text-3xl" />
                        <button className="btn btn-secondary bg-blue-700 hover:bg-blue-900">Became a Partner</button>

                    </div>

                </div>
                <div>
                    <h1 className="text-7xl font-medium text-base-100 text-center pt-40 ">Explore the world together</h1>
                    <p className="text-3xl  pt-5 text-center text-base-100">Find awesome flights, hotel, tour, car and packages
                    </p>
                </div>
            </nav>
            <div className="absolute inset-0 z-10">
                <img src={hero} alt="Hero Image" className=" w-full h-screen object-cover opacity-95 "/>
            </div>
        </header>
    );
};

export default Header;
