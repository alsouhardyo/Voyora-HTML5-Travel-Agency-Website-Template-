"use client";
import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.9
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        }
    },
    exit: { 
        opacity: 0, 
        y: -30,
        scale: 0.9,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
};

export default function DestinationsV1() {
    const { destinationsData } = useAppContext();
    
    return (
        <section className="px-8 py-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={destinationsData.length}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:px-12"
                >
                    {destinationsData.slice(0, 12).map((destination, index) => (
                        <motion.div
                            key={`${destination.title}-${destination.category}`}
                            variants={cardVariants}
                            layout
                            layoutId={`card-${destination.title}`}
                            whileHover={{ 
                                y: -8,
                                transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer will-change-transform"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    ${destination.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-2">
                                    <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                                        {destination.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                    {destination.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {destination.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
