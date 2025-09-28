"use client";
import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "../../_lib/galleryImages.js";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { Eye, ZoomIn } from "lucide-react";

export default function Gallery() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const slides = galleryImages.map((image) => ({
        src: image.src,
        alt: image.alt,
        title: image.title,
    }));

    return (
        <div className="section-container">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Travel Gallery
                </h1>
                <h2 className="text-xl lg:text-2xl text-orange-500 font-semibold mb-6">
                    Moments That Take Your Breath Away
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Explore our collection of stunning destinations and
                    unforgettable experiences. Each image tells a story of
                    adventure, beauty, and the magic of travel.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-6">
                {galleryImages.map((image, index) => (
                    <motion.div
                        key={image.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Hover Content */}
                            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                {/* Top Icons */}
                                <div className="flex justify-end">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                        <ZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                {/* Bottom Content */}
                                <div className="text-white">
                                    <h3 className="font-bold text-lg mb-1">
                                        {image.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-4 h-4" />
                                        <span className="text-sm">
                                            Click to view
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={currentIndex}
                slides={slides}
                animation={{ fade: 300 }}
                controller={{ closeOnBackdropClick: true }}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
                }}
            />
        </div>
    );
}
