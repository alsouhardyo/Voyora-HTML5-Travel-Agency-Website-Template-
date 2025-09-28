import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Youtube,
    Instagram,
    Linkedin,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Description with logo and social media */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                            />
                            <h3 className="text-xl font-bold">Voyora</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Discover amazing destinations and create
                            unforgettable memories with our expert travel
                            services.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Youtube, Instagram, Linkedin].map(
                                (Icon, index) => (
                                    <Link href="/" key={index}>
                                        <Icon className="w-5 h-5 hover:text-orange-400 cursor-pointer transition-colors" />
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                "Home",
                                "About",
                                "Destinations",
                                "Tours",
                                "Contact",
                            ].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link.toLowerCase()}`}
                                        className="text-gray-300 hover:text-orange-400 transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                "Help Center",
                                "FAQ",
                                "Privacy Policy",
                                "Terms of Service",
                                "Booking Support",
                            ].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/`}
                                        className="text-gray-300 hover:text-orange-400 transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Address</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-0.5 text-orange-400" />
                                <span className="text-gray-300">
                                    123 Travel Street, City, State 12345
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-orange-400" />
                                <span className="text-gray-300">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-orange-400" />
                                <span className="text-gray-300">
                                    info@travelagency.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Voyora Travel Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
