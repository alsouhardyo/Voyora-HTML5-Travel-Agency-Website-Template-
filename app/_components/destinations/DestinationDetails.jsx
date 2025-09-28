"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
    MapPin,
    Globe,
    Square,
    FileText,
    DollarSign,
    Map,
    Heart,
    MessageCircle,
    Star,
    User,
    Facebook,
    Youtube,
    Instagram,
    Share2,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { showToast } from "../../_lib/showToast";
import GlareHover from "../../_ui/GlareHover";

const galleryImages = [
    "https://images.unsplash.com/photo-1545157000-85f257f7b040?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZlbmljZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1482690205767-61deebe15ef7?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZlbmljZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1627156863760-f49b81d8ab77?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZlbmljZXxlbnwwfHwwfHx8MA%3D%3D",
];

const requirements = [
    { icon: MapPin, label: "Country", value: "Italy" },
    { icon: Globe, label: "Language Spoken", value: "Spanish" },
    { icon: Square, label: "Area (Km)", value: "890Km" },
    { icon: FileText, label: "Visa Requirement", value: "Yes" },
    { icon: DollarSign, label: "Per Person", value: "$2340" },
    { icon: Map, label: "Destination", value: "04 Tour" },
];

const comments = [
    {
        id: 1,
        name: "Johnson Charles",
        avatar: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D",
        rating: 5,
        date: "2 days ago",
        comment:
            "Amazing destination! The views were breathtaking and the experience was unforgettable.",
        likes: 12,
    },
    {
        id: 2,
        name: "Mike Chen",
        avatar: "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fEJ1c2luZXNzbWFufGVufDB8fDB8fHww",
        rating: 4,
        date: "1 week ago",
        comment:
            "Great tour guide and well organized trip. Highly recommend for families.",
        likes: 8,
    },
];

export default function DestinationDetails() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Successfully submitted"); 
        setFormData({ name: "", email: "", comment: "" });
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-8 space-y-12">
            {/* Gallery Swiper */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full custom-swiper"
                >
                    <style jsx global>{`
                        .custom-swiper .swiper-button-next,
                        .custom-swiper .swiper-button-prev {
                            color: #f97316;
                            background: rgba(255, 255, 255, 0.9);
                            border-radius: 50%;
                            width: 50px;
                            height: 50px;
                        }
                        .custom-swiper .swiper-button-next:after,
                        .custom-swiper .swiper-button-prev:after {
                            font-size: 16px;
                            font-weight: 900;
                        }
                        .custom-swiper .swiper-pagination-bullet {
                            background: rgba(255, 255, 255, 0.7);
                            opacity: 1;
                            margin: 0 6px;
                        }
                        .custom-swiper .swiper-pagination-bullet-active {
                            background: #f97316;
                        }
                    `}</style>
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Title and Description */}
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">
                    Venice Adventure
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Discover the magical city of Venice with its iconic canals,
                    historic architecture, and rich cultural heritage.
                    Experience gondola rides, visit St. Mark's Square, and
                    explore the hidden gems of this floating city.
                </p>
            </div>

            {/* Introduction Box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    {requirements.slice(0, 3).map((req, index) => {
                        const Icon = req.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center space-x-3 mb-4 last:mb-0"
                            >
                                <Icon className="w-5 h-5 text-orange-500" />
                                <div>
                                    <span className="font-medium text-gray-700">
                                        {req.label}:
                                    </span>
                                    <span className="text-gray-900 ml-1">
                                        {req.value}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                    {requirements.slice(3, 6).map((req, index) => {
                        const Icon = req.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center space-x-3 mb-4 last:mb-0"
                            >
                                <Icon className="w-5 h-5 text-orange-500" />
                                <div>
                                    <span className="font-medium text-gray-700">
                                        {req.label}:
                                    </span>
                                    <span className="text-gray-900 ml-1">
                                        {req.value}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed">
                Venice is a city unlike any other in the world. Built on more
                than 100 small islands in a lagoon in the Adriatic Sea, it has
                no roads, just canals. The Grand Canal snakes through the city
                like a backwards S, lined with Renaissance and Gothic palaces.
            </p>

            {/* Quote Box */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <blockquote className="text-xl font-semibold italic text-gray-700">
                    "Venice is like eating an entire box of chocolate liqueurs
                    in one go."
                </blockquote>
                <cite className="text-sm text-gray-500 mt-2 block">
                    - Truman Capote
                </cite>
            </div>

            {/* Another Paragraph */}
            <p className="text-gray-600 leading-relaxed">
                The city's unique architecture and romantic atmosphere make it
                one of the most photographed destinations in the world. From the
                iconic Rialto Bridge to the stunning Doge's Palace, every corner
                tells a story of Venice's glorious past as a maritime empire.
            </p>

            {/* Two Images Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 rounded-xl overflow-hidden">
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-60}
                        glareSize={300}
                        transitionDuration={1500}
                        playOnce={false}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlbmljZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Venice canal"
                            fill
                            sizes="(max-width: 768px) 100vw, 1920px"
                            className="object-cover"
                        />
                    </GlareHover>
                </div>

                <div className="relative h-64 rounded-xl overflow-hidden">
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.3}
                        glareAngle={-60}
                        glareSize={300}
                        transitionDuration={1500}
                        playOnce={false}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1605554861390-2d3d016664da?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZlbmljZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Venice architecture"
                            fill
                            sizes="(max-width: 768px) 100vw, 1920px"
                            className="object-cover"
                        />
                    </GlareHover>
                </div>
            </div>

            {/* Social Media Comments Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-900">
                        Reviews & Comments
                    </h3>
                    <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">Share:</span>
                        <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                                <Facebook className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                                <Youtube className="w-4 h-4 text-red-600" />
                            </div>
                            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors">
                                <Instagram className="w-4 h-4 text-pink-600" />
                            </div>
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-200 transition-colors">
                                <Share2 className="w-4 h-4 text-orange-600" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        #Venice
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        #Travel
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        #Italy
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        #Adventure
                    </span>
                </div>

                {/* Comments */}
                <div className="space-y-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="bg-white border border-gray-200 rounded-xl p-6"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="relative w-16 h-16">
                                    <Image
                                        src={comment.avatar}
                                        alt={comment.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 1920px"
                                        className="object-cover rounded-full"
                                    />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                {comment.name}
                                            </h4>
                                            <div className="flex items-center space-x-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map(
                                                        (_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${
                                                                    i <
                                                                    comment.rating
                                                                        ? "text-yellow-400 fill-current"
                                                                        : "text-gray-300"
                                                                }`}
                                                            />
                                                        )
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-500">
                                                    {comment.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        {comment.comment}
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                                            <Heart className="w-4 h-4" />
                                            <span className="text-sm">
                                                {comment.likes}
                                            </span>
                                        </button>
                                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                                            <MessageCircle className="w-4 h-4" />
                                            <span className="text-sm">
                                                Reply
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment Form */}
                <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-orange-600" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                            Leave a Comment
                        </h4>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            />
                        </div>
                        <textarea
                            placeholder="Your Comment"
                            rows={4}
                            value={formData.comment}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    comment: e.target.value,
                                })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full font-medium transition-colors duration-500 ease-in-out cursor-pointer flex items-center space-x-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-semibold">
                                Submit Comment
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
