import React from "react";

export default function About() {
    return (
        <section className="section-container flex flex-col items-center gap-4 justify-center">
            {/* Divider Badge */}
            <div className="flex items-center gap-3">
                {/* Left line with dot */}
                <div className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-orange-500"></span>
                    <span className="h-px w-12 bg-gradient-to-r from-orange-500 to-white"></span>
                </div>

                {/* Badge */}
                <span className="px-4 py-2 lg:px-6 font-medium border rounded-full border-gray-300 text-lg text-zinc-700">
                    About Voyora
                </span>

                {/* Right line with dot */}
                <div className="flex items-center gap-1">
                    <span className="h-px w-12 bg-gradient-to-r from-white to-orange-500"></span>
                    <span className="h-1 w-1 rounded-full bg-orange-500"></span>
                </div>
            </div>
            {/* Content */}
            {/* Heading Text */}
            <h2 className="max-w-3xl lg:max-w-4/5 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-relaxed text-gray-900 text-center">
                We are dedicated to providing an effortless and enjoyable{" "}
                <span className="text-gray-400">
                    travel planning experience
                </span>{" "}
                for all our clients. Our platform blends a sleek, minimalistic
                design with{" "}
                <span className="text-gray-400">advanced features</span>, making{" "}
                <span className="text-gray-400">trip planning seamless</span>{" "}
                and hassle-free.
            </h2>
        </section>
    );
}
