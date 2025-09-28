"use client";
import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundError() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-12 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Column - Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-6xl lg:text-8xl font-bold text-orange-500 mb-6">
                            Oops !
                        </h1>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-12">
                            This page seems to have slipped through a time
                            portal
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            The page you're looking for seems to have taken a
                            detour. Let's get you back on track to your next
                            adventure!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 cursor-pointer"
                            >
                                <Home className="w-5 h-5" />
                                <span>Go Back Home</span>
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-semibold py-3 px-6 rounded-xl transition-colors duration-300 cursor-pointer"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>Go Back</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-80 lg:h-96 xl:h-[500px]">
                            <Image
                                src="/not-found.png"
                                alt="Page not found illustration"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
