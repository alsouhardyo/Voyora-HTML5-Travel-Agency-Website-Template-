"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Popular", "Trending", "Featured", "Top Visited"];

const destinations = [
    {
        id: 1,
        name: "Bali, Indonesia",
        subtitle: "Tropical paradise with stunning beaches.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsaSUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
        category: "Popular",
    },
    {
        id: 2,
        name: "Paris, France",
        subtitle: "The city of lights and romance.",
        price: 1500,
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFyaXN8ZW58MHx8MHx8fDA%3D",
        category: "Top Visited",
    },
    {
        id: 3,
        name: "Kyoto, Japan",
        subtitle: "Historic temples and cherry blossoms.",
        price: 1300,
        image: "https://images.unsplash.com/photo-1655222330870-1c2a0fc3fea7?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S3lvdG8lMkMlMjBKYXBhbnxlbnwwfHwwfHx8MA%3D%3D",
        category: "Featured",
    },
    {
        id: 4,
        name: "Santorini, Greece",
        subtitle: "Iconic white-washed buildings and sunsets.",
        price: 1400,
        image: "https://images.unsplash.com/photo-1683154160815-6b9bb9ef233b?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FudG9yaW5pJTIwZ3JlZWNlfGVufDB8fDB8fHww",
        category: "Trending",
    },
    {
        id: 5,
        name: "New York, USA",
        subtitle: "The city that never sleeps.",
        price: 1600,
        image: "https://images.unsplash.com/photo-1708344377755-85c6cdea3f87?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fE5ldyUyMFlvcmslMkMlMjBVU0F8ZW58MHx8MHx8fDA%3D",
        category: "Top Visited",
    },
    {
        id: 6,
        name: "Cape Town, South Africa",
        subtitle: "Spectacular landscapes and vibrant culture.",
        price: 1100,
        image: "https://images.unsplash.com/photo-1612860606900-25b4b0bc79ba?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FwZSUyMFRvd24lMkMlMjBTb3V0aCUyMEFmcmljYXxlbnwwfHwwfHx8MA%3D%3D",
        category: "Featured",
    },
    {
        id: 7,
        name: "Rome, Italy",
        subtitle: "Ancient ruins and delicious cuisine.",
        price: 1350,
        image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Um9tZSUyQyUyMEl0YWx5fGVufDB8fDB8fHww",
        category: "Popular",
    },
    {
        id: 8,
        name: "Sydney, Australia",
        subtitle: "Famous opera house and beaches.",
        price: 1450,
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3lkbmV5JTJDJTIwQXVzdHJhbGlhfGVufDB8fDB8fHww",
        category: "Trending",
    },
    {
        id: 9,
        name: "Dubai, UAE",
        subtitle: "Luxury shopping and modern architecture.",
        price: 1700,
        image: "https://images.unsplash.com/photo-1725342786298-84c6c98d7ff0?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHViYWklMkMlMjBVQUV8ZW58MHx8MHx8fDA%3D",
        category: "Featured",
    },
    {
        id: 10,
        name: "Rio de Janeiro, Brazil",
        subtitle: "Carnival, beaches, and vibrant nightlife.",
        price: 1250,
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmlvJTIwZGUlMjBKYW5laXJvJTJDJTIwQnJhemlsfGVufDB8fDB8fHww",
        category: "Popular",
    },
    {
        id: 11,
        name: "London, UK",
        subtitle: "Historic landmarks and modern attractions.",
        price: 1550,
        image: "https://images.unsplash.com/photo-1651502450353-4ded32a1461d?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fExvbmRvbiUyQyUyMFVLfGVufDB8fDB8fHww",
        category: "Top Visited",
    },
    {
        id: 12,
        name: "Bangkok, Thailand",
        subtitle: "Bustling city with rich culture.",
        price: 1150,
        image: "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFuZ2tvayUyQyUyMFRoYWlsYW5kfGVufDB8fDB8fHww",
        category: "Trending",
    },
    {
        id: 13,
        name: "Barcelona, Spain",
        subtitle: "Art, architecture, and Mediterranean vibes.",
        price: 1400,
        image: "https://images.unsplash.com/photo-1593368858664-a7fe556ab936?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmFyY2Vsb25hJTJDJTIwU3BhaW58ZW58MHx8MHx8fDA%3D",
        category: "Featured",
    },
    {
        id: 14,
        name: "Istanbul, Turkey",
        subtitle: "Where East meets West.",
        price: 1300,
        image: "https://images.unsplash.com/photo-1634875847199-a72928c0c9d2?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXN0YW5idWwlMkMlMjBUdXJrZXl8ZW58MHx8MHx8fDA%3D",
        category: "Popular",
    },
    {
        id: 15,
        name: "Prague, Czech Republic",
        subtitle: "Fairytale city with stunning architecture.",
        price: 1200,
        image: "https://images.unsplash.com/photo-1594492256402-1463c14e0317?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJhZ3VlJTJDJTIwQ3plY2glMjBSZXB1YmxpY3xlbnwwfHwwfHx8MA%3D%3D",
        category: "Top Visited",
    },
];

export default function Destinations() {
    const [isActive, setIsActive] = useState("All");
    const [items, setItems] = useState(destinations.slice(0, 6));

    const filterItem = (category) => {
        setIsActive(category);
        setItems(
            category === "All"
                ? destinations.slice(0, 6)
                : destinations.filter((item) => item.category === category)
        );
    };

    return (
        <section className="section-container space-y-4 lg:space-y-12">
            {/* Heading and Sub-heading */}
            <div>
                <h2 className="section-title">Explore best travel places</h2>
                <p className="section-subtitle">
                    Discover the world’s most breathtaking destinations,
                    handpicked for every traveler.
                </p>
            </div>

            {/* Category Buttons */}
            <div className="flex gap-4 items-center justify-center flex-wrap">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => filterItem(category)}
                        className={`${
                            isActive === category
                                ? "bg-orange-400 text-white hover:bg-orange-500"
                                : "bg-zinc-100 hover:bg-zinc-200 text-zinc-800"
                        } px-6 py-3 lg:px-10 lg:rounded-full rounded-lg  transition-colors font-semibold duration-500 ease-in-out cursor-pointer`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Destinations Grid */}
            <motion.ul
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 lg:px-12 items-center"
            >
                <AnimatePresence>
                    {items.map((destination) => (
                        <motion.li
                            key={destination.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -30 }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                                bounce: 0.3,
                                stiffness: 400,
                                damping: 35,
                                mass: 0.7,
                            }}
                            className="shadow-md border border-zinc-200 rounded-lg"
                        >
                            <div className="relative h-40 w-full">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    priority={true}
                                    className="rounded-t-lg object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <p className="text-2xl font-extrabold">
                                        ${destination.price}
                                        <span className="text-gray-400 font-medium text-sm">
                                            /Starting
                                        </span>
                                    </p>
                                    <div className="border border-gray-400 p-2 rounded-full cursor-pointer">
                                        <Heart className="text-gray-400" />
                                    </div>
                                </div>
                                <div className="space-y-2 mb-5">
                                    <h3 className="font-bold text-xl">
                                        {destination.name}
                                    </h3>
                                    <p className="font-medium">
                                        {destination.subtitle}
                                    </p>
                                </div>
                                <button className="w-full flex justify-center items-center border border-black hover:bg-orange-400 hover:text-white hover:border-none rounded-full px-6 py-3 duration-500 transition-all ease-in-out text-lg font-bold cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </section>
    );
}
