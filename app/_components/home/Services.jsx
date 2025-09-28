import React from "react";
import Image from "next/image";

export default function Services() {
    return (
        <section className="section-container">
            {/* Heading and Sub-heading */}
            <h2 className="section-title">What services do we provide</h2>
            <p className="section-subtitle">
                Find trips that fit a flexible lifestyle
            </p>
            {/* Featured Services */}
            <div className="w-full p-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
                {/* Left side - Features */}
                <div className="space-y-8">
                    {/* Feature 1 */}
                    <span className="h-8 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-lg">
                        01
                    </span>
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                            Find trips that fit a flexible lifestyle
                        </h3>
                        <p className="text-gray-500 lg:w-7/10">
                            Stacks is a production-ready library of stackable
                            content blocks built in React Native.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <span className="h-8 w-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 font-semibold text-lg">
                        02
                    </span>
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                            Travel with more confidence
                        </h3>
                        <p className="text-gray-500 lg:w-7/10">
                            Stacks is a production-ready library of stackable
                            content blocks built in React Native.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <span className="h-8 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold text-lg">
                        03
                    </span>
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
                            See what’s really included
                        </h3>
                        <p className="text-gray-500 lg:w-7/10">
                            Stacks is a production-ready library of stackable
                            content blocks built in React Native.
                        </p>
                    </div>
                    {/* Button */}
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-500 ease-in-out cursor-pointer">
                        Start your search
                    </button>
                </div>
                {/* Right side - Image + Floating Cards */}
                <div className="relative">
                    {/* Background Image */}
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-4xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1660773286125-0cd45319679b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            fill
                            alt="Travel background"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="rounded-2xl object-cover"
                        />
                    </div>{" "}
                    {/* Floating Card 1 */}
                    <div className="absolute top-6 left-6 bg-white rounded-xl shadow-md md:flex items-center gap-3 px-4 py-2 hidden">
                        <div className="w-20 h-20 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1712231665059-e8ba20bda1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJhbmZmJTJDJTIwQ2FuYWRhfGVufDB8fDB8fHww"
                                alt="Banff, Canada"
                                fill
                                className="rounded-xl object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-lg">
                                Banff, Canada
                            </h4>
                            <p className="text-gray-500 text-sm font-semibold">
                                ⭐ 4.8
                            </p>
                        </div>
                    </div>
                    {/* Floating Card 2 */}
                    <div className="absolute top-1/3 right-[-20px] bg-white rounded-xl shadow-md md:flex items-center gap-3 px-4 py-2 hidden">
                        <div className="w-20 h-20 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1594048069339-42ae0e89376a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2FudG9yaW5pJTJDJTIwR3JlZWNlfGVufDB8fDB8fHww"
                                alt="Santorini, Greece"
                                fill
                                className="rounded-xl object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-lg">
                                Santorini, Greece
                            </h4>
                            <p className="text-gray-500 text-sm font-semibold">
                                ⭐ 4.8
                            </p>
                        </div>
                    </div>
                    {/* Floating Card 3 */}
                    <div className="absolute bottom-6 left-8 bg-white rounded-xl shadow-md md:flex items-center gap-3 px-4 py-2 hidden">
                        <div className="w-20 h-20 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1718649872891-e8a3d72d08fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE1hY2h1JTIwUGljY2h1JTJDJTIwUGVydXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Machu Picchu, Peru"
                                fill
                                className="rounded-xl object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-lg">
                                Machu Picchu, Peru
                            </h4>
                            <p className="text-gray-500 text-sm font-semibold">
                                ⭐ 4.8
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
