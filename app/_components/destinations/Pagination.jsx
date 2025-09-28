import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function Pagination() {
    return (
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 py-8">
            {/* Previous Button */}
            <button className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 bg-white text-gray-500 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-1 sm:space-x-2">
                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium border border-gray-300 bg-white text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
                    1
                </button>

                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium border border-gray-300 bg-white text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
                    2
                </button>

                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium bg-orange-400 text-white shadow-lg transform scale-105 ring-2 ring-orange-200 cursor-pointer">
                    3
                </button>

                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium border border-gray-300 bg-white text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
                    4
                </button>

                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium border border-gray-300 bg-white text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
                    5
                </button>

                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                    <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-orange-400 transition-colors duration-200" />
                </div>

                <button className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base font-medium border border-gray-300 bg-white text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-out cursor-pointer">
                    10
                </button>
            </div>

            {/* Next Button */}
            <button className="group flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-300 bg-white text-gray-500 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:shadow-md transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
        </div>
    );
}
