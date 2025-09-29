"use client";
import { useState } from "react";
import { Search, MapPin, Star, DollarSign } from "lucide-react";

export default function Sidebar() {
    const [rangeValue, setRangeValue] = useState(2500);
    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [checkedItems, setCheckedItems] = useState({});

    const clearAllFilters = () => {
        setRangeValue(2500);
        setSearchTerm("");
        setMinPrice("");
        setMaxPrice("");
        setCheckedItems({});
    };

    const categories = [
        "Adventure", "Cultural", "Beach", "Mountain", "City Tours", 
        "Wildlife"
    ];

    const destinations = {
        "Africa": ["Morocco", "South Africa", "Egypt"],
        "Europe": ["Italy", "Spain", "Germany", "Greece", "Switzerland"],
        "Asia": ["Thailand", "Japan", "Singapore", "Malaysia"],
        "America": ["USA", "Brazil", "Peru"],
    };

    const reviews = [
        { stars: 5, label: "5 Stars" },
        { stars: 4, label: "4+ Stars" },
        { stars: 3, label: "3+ Stars" },
        { stars: 2, label: "2+ Stars" }
    ];

    return (
        <div className="w-full lg:w-80 bg-gray-100/50 rounded-lg shadow-lg p-6 space-y-8 h-fit sticky top-24">
            {/* Search Bar */}
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">Search Tours</h3>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search destinations, activities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    />
                </div>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-orange-400" />
                    Price Range
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>$0</span>
                        <span>${rangeValue}</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={rangeValue}
                        onChange={(e) => setRangeValue(e.target.value)}
                        className="custom-range w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex gap-2">
                        <input
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="w-1/2 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={checkedItems[category] || false}
                                onChange={(e) => setCheckedItems(prev => ({...prev, [category]: e.target.checked}))}
                                className="custom-checkbox w-4 h-4 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-gray-700 group-hover:text-orange-400 transition-colors">
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Destinations */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    Destinations
                </h3>
                <div className="space-y-4">
                    {Object.entries(destinations).map(([continent, countries]) => (
                        <div key={continent} className="space-y-2">
                            <h4 className="font-medium text-gray-700 text-sm uppercase tracking-wide">
                                {continent}
                            </h4>
                            <div className="space-y-2 ml-2">
                                {countries.map((country) => (
                                    <label key={country} className="flex items-center space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems[country] || false}
                                            onChange={(e) => setCheckedItems(prev => ({...prev, [country]: e.target.checked}))}
                                            className="custom-checkbox w-4 h-4 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <span className="text-gray-600 group-hover:text-orange-400 transition-colors text-sm">
                                            {country}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Star className="w-5 h-5 text-orange-400" />
                    Reviews
                </h3>
                <div className="space-y-3">
                    {reviews.map((review) => (
                        <label key={review.stars} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={checkedItems[review.stars] || false}
                                onChange={(e) => setCheckedItems(prev => ({...prev, [review.stars]: e.target.checked}))}
                                className="custom-checkbox w-4 h-4 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <div className="flex items-center space-x-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${
                                                i < review.stars 
                                                    ? "text-yellow-400 fill-current" 
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-700 group-hover:text-orange-400 transition-colors text-sm">
                                    {review.label}
                                </span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Apply Filters Button */}
            <button 
                onClick={clearAllFilters}
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer"
            >
                Apply Filters
            </button>
        </div>
    );
}