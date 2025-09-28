"use client";
import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import { motion } from "framer-motion";

export default function DestinationsV2() {
    const { destinationsData } = useAppContext();

    return (
        <section className="px-8 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[800px] lg:px-12">
                {/* Left Column - Destinations List */}
                <div className="overflow-y-auto pr-4">
                    <div className="space-y-4">
                        {destinationsData
                            .slice(0, 12)
                            .map((destination, index) => (
                                <motion.div
                                    key={`${destination.title}-${destination.category}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transition-shadow duration-300"
                                >
                                    <div className="flex h-40">
                                        <div className="relative w-56 flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={destination.image}
                                                alt={destination.title}
                                                fill
                                                sizes="224px"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                                                    {destination.category}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-3 right-3 bg-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                                ${destination.price}
                                            </div>
                                        </div>

                                        <div className="flex-1 p-6 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                                    {destination.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {destination.subtitle}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="w-4 h-4 text-yellow-400 fill-current"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <span className="text-sm font-medium text-gray-700 ml-1">
                                                            4.8
                                                        </span>
                                                    </div>
                                                </div>

                                                <button className="text-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-500 ease-in-out group-hover:bg-orange-500 group-hover:text-white cursor-pointer">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </div>

                {/* Right Column - Google Maps */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
