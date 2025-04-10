import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo.png';
import hero from '../../assets/hero-5.jpg';
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navItems = [
        {
            label: "Home",
            links: ["Home one", "Home two", "Home three", "Home four", "Home five", "Home seven"]
        },
        {
            label: "Categories",
            links: ["Tours", "Flights", "Hotel", "Visa", "Bus", "Apartments"]
        },
        {
            label: "Pages",
            links: ["About", "Team", "Testimonials", "FAQ", "Booking Confirmation", "Become Expert"]
        },
        {
            label: "Dashboard",
            links: ["Dashboard", "Hotel booking", "Tour booking", "Flight booking", "Wallet"]
        },
        {
            label: "News",
            links: ["News", "News v1", "News v2", "News v3", "News v4", "News Details"]
        },
        {
            label: "Contact",
            links: ["Contact v1", "Contact v2", "Contact v3", "Contact v4", "Contact v5", "Contact v6"]
        }
    ];

    return (
        <header className="h-screen relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <img src={hero} alt="Hero" className="w-full h-screen object-cover opacity-95" />
            </div>

            <nav className="absolute z-40 w-full px-4 md:px-10 max-w-7xl mx-auto">
                {/* Top Bar */}
                <div className="hidden md:flex justify-between py-2 border-b border-base-100/20">
                    <div className="flex items-center gap-3 text-white">
                        <div className="flex gap-2 pr-5 border-r border-white">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                        <h3 className="pr-5 border-r border-white">+8801714414775</h3>
                        <h3>contact@domain.com</h3>
                    </div>
                    <ul className="flex items-center gap-4 font-medium text-white">
                        <li>Login<span className="mx-2">|</span></li>
                        <li>Sign up<span className="mx-2">|</span></li>
                        <li className="relative group">
                            <button className="flex items-center hover:underline">English <IoIosArrowDown /></button>
                            <ul className="hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow-md p-2">
                                <li className="hover:bg-gray-100 px-2 py-1">English</li>
                                <li className="hover:bg-gray-100 px-2 py-1">Bangla</li>
                                <li className="hover:bg-gray-100 px-2 py-1">Hindi</li>
                            </ul>
                        </li>
                        <li className="relative group">
                            <button className="flex items-center hover:underline">USD <IoIosArrowDown /></button>
                            <ul className="hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow-md p-2">
                                <li className="hover:bg-gray-100 px-2 py-1">USDT</li>
                                <li className="hover:bg-gray-100 px-2 py-1">USD</li>
                                <li className="hover:bg-gray-100 px-2 py-1">BD</li>
                                <li className="hover:bg-gray-100 px-2 py-1">IN</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Middle Navigation */}
                <div className="flex justify-between items-center py-4">
                    <img src={logo} className="w-36" />
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <HiX className="text-white text-3xl" /> : <HiOutlineMenuAlt3 className="text-white text-3xl" />}
                        </button>
                    </div>
                    <div className="hidden md:flex gap-6 items-center">
                        <ul className="flex items-center gap-5 text-white">
                            {navItems.map((item, i) => (
                                <li key={i} className="relative group">
                                    <button className="flex items-center gap-1 hover:text-black">
                                        {item.label} <IoIosArrowDown />
                                    </button>
                                    <ul className="hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow-md w-48 p-2 z-50">
                                        {item.links.map((link, idx) => (
                                            <li key={idx} className="hover:bg-gray-100 px-2 py-1">{link}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="hidden md:inline-flex gap-4 items-center">
                        <GoSearch className="text-white text-2xl" />
                        <button className="btn btn-secondary bg-blue-700 hover:bg-blue-900 text-white">Become a Partner</button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white rounded shadow-lg p-4 text-black space-y-4">
                        {navItems.map((item, i) => (
                            <div key={i}>
                                <button
                                    className="flex items-center justify-between w-full font-semibold"
                                    onClick={() => toggleDropdown(item.label)}
                                >
                                    {item.label}
                                    <IoIosArrowDown className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                </button>
                                {activeDropdown === item.label && (
                                    <ul className="pl-4 pt-2 space-y-1 text-sm">
                                        {item.links.map((link, idx) => (
                                            <li key={idx} className="hover:underline">{link}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                        <button className="w-full bg-blue-700 text-white py-2 rounded">Become a Partner</button>
                    </div>
                )}

                {/* Hero Text */}
                <div className="pt-20 md:pt-40 text-center text-white relative z-50 bottom-10 flex flex-col justify-center items-center h-screen">
                    <h1 className="text-3xl md:text-7xl font-bold tracking-wide text-shadow-lg transition-all duration-500 ease-in-out hover:text-blue-400">
                        Explore the world together
                    </h1>
                    <p className="text-sm md:text-3xl pt-4 opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-100">
                        Find awesome flights, hotels, tours, cars, and packages
                    </p>
                </div>


            </nav>
        </header>
    );
};

export default Header;
