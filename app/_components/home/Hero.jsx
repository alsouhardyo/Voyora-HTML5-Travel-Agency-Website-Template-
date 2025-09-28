"use client";
import Image from "next/image";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { showToast } from "../../_lib/showToast";

export default function Hero() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Successfully submitted"); 
        setSearchQuery("");
    };

    return (
        <section className="p-4 md:px-8 md:py-4 mt-3 lg:mt-5 flex flex-col items-center">
            <div className="flex justify-center flex-col gap-4 md:gap-6 md:w-3/4">
                <h1 className="text-center font-extrabold text-2xl md:text-4xl lg:text-6xl">
                    Travel Beyond Borders, Create Lasting Memories
                </h1>
                <p className="text-center lg:text-lg">
                    Discover the world with us. From stunning landscapes to
                    vibrant cultures, embark on journeys that inspire.
                    Adventure, relaxation, or culture—our curated trips make
                    every journey unforgettable.
                </p>
            </div>

            {/* Hero Image with Search Bar */}
            <div className="relative w-full lg:w-[85%] mt-6 md:mt-10 rounded-lg overflow-hidden h-72 md:h-80 lg:h-96">
                <Image
                    fill
                    src="https://images.unsplash.com/photo-1598008350515-9e313225452e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero Image"
                    priority
                    className="object-cover"
                />

                {/* Search Bar Overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-4 rounded-lg transition-all duration-300">
                    <div className="w-full max-w-2xl">
                        <div className="relative group">
                            {/* Main Search Container */}
                            <div
                                className={`
                                relative w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl
                                border border-white/30 transition-all duration-300 ease-in-out
                                hover:shadow-3xl hover:bg-white
                                ${
                                    isFocused
                                        ? "ring-2 ring-orange-400/70 shadow-3xl bg-white scale-[1.01]"
                                        : ""
                                }
                            `}
                            >
                                {/* Desktop Layout */}
                                <div className="hidden md:flex items-center p-2">
                                    {/* Location Icon */}
                                    <div className="flex items-center pl-5 pr-4">
                                        <MapPin className="w-6 h-6 text-orange-500" />
                                    </div>

                                    {/* Search Input */}
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            placeholder="Where would you like to go?"
                                            className="w-full py-5 px-3 text-gray-800 bg-transparent border-none outline-none 
                                                     placeholder-gray-500 placeholder:font-medium text-lg font-medium
                                                     focus:placeholder-gray-400"
                                            onKeyDown={(e) =>
                                                e.key === "Enter" &&
                                                handleSubmit(e)
                                            }
                                        />
                                    </div>

                                    {/* Search Button */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!searchQuery.trim()}
                                        className="ml-3 mr-2 px-8 py-5 bg-gradient-to-r bg-orange-400
                                                 text-white rounded-xl font-bold text-base
                                                 hover:bg-orange-500
                                                 disabled:opacity-40 disabled:cursor-not-allowed
                                                 transform transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer
                                                 shadow-lg hover:shadow-xl"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Search className="w-5 h-5" />
                                            <span>Search</span>
                                        </div>
                                    </button>
                                </div>

                                {/* Tablet Layout */}
                                <div className="hidden sm:flex md:hidden items-center p-2">
                                    <div className="flex items-center pl-4 pr-3">
                                        <MapPin className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            placeholder="Where would you like to go?"
                                            className="w-full py-4 px-2 text-gray-800 bg-transparent border-none outline-none 
                                                     placeholder-gray-500 placeholder:font-medium text-base font-medium
                                                     focus:placeholder-gray-400"
                                            onKeyDown={(e) =>
                                                e.key === "Enter" &&
                                                handleSubmit(e)
                                            }
                                        />
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!searchQuery.trim()}
                                        className="ml-2 px-6 py-4 bg-orange-400 
                                                 text-white rounded-xl font-bold text-sm
                                                 hover:bg-orange-500
                                                 disabled:opacity-40 disabled:cursor-not-allowed
                                                 transform transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer
                                                 shadow-lg"
                                    >
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Mobile Layout */}
                                <div className="sm:hidden">
                                    {/* Search Input Container */}
                                    <div className="relative p-4 pb-3">
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                            <div className="flex-1 relative">
                                                <input
                                                    type="text"
                                                    value={searchQuery}
                                                    onChange={(e) =>
                                                        setSearchQuery(
                                                            e.target.value
                                                        )
                                                    }
                                                    onFocus={() =>
                                                        setIsFocused(true)
                                                    }
                                                    onBlur={() =>
                                                        setIsFocused(false)
                                                    }
                                                    placeholder="Where would you like to go?"
                                                    className="w-full py-4 px-2 text-gray-800 bg-transparent border-none outline-none 
                                                             placeholder-gray-500 placeholder:font-medium text-base font-medium
                                                             focus:placeholder-gray-400"
                                                    onKeyDown={(e) =>
                                                        e.key === "Enter" &&
                                                        handleSubmit(e)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Search Button */}
                                    <div className="px-4 pb-4">
                                        <button
                                            onClick={handleSubmit}
                                            disabled={!searchQuery.trim()}
                                            className="w-full py-4 bg-orange-400 
                                                     text-white rounded-xl font-bold text-base
                                                     hover:bg-orange-500
                                                     disabled:opacity-40 disabled:cursor-not-allowed
                                                     transform transition-all duration-200 active:scale-95
                                                     shadow-lg cursor-pointer"
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                <Search className="w-5 h-5" />
                                                <span>Search Destinations</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
