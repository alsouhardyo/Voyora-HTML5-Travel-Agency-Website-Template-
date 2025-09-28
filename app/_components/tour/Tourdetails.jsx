"use client";
import { useState } from "react";
import {
    Clock,
    MapPin,
    Users,
    Globe,
    DollarSign,
    ChevronDown
} from "lucide-react";
import Image from "next/image";
import GlareHover from "../../_ui/GlareHover";
import { showToast } from "../../_lib/showToast";
import { motion, AnimatePresence } from "framer-motion";

export default function Tourdetails() {
    const [openFaq, setOpenFaq] = useState(null);
    const [commentForm, setCommentForm] = useState({ name: '', email: '', comment: '' });
    const [bookingForm, setBookingForm] = useState({ date: '', adults: '1', children: '0' });

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Successfully submitted"); 
        setCommentForm({ name: '', email: '', comment: '' });
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Booking completed"); 
        setBookingForm({ date: '', adults: '1', children: '0' });
    };

    const images = [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop",
    ];

    const details = [
        { icon: Clock, title: "Duration", value: "10 Days" },
        { icon: Users, title: "Type", value: "Adventure Tour" },
        { icon: Globe, title: "Language", value: "Japanese" },
        { icon: DollarSign, title: "Price", value: "$2,499" },
    ];

    const faqs = [
        {
            question: "What is included in the tour package?",
            answer: "The tour includes accommodation in traditional ryokans and modern hotels, all meals featuring authentic Japanese cuisine, bullet train passes, guided tours, and entrance fees to temples, gardens, and cultural sites.",
        },
        {
            question: "What should I bring for the tour?",
            answer: "Pack comfortable walking shoes, modest clothing for temple visits, a portable umbrella, camera, and any personal medications. We'll provide a detailed packing list upon booking.",
        },
        {
            question: "Do I need a visa for Japan?",
            answer: "Most visitors can enter Japan visa-free for up to 90 days. However, requirements vary by nationality, so please check with your local Japanese consulate before traveling.",
        },
        {
            question: "What is the best time to visit?",
            answer: "Spring (March-May) for cherry blossoms and autumn (September-November) for fall colors are ideal. Our tour operates year-round with seasonal highlights.",
        },
        {
            question: "How physically demanding is this tour?",
            answer: "This tour involves moderate walking and some hiking. Most activities are suitable for people with average fitness levels. Alternative options are available for those with mobility concerns.",
        },
    ];

    return (
        <div className="p-4 md:p-8 lg:px-12 lg:py-10 mt-5 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column */}
                <div className="flex-1 space-y-12">
                    {/* Gallery - Bento Grid */}
                    <div className="grid grid-cols-4 gap-4 grid-rows-2 h-72">
                        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg">
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-60}
                                glareSize={300}
                                transitionDuration={1500}
                                playOnce={false}
                            >
                                <Image
                                    src={images[0]}
                                    alt="Tour image 1"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                        </div>
                        <div className="col-span-2 row-span-1 relative overflow-hidden rounded-lg">
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-60}
                                glareSize={300}
                                transitionDuration={1500}
                                playOnce={false}
                            >
                                <Image
                                    src={images[1]}
                                    alt="Tour image 2"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                        </div>
                        <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-60}
                                glareSize={300}
                                transitionDuration={1500}
                                playOnce={false}
                            >
                                <Image
                                    src={images[2]}
                                    alt="Tour image 3"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                        </div>
                        <div className="col-span-1 row-span-1 relative overflow-hidden rounded-lg">
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-60}
                                glareSize={300}
                                transitionDuration={1500}
                                playOnce={false}
                            >
                                <Image
                                    src={images[3]}
                                    alt="Tour image 4"
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </GlareHover>
                        </div>
                    </div>

                    {/* Title and Location */}
                    <div className="space-y-3">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                            Discover Japan: Tokyo to Kyoto Adventure
                        </h1>
                        <div className="flex items-center gap-2 text-orange-500">
                            <MapPin className="w-5 h-5" />
                            <span className="font-medium">
                                Tokyo & Kyoto, Japan
                            </span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {details.map((detail, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                            >
                                <detail.icon className="w-6 h-6 text-orange-500" />
                                <div>
                                    <p className="text-sm text-gray-600">
                                        {detail.title}
                                    </p>
                                    <p className="font-semibold text-gray-800">
                                        {detail.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Tour Description
                        </h2>
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed">
                                Embark on an extraordinary journey through
                                Japan's cultural heart, from the bustling
                                metropolis of Tokyo to the serene temples of
                                Kyoto. This immersive 10-day adventure combines
                                ancient traditions with modern marvels, offering
                                you authentic experiences that showcase the true
                                essence of Japanese culture.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Experience the thrill of riding the famous
                                bullet train, participate in traditional tea
                                ceremonies, explore magnificent temples and
                                gardens, witness the artistry of geishas in Gion
                                district, and savor authentic kaiseki cuisine.
                                Our expert local guides will provide deep
                                insights into Japanese customs, history, and
                                philosophy, ensuring you gain a profound
                                understanding of this fascinating culture.
                            </p>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg cursor-pointer"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenFaq(
                                                openFaq === index ? null : index
                                            )
                                        }
                                        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-semibold text-gray-800">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{
                                                rotate:
                                                    openFaq === index ? 180 : 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: "easeInOut",
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4">
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comment Form */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Leave a Comment
                        </h2>
                        <form onSubmit={handleCommentSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={commentForm.name}
                                    onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={commentForm.email}
                                    onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                                    required
                                />
                            </div>
                            <textarea
                                rows="5"
                                placeholder="Your Comment"
                                value={commentForm.comment}
                                onChange={(e) => setCommentForm({...commentForm, comment: e.target.value})}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none resize-none"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-500 ease-in-out cursor-pointer"
                            >
                                Submit Comment
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column - Booking Sidebar */}
                <div className="lg:w-96">
                    <div className="sticky top-24 space-y-6">
                        {/* Price Card */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">
                                    $2,499
                                </div>
                                <p className="text-orange-700 font-medium">
                                    per person
                                </p>
                                <div className="flex items-center justify-center gap-1 mt-2">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600 ml-1">
                                        (4.8)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                Reserve Your Spot
                            </h3>
                            <form onSubmit={handleBookingSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        value={bookingForm.date}
                                        onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Adults
                                        </label>
                                        <select 
                                            value={bookingForm.adults}
                                            onChange={(e) => setBookingForm({...bookingForm, adults: e.target.value})}
                                            className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5+</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Children
                                        </label>
                                        <select 
                                            value={bookingForm.children}
                                            onChange={(e) => setBookingForm({...bookingForm, children: e.target.value})}
                                            className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                        >
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4+</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    Book Now - $2,499
                                </button>
                            </form>
                        </div>

                        {/* Tour Highlights */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Tour Highlights
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            Tokyo & Kyoto
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Cultural Journey
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            10 Days
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Full Experience
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            Max 12 People
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Small Group
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            Cultural Guide
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Local Expert
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Map */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                                Location
                            </h3>
                            <div className="relative overflow-hidden rounded-xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747707654442!2d139.69170731525836!3d35.68948998019441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Tour Location"
                                    className="rounded-xl"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
