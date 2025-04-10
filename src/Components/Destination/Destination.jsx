import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineFlightLand, MdOutlineFlightTakeoff } from "react-icons/md";

const Destination = () => {
  const [destination, setDestination] = useState("");
  const [cruiseLine, setCruiseLine] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className=" py-10 px-4 sm:px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Destination Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out h-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 font-semibold">From:</p>
              <MdOutlineFlightTakeoff className="text-3xl text-purple-600" />
            </div>
            <input
              type="text"
              placeholder="Where are you going..."
              value={destination}
            //   onChange={(e) => setDestination(e.target.value)}
              className="mt-2 w-full bg-transparent outline-none text-lg py-2"
            />
            <p className="text-sm text-gray-500 mt-2">Enter your destination</p>
          </div>

          {/* Cruise Line Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out h-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 font-semibold">To:</p>
              <MdOutlineFlightLand className="text-3xl text-purple-600" />
            </div>
            <input
              type="text"
              placeholder="Cruise line..."
              value={cruiseLine}
              onChange={(e) => setCruiseLine(e.target.value)}
              className="mt-2 w-full bg-transparent outline-none text-lg py-2"
            />
            <p className="text-sm text-gray-500 mt-2">Choose your cruise line</p>
          </div>

          {/* Journey Date Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out h-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 text-sm font-semibold">Journey Date:</p>
              <FaCalendarAlt className="text-black text-lg" />
            </div>
            <div className="mt-2">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent  focus:outline-none focus:border-transparent w-full py-2"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white px-8 py-2 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
