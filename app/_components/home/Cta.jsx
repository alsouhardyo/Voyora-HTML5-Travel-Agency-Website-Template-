import React from "react";
import { Eye } from "lucide-react";

export default function Cta() {
    return (
        <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 mt-4 sm:mt-6 lg:mt-10">
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1542639492-23184001faed?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-2xl sm:rounded-3xl lg:rounded-4xl relative"
            >
                <div className="absolute inset-0 bg-black/20 rounded-2xl sm:rounded-3xl lg:rounded-4xl"></div>
                <div className="text-center space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center h-full relative z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white capitalize leading-tight sm:leading-snug md:leading-normal w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4">
                        Ready to take the first step towards planning your dream vacation?
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto leading-relaxed">
                        Discover breathtaking destinations and create unforgettable memories with our expertly crafted travel experiences.
                    </p>
                    <button className="group mt-4 sm:mt-5 md:mt-6 bg-black p-2 sm:p-2.5 md:p-3 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white flex justify-center items-center">
                            <Eye size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5 transition-transform duration-500 ease-in-out group-hover:rotate-360" />
                        </div>
                        <p className="text-white font-semibold pr-3 sm:pr-4 text-sm sm:text-base md:text-base">
                            Start your adventure now
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
}
