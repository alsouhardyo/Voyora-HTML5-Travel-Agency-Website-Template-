"use client";
import { useState } from "react";
import { faqs } from "../../_lib/faqs.js";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Send } from "lucide-react";
import { showToast } from "../../_lib/showToast";

export default function Faqs() {
    const [openFaq, setOpenFaq] = useState(1);
    const [supportForm, setSupportForm] = useState({
        name: "",
        email: "",
        question: "",
    });

    const handleSupportSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Sent successfully");
        setSupportForm({ name: "", email: "", question: "" });
    };

    return (
        <div className="section-container">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h2 className="text-xl lg:text-2xl text-orange-500 font-semibold mb-6">
                    Everything You Need to Know
                </h2>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    Frequently Asked Questions
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Find answers to the most common questions about our travel
                    services, booking process, and tour experiences. Can't find
                    what you're looking for? Feel free to reach out to our
                    support team.
                </p>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto mb-16">
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenFaq(
                                        openFaq === faq.id ? null : faq.id
                                    )
                                }
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 font-bold text-sm">
                                            {faq.id}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                        {faq.question}
                                    </h3>
                                </div>
                                <motion.div
                                    animate={{
                                        rotate: openFaq === faq.id ? 180 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="flex-shrink-0 cursor-pointer"
                                >
                                    <ChevronDown className="w-6 h-6 text-gray-500" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openFaq === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.04, 0.62, 0.23, 0.98],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="pl-12">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Support Form */}
            <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Still Have Questions?
                        </h3>
                        <p className="text-gray-600">
                            Our support team is here to help! Send us your
                            question and we'll get back to you quickly.
                        </p>
                    </div>

                    <form onSubmit={handleSupportSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={supportForm.name}
                                    onChange={(e) =>
                                        setSupportForm({
                                            ...supportForm,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 border-2 border-white rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all bg-white"
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
                                    value={supportForm.email}
                                    onChange={(e) =>
                                        setSupportForm({
                                            ...supportForm,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full px-4 py-3 border-2 border-white rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all bg-white"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Your Question
                            </label>
                            <textarea
                                rows="4"
                                placeholder="What would you like to know?"
                                value={supportForm.question}
                                onChange={(e) =>
                                    setSupportForm({
                                        ...supportForm,
                                        question: e.target.value,
                                    })
                                }
                                className="w-full px-4 py-3 border-2 border-white rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all resize-none bg-white"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Send className="w-5 h-5" />
                            <span>Send Question</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
