"use client";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { showToast } from "../../_lib/showToast";

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Sent Successfully"); 
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            info: "123 Travel Street, Adventure City, AC 12345",
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            icon: Phone,
            title: "Phone Number",
            info: "+1 (555) 123-4567",
            color: "text-green-600",
            bgColor: "bg-green-100"
        },
        {
            icon: Mail,
            title: "Email Address",
            info: "contact@voyora.com",
            color: "text-orange-600",
            bgColor: "bg-orange-100"
        }
    ];

    return (
        <div className="section-container">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:px-16">
                {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <div
                                className={`w-16 h-16 ${contact.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                            >
                                <Icon className={`w-8 h-8 ${contact.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {contact.title}
                            </h3>
                            <p className="text-gray-600">{contact.info}</p>
                        </div>
                    );
                })}
            </div>

            {/* Contact Form and Map */}
            <div className="flex flex-col lg:flex-row gap-12 lg:px-16">
                {/* Contact Form */}
                <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Send us a Message
                        </h2>
                        <p className="text-gray-600 mb-8">
                            We'd love to hear from you. Send us a message and
                            we'll respond as soon as possible.
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
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="What is this about?"
                                    value={formData.subject}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            subject: e.target.value,
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
                                    placeholder="Tell us more about your inquiry..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
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

                {/* Google Map */}
                <div className="lg:w-96">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 h-full">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Find Us Here
                        </h3>
                        <div className="h-96 lg:h-[550px] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Our Location"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
