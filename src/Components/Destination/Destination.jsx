import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";

const Destination = () => {
    const [destination, setDestination] = useState("");
    const [cruiseLine, setCruiseLine] = useState("");
    const [date, setDate] = useState("");
    return (
        <div>
            <div className="max-w-5xl mx-auto py-10 px-4">
                {/* Card Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Destination Card */}
                    <div className="bg-purple-100 p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-semibold">From :</p>
                            <MdOutlineFlightTakeoff className="text-3xl" />

                        </div>
                        <input
                            type="text"
                            placeholder="Where are you going..."
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="mt-1 w-full bg-transparent  outline-none focus:border-purple-600 text-lg"
                        />
                        <p className="text-sm">Where are you going</p>
                    </div>

                    {/* Cruise Line Card */}
                    <div className="bg-purple-100 p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-500 font-semibold ">To :</p>
                            <MdOutlineFlightLand className="text-3xl" />
                        </div>
                        <input
                            type="text"
                            placeholder="cruise line..."
                            value={cruiseLine}
                            onChange={(e) => setCruiseLine(e.target.value)}
                            className="mt-1 w-full bg-transparent  outline-none focus:border-purple-600 text-lg"
                        />
                        <p className="text-sm">Chose your Cruise line</p>
                    </div>

                    {/* Journey Date Card */}
                    <div className="bg-purple-100 p-6 rounded-xl shadow-md flex flex-col">
                        <div className="flex justify-between ">
                            <p className="text-gray-500 text-sm font-semibold">Journey date</p>
                            <FaCalendarAlt className="text-black text-lg" />
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent outline-none  focus:border-purple-600"
                            />
                        </div>
                    </div>

                </div>

                {/* Search Button */}
                <div className="flex justify-center mt-6">
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-purple-700 transition">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Destination;