"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Pages",
        href: "/about",
        subLinks: [
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "Support", href: "/support" },
            { name: "Authentication", href: "/authentication" },
            { name: "FAQs", href: "/faqs" },
            { name: "Gallery", href: "/gallery" },
            { name: "404", href: "/404" },
        ],
    },
    {
        name: "Tour",
        href: "/tour-grid",
        subLinks: [
            { name: "Tour Grid", href: "/tour-grid" },
            { name: "Tour List", href: "/tour-list" },
            { name: "Tour Details", href: "/tour-details" },
        ],
    },
    {
        name: "Destinations",
        href: "/destination-v1",
        subLinks: [
            { name: "Destination V1", href: "/destination-v1" },
            { name: "Destination V2", href: "/destination-v2" },
            { name: "Destination Details", href: "/destination-details" },
        ],
    },
    {
        name: "Activities",
        href: "/activities",
        subLinks: [
            { name: "Activities", href: "/activities" },
            { name: "Activity Details", href: "/activity-details" },
        ],
    },
    {
        name: "Blog",
        href: "/blogs",
        subLinks: [
            { name: "Blogs", href: "/blogs" },
            { name: "Blog Standard", href: "/blog-standard" },
            { name: "Blog Details", href: "/blog-details" },
        ],
    },
];

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 140);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <motion.header
            className={`w-full min-h-16 px-4 lg:px-10 lg:py-4 flex justify-between items-center bg-white transition-all duration-500 ease-in-out ${isScrolled ? "sticky top-0 left-0 z-[9999] header-anim shadow-lg" : ""}`}
        >
            {/* Logo */}
            <Link href="#" className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="Voyora Logo"
                    width={48}
                    height={48}
                    priority
                    className="object-cover"
                />
                <p className="text-xl font-bold">Voyora</p>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:block">
                <ul className="flex items-center justify-between gap-8">
                    {links.map((link, index) => {
                        const isActive =
                            link.href === pathname ||
                            link.subLinks?.some(
                                (subLink) => subLink.href === pathname
                            );

                        return (
                            <li key={index}>
                                <div className="flex items-center">
                                    <Link
                                        className={`${
                                            isActive
                                                ? "text-orange-400 font-semibold"
                                                : "hover:text-orange-400 text-black"
                                        } font-medium text-lg duration-500 transition-all ease-in-out cursor-pointer mr-2`}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>

                                    {link.subLinks && (
                                        <Menu
                                            as="div"
                                            className="relative inline-block"
                                        >
                                            <MenuButton className="mt-2 cursor-pointer">
                                                <ChevronDown
                                                    aria-hidden="true"
                                                    className="size-5 text-gray-400"
                                                />
                                            </MenuButton>
                                            <MenuItems
                                                transition
                                                className="absolute right-0 z-[9999] mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                            >
                                                <div className="py-1">
                                                    {link.subLinks.map(
                                                        (subLink) => (
                                                            <MenuItem
                                                                key={
                                                                    subLink.name
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        subLink.href
                                                                    }
                                                                    className={`${
                                                                        subLink.href ===
                                                                        pathname
                                                                            ? "text-orange-400 font-semibold"
                                                                            : "hover:text-orange-400 text-black"
                                                                    } block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden`}
                                                                >
                                                                    {
                                                                        subLink.name
                                                                    }
                                                                </Link>
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </div>
                                            </MenuItems>
                                        </Menu>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex justify-center items-center gap-4">
                <Link
                    href="/destination-v1"
                    className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors font-semibold duration-500 ease-in-out"
                >
                    Explore Now
                </Link>
                <Link
                    href="/authentication"
                    className="lg:hidden xl:block text-black px-6 py-3 rounded-lg border-2 border-orange-400 hover:bg-orange-100 transition-colors font-semibold duration-500 ease-in-out"
                >
                    Sign in
                </Link>
            </div>

            {/* Mobile Menu */}
            {isOpen ? (
                <X
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden cursor-pointer z-[10000]"
                />
            ) : (
                <MenuIcon
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden cursor-pointer"
                />
            )}
            {/* Mobile Navbar */}
                {isOpen && (
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="lg:hidden absolute right-0 top-0 z-[9999] w-4/5 h-screen bg-white shadow-lg border-l border-gray-200"
                    >
                        <ul className="flex flex-col gap-6 p-6 pt-20">
                            {links.map((link, index) => {
                                const isActive =
                                    link.href === pathname ||
                                    link.subLinks?.some(
                                        (subLink) => subLink.href === pathname
                                    );

                                return (
                                    <li
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <Link
                                            className={`${
                                                isActive
                                                    ? "text-orange-400 font-semibold"
                                                    : "hover:text-orange-400 text-black"
                                            } font-medium text-xl duration-500 transition-all ease-in-out cursor-pointer mr-2`}
                                            href={link.href}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.subLinks && (
                                            <Menu
                                                as="div"
                                                className="relative inline-block"
                                            >
                                                <MenuButton className="mt-2 cursor-pointer">
                                                    <ChevronDown
                                                        aria-hidden="true"
                                                        className="size-5 text-gray-400"
                                                    />
                                                </MenuButton>
                                                <MenuItems
                                                    transition
                                                    className="fixed md:absolute right-4 md:right-0 md:left-4 z-[9999] mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                                >
                                                    <div className="py-1">
                                                        {link.subLinks.map(
                                                            (subLink) => (
                                                                <MenuItem
                                                                    key={
                                                                        subLink.name
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            subLink.href
                                                                        }
                                                                        className={`${
                                                                            subLink.href ===
                                                                            pathname
                                                                                ? "text-orange-400 font-semibold"
                                                                                : "hover:text-orange-400 text-black"
                                                                        } block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden`}
                                                                    >
                                                                        {
                                                                            subLink.name
                                                                        }
                                                                    </Link>
                                                                </MenuItem>
                                                            )
                                                        )}
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 flex-col px-6">
                            <Link
                                href="/destination-v1"
                                className="bg-orange-400 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors font-semibold duration-500 ease-in-out w-full text-center"
                            >
                                Explore Now
                            </Link>
                            <Link
                                href="/authentication"
                                className="text-black px-6 py-3 rounded-lg border-2 border-orange-400 hover:bg-orange-100 transition-colors font-semibold duration-500 ease-in-out w-full text-center"
                            >
                                Sign in
                            </Link>
                        </div>
                    </motion.div>
                )}
            
        </motion.header>
    );
}
