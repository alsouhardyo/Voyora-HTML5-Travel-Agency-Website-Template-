import React from "react";
import Image from "next/image";
import { Shield, Clock, Award, Users } from "lucide-react";

const causes = [
    {
        icon: Shield,
        title: "Safe & Secure",
        description:
            "Your safety is our top priority with thoroughly verified accommodations and secure booking systems.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description:
            "Round-the-clock dedicated customer support ready to assist you anytime, anywhere.",
    },
    {
        icon: Award,
        title: "Best Quality",
        description:
            "Premium travel experiences with carefully selected destinations and top-tier services.",
    },
    {
        icon: Users,
        title: "Expert Guides",
        description:
            "Professional local guides with extensive knowledge to make your journey truly memorable and informative.",
    },
];

export default function Choose() {
    return (
        <section className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-20">
                {/* Left Column - Image */}
                <div className="relative h-96 lg:h-[500px]">
                    <Image
                        src="https://images.unsplash.com/photo-1640205330815-6d3e013489cd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Why Choose Us"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Right Column - Content */}
                <div className="space-y-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        Why Choose Us?
                    </h2>

                    <div className="space-y-6">
                        {causes.map((cause, index) => {
                            const Icon = cause.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="flex-shrink-0">
                                        <Icon className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {cause.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {cause.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
