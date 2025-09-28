"use client";
import { blogs } from "../../_lib/blogs.js";
import Image from "next/image";
import { Clock, ChevronRight, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export default function BlogStandard() {
    return (
        <div className="p-4 md:p-8 lg:px-12 lg:py-10 mt-5 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column - Blogs */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={blog.imageLink}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {blog.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{blog.timeToRead}</span>
                                        </div>
                                        <span>By Voyora</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {blog.subtitle}
                                    </p>
                                    <button className="flex items-center gap-2 text-black font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer group/btn">
                                        <span>Read More</span>
                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Author Profile */}
                <div className="lg:w-80">
                    <div className="sticky top-24">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                                About the Author
                            </h3>
                            <hr className="border-gray-200 mb-6" />

                            <div className="text-center space-y-4">
                                <div className="relative w-24 h-24 mx-auto">
                                    <Image
                                        src="https://images.unsplash.com/photo-1619950498711-c2d22c4c3cb7?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Author"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover rounded-full"
                                    />
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">
                                        Wasim Akram
                                    </h4>
                                    <p className="text-orange-500 font-medium">
                                        Travel Writer & Explorer
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Passionate travel writer with over 8 years
                                    of experience exploring the world. I share
                                    authentic stories and practical tips to
                                    inspire your next adventure.
                                </p>

                                <div className="flex justify-center space-x-4 pt-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                                        <Facebook className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-200 transition-colors">
                                        <Youtube className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors">
                                        <Instagram className="w-5 h-5 text-pink-600" />
                                    </div>
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                                        <Linkedin className="w-5 h-5 text-blue-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}