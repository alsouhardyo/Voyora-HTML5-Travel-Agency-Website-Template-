import React from "react";
import CountUp from "../../_ui/CountUp";
import { ArrowUpFromDot } from "lucide-react";

export default function Achievement() {
    return (
        <section className="section-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 lg:gap-8 lg:px-16 flex-wrap">
                <div className="border-r border-zinc-300 space-y-2 flex justify-center items-center flex-col">
                    <div className="flex items-center gap-4">
                        <p className="text-4xl md:text-5xl lg:text-7xl font-bold">
                            <CountUp
                                from={0}
                                to={9}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            <span>k+</span>
                        </p>
                        <ArrowUpFromDot
                            size={32}
                            className="border rounded-full p-1 md:p-2"
                        />
                    </div>
                    <p className="text-gray-600 font-medium">Listed places</p>
                </div>
                <div className="md:border-r md:border-zinc-300 space-y-2 flex justify-center items-center flex-col">
                    <div className="flex items-center gap-2">
                        <p className="text-4xl md:text-5xl lg:text-7xl font-bold flex items-center gap-2">
                            <CountUp
                                from={0}
                                to={23}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                            <span className="text-lg md:text-2xl font-semibold">
                                Million+
                            </span>
                        </p>
                        <ArrowUpFromDot
                            size={32}
                            className="border rounded-full p-1 md:p-2"
                        />
                    </div>
                    <p className="text-gray-600 font-medium">Happy customers</p>
                </div>
                <div className="border-r border-zinc-300 space-y-2 flex justify-center items-center flex-col">
                    <div className="flex items-center gap-2">
                        <p className="text-4xl md:text-5xl lg:text-7xl font-bold flex items-center gap-2">
                            <CountUp
                                from={0}
                                to={70}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />{" "}
                            <span className="text-2xl font-semibold">+</span>
                        </p>
                        <ArrowUpFromDot
                            size={32}
                            className="border rounded-full p-1 md:p-2"
                        />
                    </div>
                    <p className="text-gray-600 font-medium">Awards</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <div className="flex items-center gap-2">
                        <p className="text-4xl md:text-5xl lg:text-7xl font-bold flex items-center gap-2">
                            <CountUp
                                from={0}
                                to={98}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />{" "}
                            <span className="text-2xl font-semibold">%</span>
                        </p>
                        <ArrowUpFromDot
                            size={32}
                            className="border rounded-full p-1 md:p-2"
                        />
                    </div>
                    <p className="text-gray-600 font-medium">
                        Lasting relationships
                    </p>
                </div>
            </div>
        </section>
    );
}
