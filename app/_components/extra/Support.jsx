"use client";
import { useState } from "react";
import { Mail, Phone, MessageCircle, HeadphonesIcon, Clock, MapPin, ChevronRight } from "lucide-react";

export default function Support() {
    const [formData, setFormData] = useState({ name: '', email: '', question: '', comment: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ name: '', email: '', question: '', comment: '' });
    };

    const supportServices = [
        {
            icon: HeadphonesIcon,
            name: "24/7 Customer Support",
            description: "Get instant help from our dedicated support team available round the clock to assist you with any queries or concerns."
        },
        {
            icon: Mail,
            name: "Email Support",
            description: "Send us detailed queries via email and receive comprehensive responses within 24 hours from our expert team."
        },
        {
            icon: Phone,
            name: "Phone Support",
            description: "Speak directly with our travel specialists for immediate assistance with bookings, changes, or emergency support."
        },
        {
            icon: MessageCircle,
            name: "Live Chat",
            description: "Connect instantly with our support agents through live chat for quick answers to your travel questions."
        },
        {
            icon: Clock,
            name: "Booking Assistance",
            description: "Get help with reservations, modifications, cancellations, and special requests from our booking specialists."
        },
        {
            icon: MapPin,
            name: "Travel Guidance",
            description: "Receive expert advice on destinations, itineraries, visa requirements, and travel tips from our experienced guides."
        }
    ];

    return (
        <div className="section-container">
            <div className="w-full lg:w-[90%] xl:w-4/5 mx-auto space-y-20">
                {/* Contact Form */}
                <div className="lg:w-3/4 mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We're here to help! Send us a message and we'll
                            respond as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Question/Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="What can we help you with?"
                                    value={formData.question}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            question: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="6"
                                    placeholder="Please provide details about your inquiry..."
                                    value={formData.comment}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            comment: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Support Services */}
                <div>
                    <div className="mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                            Support Services
                        </h3>
                        <p className="text-gray-600 text-lg text-center">
                            Choose the best way to reach us based on your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {supportServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                                            <Icon className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                                            {service.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <button className="flex items-center gap-2 text-black font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer group/btn mx-auto">
                                            <span>Learn More</span>
                                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

