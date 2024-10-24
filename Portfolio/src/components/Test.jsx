import React, { useState } from "react";

const SlidingDivs = () => {
    const [activeDiv, setActiveDiv] = useState(null); // Track the active div

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Main Container */}
            <div className="relative w-[400px] h-[200px] overflow-hidden border-2 border-black bg-gray-100">
                {/* Hidden Div 1 */}
                <div
                    className={`absolute top-0 h-full w-[100px] bg-blue-300 transition-transform duration-700 ${activeDiv === 1 ? "translate-x-[400px]" : "-translate-x-[100px]"
                        }`}
                ></div>

                {/* Hidden Div 2 */}
                <div
                    className={`absolute top-0 h-full w-[100px] bg-green-300 transition-transform duration-700 ${activeDiv === 2 ? "translate-x-[400px]" : "-translate-x-[100px]"
                        }`}
                ></div>

                {/* Hidden Div 3 */}
                <div
                    className={`absolute top-0 h-full w-[100px] bg-red-300 transition-transform duration-700 ${activeDiv === 3 ? "translate-x-[400px]" : "-translate-x-[100px]"
                        }`}
                ></div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex space-x-4">
                <button
                    onClick={() => setActiveDiv(1)}
                    className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Show Slide 1
                </button>
                <button
                    onClick={() => setActiveDiv(2)}
                    className="px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Show Slide 2
                </button>
                <button
                    onClick={() => setActiveDiv(3)}
                    className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Show Slide 3
                </button>
            </div>
        </div>
    );
};

export default SlidingDivs;
