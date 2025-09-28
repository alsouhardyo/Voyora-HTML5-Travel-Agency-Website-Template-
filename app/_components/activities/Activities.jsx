"use client";
import { useState } from "react";
import Image from "next/image";
import GlareHover from "../../_ui/GlareHover.jsx";
import { activities } from "../../_lib/activities.js";
import { Filter, MapPin, Clock, Star } from "lucide-react";

export default function Activities() {
    const [filters, setFilters] = useState({
        type: "",
        priceRange: "",
        duration: "",
        location: "",
        search: "",
    });

    const clearFilters = () => {
        setFilters({
            type: "",
            priceRange: "",
            duration: "",
            location: "",
            search: "",
        });
    };

    return (
        <section className="section-container">
            <div className="lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Activities & Tours
                </h1>

                <div className="flex gap-8">
                    {/* Activities Grid - Left */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activities.map((activity, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                                >
                                    <div className="relative w-full h-48">
                                        <GlareHover>
                                            <Image
                                                src={activity.imageLink}
                                                alt={activity.name}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                                className="object-cover"
                                            />
                                        </GlareHover>
                                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium">
                                                {activity.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg mb-2">
                                            {activity.name}
                                        </h3>
                                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>
                                                    {activity.dayCount} days
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="font-semibold text-lg text-orange-600">
                                                    ${activity.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Filters Sidebar - Right */}
                    <div className="w-80">
                        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Filter className="w-5 h-5" />
                                <h2 className="text-xl font-semibold">
                                    Filters
                                </h2>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Search Activities
                                </label>
                                <input
                                    type="text"
                                    placeholder="Search by name..."
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={filters.search}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            search: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {/* Activity Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Activity Type
                                </label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={filters.type}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            type: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">All Types</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="cultural">Cultural</option>
                                    <option value="relaxation">
                                        Relaxation
                                    </option>
                                    <option value="nature">Nature</option>
                                </select>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Price Range
                                </label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={filters.priceRange}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            priceRange: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Any Price</option>
                                    <option value="0-500">$0 - $500</option>
                                    <option value="500-1000">
                                        $500 - $1000
                                    </option>
                                    <option value="1000+">$1000+</option>
                                </select>
                            </div>

                            {/* Duration */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Duration
                                </label>
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={filters.duration}
                                    onChange={(e) =>
                                        setFilters({
                                            ...filters,
                                            duration: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Any Duration</option>
                                    <option value="1-3">1-3 days</option>
                                    <option value="4-6">4-6 days</option>
                                    <option value="7+">7+ days</option>
                                </select>
                            </div>

                            {/* Location */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Location
                                </label>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <select
                                        className="flex-1 p-2 border border-gray-300 rounded-md"
                                        value={filters.location}
                                        onChange={(e) =>
                                            setFilters({
                                                ...filters,
                                                location: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="">All Locations</option>
                                        <option value="asia">Asia</option>
                                        <option value="africa">Africa</option>
                                        <option value="europe">Europe</option>
                                        <option value="americas">
                                            Americas
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={clearFilters}
                                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-500 ease-in-out cursor-pointer"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
