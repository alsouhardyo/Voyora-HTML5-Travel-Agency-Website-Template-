"use client";
import { useState } from "react";
import { Mail, Lock, User, Facebook, Github, Chrome } from "lucide-react";
import { showToast } from "../../_lib/showToast";

export default function Authentication() {
    const [activeTab, setActiveTab] = useState("signin");
    const [signinForm, setSigninForm] = useState({ email: "", password: "" });
    const [signupForm, setSignupForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSigninSubmit = (e) => {
        e.preventDefault();
        showToast("👍 Signed in successfully");
        setSigninForm({ email: "", password: "" });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (signupForm.password !== signupForm.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        showToast("👍 Signed up successfully");
        setSignupForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md lg:max-w-lg xl:max-w-xl w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 xl:p-12 border border-gray-100">
                    {/* Tab Headers */}
                    <div className="flex mb-8">
                        <button
                            onClick={() => setActiveTab("signin")}
                            className={`flex-1 py-3 px-4 text-center font-semibold rounded-l-xl transition-colors duration-300 cursor-pointer ${
                                activeTab === "signin"
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`flex-1 py-3 px-4 text-center font-semibold rounded-r-xl transition-colors duration-300 cursor-pointer ${
                                activeTab === "signup"
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Sign In Form */}
                    {activeTab === "signin" && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                Welcome Back
                            </h2>
                            <form
                                onSubmit={handleSigninSubmit}
                                className="space-y-6"
                            >
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={signinForm.email}
                                            onChange={(e) =>
                                                setSigninForm({
                                                    ...signinForm,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            value={signinForm.password}
                                            onChange={(e) =>
                                                setSigninForm({
                                                    ...signinForm,
                                                    password: e.target.value,
                                                })
                                            }
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    Sign In
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Sign Up Form */}
                    {activeTab === "signup" && (
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                                Create Account
                            </h2>
                            <form
                                onSubmit={handleSignupSubmit}
                                className="space-y-6"
                            >
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={signupForm.name}
                                            onChange={(e) =>
                                                setSignupForm({
                                                    ...signupForm,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={signupForm.email}
                                            onChange={(e) =>
                                                setSignupForm({
                                                    ...signupForm,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="password"
                                            placeholder="Create a password"
                                            value={signupForm.password}
                                            onChange={(e) =>
                                                setSignupForm({
                                                    ...signupForm,
                                                    password: e.target.value,
                                                })
                                            }
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={signupForm.confirmPassword}
                                            onChange={(e) =>
                                                setSignupForm({
                                                    ...signupForm,
                                                    confirmPassword:
                                                        e.target.value,
                                                })
                                            }
                                            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Social Media Login */}
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or{" "}
                                    {activeTab === "signin"
                                        ? "sign in"
                                        : "sign up"}{" "}
                                    with
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center space-x-4">
                            <button className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                                <Facebook className="w-6 h-6 text-blue-600" />
                            </button>
                            <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                <Github className="w-6 h-6 text-gray-700" />
                            </button>
                            <button className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer">
                                <Chrome className="w-6 h-6 text-red-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
