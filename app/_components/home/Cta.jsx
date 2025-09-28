import React from "react";
import { Eye } from "lucide-react";

export default function Cta() {
    return (
        <section className="w-full px-4 py-8 lg:px-8 lg:py-12 lg:mt-10 mt-5">
            <div
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1542639492-23184001faed?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="w-full h-[450px] rounded-4xl relative"
            >
                <div className="absolute inset-0 bg-black/20 rounded-4xl"></div>
                <div className="text-center space-y-4 px-4 lg:px-0 flex flex-col items-center justify-center h-full relative z-10">
                    <h2 className="text-xl md:text-3xl md:w-3/4 lg:text-5xl lg:w-7/10 font-bold text-white capitalize leading-14">
                        Ready to take the first step towards planning your dream
                        vacation?
                    </h2>
                    <p className="md:text-lg md:w-3/4 lg:text-xl text-gray-200 max-w-2xl mx-auto">
                        Find your perfect companion among our loving cats. Each
                        one has a unique personality waiting to brighten your
                        life.
                    </p>
                    <button className="mt-6 bg-black p-2 rounded-full flex items-center gap-2 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                        <div className="mr-2 w-10 h-10 rounded-full bg-white flex justify-center items-center">
                            <Eye size={20} />
                        </div>
                        <p className="text-white font-semibold pr-4">
                            Start your adventure now
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
}
