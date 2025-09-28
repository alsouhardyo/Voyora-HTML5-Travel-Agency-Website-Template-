import { Star, Heart, ArrowRight } from "lucide-react";
import { tours } from "../../_lib/tours";
import Image from "next/image";

export default function Tourslist() {
    return (
        <div className="space-y-8">
            {/* Tour Count and Sorter */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <p className="text-gray-600 font-medium">
                    Showing {tours.length} tours
                </p>
                <div className="relative">
                    <select className="appearance-none w-full px-4 py-3 pr-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none bg-white shadow-sm cursor-pointer">
                        <option value="default">Sort by Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                        <option value="duration">Duration</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tour List */}
            <div className="space-y-6">
                {tours.map((tour, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Image with Heart Icon */}
                            <div className="relative overflow-hidden md:w-80 h-64 md:h-56 flex-shrink-0">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    priority={index < 3}
                                />
                                <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white hover:scale-110 transition-all duration-500 shadow-lg z-10">
                                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="space-y-4">
                                    {/* Location */}
                                    <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                                        {tour.location}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-800 hover:text-slate-900 hover:underline transition-colors cursor-pointer">
                                        {tour.title}
                                    </h3>

                                    {/* Rating and Day Count */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                            <span className="text-sm font-semibold text-gray-700">
                                                {tour.review}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                ({tour.reviewCount} reviews)
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                            {tour.day} {tour.day === 1 ? "day" : "days"}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <hr className="border-gray-200 my-4" />

                                {/* Price and Action */}
                                <div className="flex justify-between items-center">
                                    <button className="flex items-center gap-2 text-zinc-800 hover:text-orange-600 transition-colors cursor-pointer">
                                        <span className="font-semibold">
                                            Explore Now
                                        </span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <div className="text-right">
                                        <p className="text-gray-500 text-sm font-medium">Starting from</p>
                                        <span className="text-2xl font-bold text-orange-500">
                                            ${tour.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}