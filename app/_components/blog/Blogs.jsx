"use client";
import { blogs } from "../../_lib/blogs.js";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";

export default function Blogs() {
    return (
        <div className="p-4 md:p-8 lg:px-12 lg:py-10 mt-5 lg:mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <button className="flex items-center gap-2 text-black font-semibold transition-colors duration-300 cursor-pointer group/btn">
                                <span className="group-hover/btn:text-orange-500 duration-500 ease-in-out">
                                    Read More
                                </span>
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:text-orange-500 duration-500 ease-in-out transition-all" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
