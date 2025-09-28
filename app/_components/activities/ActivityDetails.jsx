"use client";
import { useState } from "react";
import Image from "next/image";
import GlareHover from "../../_ui/GlareHover.jsx";
import {
    Star,
    Clock,
    MapPin,
    Users,
    Calendar,
    Search,
    Tag,
    CheckCircle,
    Info,
    Phone,
    Mail,
    MessageCircle,
    Send,
    ThumbsUp,
    Globe,
    User,
    Filter,
} from "lucide-react";
import { showToast } from "../../_lib/showToast";

export default function ActivityDetails() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        website: "",
        comment: "",
    });

    const [bookingData, setBookingData] = useState({
        date: "",
        travelers: "1 traveler",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Successfully submitted");
        setFormData({
            fullName: "",
            email: "",
            website: "",
            comment: "",
        });
    };

    const handleBooking = (e) => {
        e.preventDefault();
        showToast("🎉 Booking confirmed!");
        setBookingData({
            date: "",
            travelers: "1 traveler",
        });
    };
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Bento Grid Images */}
                        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-96">
                            <GlareHover className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800"
                                    alt="Paragliding"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                            <GlareHover className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400"
                                    alt="Adventure"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                            <GlareHover className="col-span-1 row-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1495903546524-cdb71d0aed7d?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rmx5aW5nfGVufDB8fDB8fHww"
                                    alt="Flying"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                            <GlareHover className="col-span-2 row-span-1 rounded-lg overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600"
                                    alt="Mountain View"
                                    fill
                                    className="object-cover"
                                />
                            </GlareHover>
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Tandem Paragliding Adventure
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">4.9</span>
                                    <span className="text-gray-600">
                                        (187 reviews)
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-600">
                                    <MapPin className="w-4 h-4" />
                                    <span>Interlaken, Switzerland</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                About this Experience
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Soar through the Swiss Alps on an unforgettable
                                tandem paragliding adventure! Experience the
                                thrill of flight as you glide over stunning
                                mountain landscapes, pristine lakes, and
                                charming alpine villages with our certified
                                instructors.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                No experience necessary - our professional
                                pilots will handle all the technical aspects
                                while you enjoy breathtaking 360-degree views of
                                the Jungfrau region. This once-in-a-lifetime
                                adventure includes photos and videos of your
                                flight to capture every magical moment.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                What's Included
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">
                                        Certified tandem pilot and all safety
                                        equipment
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">
                                        Professional photos and videos of your
                                        flight
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">
                                        Pre-flight safety briefing and training
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">
                                        Transportation to launch site
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span className="text-gray-700">
                                        Flight certificate as souvenir
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Important Information */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Important Information
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Info className="w-5 h-5 text-blue-500" />
                                    <span className="text-gray-700">
                                        Weather dependent - alternative dates
                                        offered if cancelled
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-blue-500" />
                                    <span className="text-gray-700">
                                        Duration: 3-4 hours total (20-30 min
                                        flight time)
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-blue-500" />
                                    <span className="text-gray-700">
                                        Minimum age: 16 years, max weight: 100kg
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-blue-500" />
                                    <span className="text-gray-700">
                                        Free cancellation up to 48 hours before
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Location */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Location
                            </h2>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.8234567890123!2d7.8632!3d46.6863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478fa3d4f07d5b7f%3A0x4969e8c1dbf8b0!2sInterlaken%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>

                        {/* Comments */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">
                                Reviews (324)
                            </h2>
                            <div className="space-y-6 mb-8">
                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                            <Image
                                                src="https://images.unsplash.com/photo-1612683347796-c883224efbe2?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJ1c2luZXNzbWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
                                                alt="John"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        David Miller
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        March 15, 2024 • 2:30 PM
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Absolutely incredible
                                                experience! Flying over the
                                                Swiss Alps was a dream come
                                                true. The pilot was professional
                                                and made me feel completely
                                                safe. The views were
                                                breathtaking and the photos
                                                turned out amazing!
                                            </p>
                                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors cursor-pointer">
                                                <ThumbsUp className="w-4 h-4" />
                                                <span className="text-sm">
                                                    24 likes
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                            <Image
                                                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D"
                                                alt="Maria"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        Mike Thompson
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        March 12, 2024 • 4:15 PM
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4].map((i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                        />
                                                    ))}
                                                    <Star className="w-4 h-4 text-gray-300" />
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                What an adrenaline rush! I was
                                                nervous at first but the
                                                instructor was so calm and
                                                experienced. The takeoff was
                                                smooth and the landing was
                                                perfect. Definitely doing this
                                                again!
                                            </p>
                                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors cursor-pointer">
                                                <ThumbsUp className="w-4 h-4" />
                                                <span className="text-sm">
                                                    18 likes
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                            <Image
                                                src="https://images.unsplash.com/photo-1614468500745-9bc401dbf0ca?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJ1c2luZXNzbWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
                                                alt="David"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <p className="font-semibold text-gray-900">
                                                        Emma Wilson
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        March 8, 2024 • 11:45 AM
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4, 5].map(
                                                        (i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Best adventure activity I've
                                                ever done! The views of Lake
                                                Thun and the mountains were
                                                spectacular. Great value for
                                                money and the whole team was
                                                fantastic. Highly recommend!
                                            </p>
                                            <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors cursor-pointer">
                                                <ThumbsUp className="w-4 h-4" />
                                                <span className="text-sm">
                                                    31 likes
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Leave Comment Form */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-semibold mb-6">
                                    Leave a Review
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Rating
                                        </label>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star
                                                    key={i}
                                                    className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="text"
                                                    value={formData.fullName}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            fullName:
                                                                e.target.value,
                                                        })
                                                    }
                                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                                                    placeholder="Your full name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Website URL (Optional)
                                        </label>
                                        <div className="relative">
                                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="url"
                                                value={formData.website}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        website: e.target.value,
                                                    })
                                                }
                                                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                                                placeholder="https://yourwebsite.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Review
                                        </label>
                                        <textarea
                                            value={formData.comment}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    comment: e.target.value,
                                                })
                                            }
                                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                                            rows="5"
                                            placeholder="Share your experience with this activity..."
                                        ></textarea>
                                    </div>
                                    <button
                                        onClick={handleSubmit}
                                        className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-500 ease-in-out font-semibold cursor-pointer"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Enhanced Search Bar */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg border border-blue-100">
                            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <Search className="w-5 h-5 text-blue-500" />
                                Search Activities
                            </h3>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for adventures..."
                                    className="w-full pl-12 pr-4 py-3 border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                                />
                            </div>
                        </div>

                        {/* Enhanced Categories */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <Filter className="w-5 h-5 text-gray-600" />
                                Categories
                            </h3>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Cultural Tours
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        24
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Adventure Tours
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        18
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Food & Drink
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        12
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Nature & Wildlife
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        15
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Water Sports
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        9
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Photography Tours
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        7
                                    </span>
                                </label>
                                <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded text-orange-500 focus:ring-orange-500"
                                    />
                                    <span className="text-gray-700">
                                        Wellness & Spa
                                    </span>
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        11
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Combined Booking Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="text-center mb-6">
                                <div className="relative bg-white border-4 border-orange-500 rounded-2xl p-6 mb-4 shadow-lg">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Best Price
                                    </div>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-sm text-gray-500">
                                            $
                                        </span>
                                        <span className="text-5xl font-black text-orange-500">
                                            189
                                        </span>
                                    </div>
                                    <p className="text-gray-600 font-medium mt-1">
                                        per person
                                    </p>
                                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-green-600">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Free cancellation</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Date
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="date"
                                            value={bookingData.date}
                                            onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Number of Travelers
                                    </label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <select 
                                            value={bookingData.travelers}
                                            onChange={(e) => setBookingData({...bookingData, travelers: e.target.value})}
                                            className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none appearance-none"
                                        >
                                            <option>1 traveler</option>
                                            <option>2 travelers</option>
                                            <option>3 travelers</option>
                                            <option>4 travelers</option>
                                            <option>5 travelers</option>
                                            <option>6 travelers</option>
                                        </select>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleBooking}
                                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold text-lg shadow-lg cursor-pointer"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Popular Tags */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <Tag className="w-5 h-5 text-gray-600" />
                                Popular Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-2 rounded-full text-sm flex items-center gap-1 hover:from-blue-200 hover:to-blue-300 transition-all cursor-pointer">
                                    <Tag className="w-3 h-3" /> Temple
                                </span>
                                <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 px-3 py-2 rounded-full text-sm flex items-center gap-1 hover:from-green-200 hover:to-green-300 transition-all cursor-pointer">
                                    <Tag className="w-3 h-3" /> Culture
                                </span>
                                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-3 py-2 rounded-full text-sm flex items-center gap-1 hover:from-purple-200 hover:to-purple-300 transition-all cursor-pointer">
                                    <Tag className="w-3 h-3" /> Spiritual
                                </span>
                                <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700 px-3 py-2 rounded-full text-sm flex items-center gap-1 hover:from-yellow-200 hover:to-yellow-300 transition-all cursor-pointer">
                                    <Tag className="w-3 h-3" /> Guide
                                </span>
                                <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 px-3 py-2 rounded-full text-sm flex items-center gap-1 hover:from-pink-200 hover:to-pink-300 transition-all cursor-pointer">
                                    <Tag className="w-3 h-3" /> Photography
                                </span>
                                <span className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 px-3 py-2 rounded-full text-sm flex items-center gap-1 hover:from-indigo-200 hover:to-indigo-300 transition-all cursor-pointer">
                                    <Tag className="w-3 h-3" /> History
                                </span>
                            </div>
                        </div>

                        {/* Enhanced Support Banner */}
                        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl">
                            <div className="text-center mb-6">
                                <MessageCircle className="w-12 h-12 mx-auto mb-3 text-blue-200" />
                                <h3 className="text-xl font-bold mb-2">
                                    Need Help?
                                </h3>
                                <p className="text-blue-100">
                                    Our travel experts are here to assist you
                                    24/7
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-blue-100">
                                    <Phone className="w-5 h-5" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-blue-100">
                                    <Mail className="w-5 h-5" />
                                    <span>support@travel.com</span>
                                </div>
                                <button className="w-full flex items-center justify-center gap-2 bg-white text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold mt-4 cursor-pointer">
                                    <MessageCircle className="w-5 h-5" />
                                    Start Live Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
