import { FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-5">
                {/* Need to Help */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Need to Help</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Live Chat</li>
                        <li>Support Center</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Company</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Support</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Help Center</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>

                {/* Other Services */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Other Services</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Travel Insurance</li>
                        <li>Car Rentals</li>
                        <li>Flight Booking</li>
                        <li>Hotel Deals</li>
                    </ul>
                </div>

                {/* Top Places */}
                <div>
                    <h3 className="text-lg font-medium mb-3">Top Places</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Paris</li>
                        <li>New York</li>
                        <li>London</li>
                        <li>Dubai</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center pt-10 px-10 ">
                <p>Copyright © 2022 All Rights Reserved</p>
                <div className="flex gap-3 text-4xl">
                <FaCcVisa/>
                <FaCcPaypal/>
                <FaCcJcb/>
                <FaCcMastercard/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
