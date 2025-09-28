"use client";
import { blogs } from "../../_lib/blogs.js";
import Image from "next/image";
import {
    Clock,
    ChevronRight,
    Facebook,
    Youtube,
    Instagram,
    Linkedin,
    Quote,
    User,
} from "lucide-react";
import { useState } from "react";
import { showToast } from "../../_lib/showToast";

export default function BlogDetails() {
    const [commentForm, setCommentForm] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Successfully submitted"); 
        setCommentForm({ name: "", email: "", comment: "" });
    };

    return (
        <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-12 lg:px-12">
                {/* Left Column - Blog Content */}
                <div className="flex-1 space-y-8">
                    {/* Main Blog Image */}
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Blog main image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <span>By Sarah Johnson</span>
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                                Travel
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                            Best Travel Destinations for 2024: A Complete Guide
                        </h1>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Traveling in 2024 offers incredible
                                opportunities to explore both familiar and
                                emerging destinations. From the bustling streets
                                of Tokyo to the serene beaches of the Maldives,
                                this year promises unforgettable adventures for
                                every type of traveler.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                The world has reopened its doors, and
                                destinations are welcoming visitors with
                                enhanced experiences and sustainable tourism
                                practices. Whether you're seeking cultural
                                immersion, natural wonders, or urban excitement,
                                2024's top destinations offer something
                                extraordinary.
                            </p>
                        </div>

                        {/* Quote Section */}
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg my-8">
                            <div className="flex items-start gap-4">
                                <Quote className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <blockquote className="text-xl font-semibold italic text-gray-700 mb-2">
                                        "Travel is the only thing you buy that
                                        makes you richer. Every destination
                                        teaches you something new about the
                                        world and yourself."
                                    </blockquote>
                                    <cite className="text-sm text-gray-500">
                                        - Anonymous Traveler
                                    </cite>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed">
                                Planning your 2024 adventures requires careful
                                consideration of seasonal weather, local events,
                                and travel restrictions. Research each
                                destination thoroughly and consider booking
                                accommodations and flights well in advance to
                                secure the best deals.
                            </p>
                        </div>

                        {/* Comment Form */}
                        <div className="bg-gray-50 rounded-2xl p-8 mt-12">
                            <div className="flex items-center gap-3 mb-6">
                                <User className="w-6 h-6 text-orange-500" />
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Leave a Comment
                                </h3>
                            </div>
                            <form
                                onSubmit={handleCommentSubmit}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={commentForm.name}
                                        onChange={(e) =>
                                            setCommentForm({
                                                ...commentForm,
                                                name: e.target.value,
                                            })
                                        }
                                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={commentForm.email}
                                        onChange={(e) =>
                                            setCommentForm({
                                                ...commentForm,
                                                email: e.target.value,
                                            })
                                        }
                                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <textarea
                                    rows="5"
                                    placeholder="Your Comment"
                                    value={commentForm.comment}
                                    onChange={(e) =>
                                        setCommentForm({
                                            ...commentForm,
                                            comment: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all resize-none"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300 cursor-pointer"
                                >
                                    Submit Comment
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Related Blogs */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">
                            Related Articles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {blogs.slice(0, 4).map((blog, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                >
                                    <div className="relative h-48 overflow-hidden">
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
                                        <h4 className="text-lg font-bold text-gray-800">
                                            {blog.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">
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
                </div>

                {/* Right Column - Author Profile */}
                <div className="lg:w-80">
                    <div className="sticky top-24">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
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
                                    <h3 className="text-xl font-bold text-gray-800">
                                        James Anderson
                                    </h3>
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
