"use client";
import { useAppContext } from "../context/AppContext";
import { ClipLoader, PulseLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LoadingOverlay() {
    const { isLoading } = useAppContext();

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[10000000] flex items-center justify-center bg-white h-screen">
            <div className="flex flex-col items-center space-y-6">
                <ClipLoader color="#f97316" size={60} />
                <div className="text-center">
                    <motion.h3
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xl font-semibold text-gray-800 mb-2"
                    >
                        Preparing Your Journey
                    </motion.h3>
                    <div className="flex items-center justify-center space-x-1">
                        {["L", "o", "a", "d", "i", "n", "g"].map((letter, i) => (
                            <motion.span
                                key={i}
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                    repeatDelay: 0.5
                                }}
                                className="text-orange-500 font-medium"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <PulseLoader color="#f97316" size={6} margin={2} />
                    </div>
                </div>
            </div>
        </div>
    );
}
