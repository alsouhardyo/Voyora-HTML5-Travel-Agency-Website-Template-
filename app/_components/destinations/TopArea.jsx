"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, List, Grid3X3, MoreHorizontal } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const categories = [
    "All",
    "Asia",
    "America",
    "Europe",
    "Africa",
    "Australia",
    "Other",
];

export default function TopArea() {
    const {
        activeCategory,
        setActiveCategory,
        destinations,
        setDestinationsData,
    } = useAppContext();
    const pathname = usePathname();
    const filterDestinations = (category) => {
        setActiveCategory(category);
        setDestinationsData(
            category === "All"
                ? destinations.slice(0, 12)
                : destinations.filter((item) => item.category === category)
        );
    };

    return (
        <section className="section-container">
            <div className="lg:px-14">
                {/* Top Row - Title and Search */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        Travel Destinations
                   </h1>
                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Bottom Row - Filters and View Options */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => filterDestinations(category)}
                                className={`px-4 py-2 lg:px-8 lg:py-3 text-sm lg:text-base font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
                                    activeCategory === category
                                        ? "bg-orange-400 text-white"
                                        : "text-gray-600 bg-gray-100 hover:bg-orange-400 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* View Options */}
                    <div className="flex items-center space-x-2 lg:space-x-3">
                        <Link href="/destination-v2">
                            <button
                                className={`p-2 lg:p-3 rounded-lg transition-colors cursor-pointer ${
                                    pathname === "/destination-v2"
                                        ? "text-orange-400 bg-gray-100"
                                        : "text-gray-600 hover:text-orange-400 hover:bg-gray-100"
                                }`}
                            >
                                <List className="w-5 h-5 lg:w-6 lg:h-6" />
                            </button>
                        </Link>
                        <Link href="/destinations">
                            <button
                                className={`p-2 lg:p-3 rounded-lg transition-colors cursor-pointer ${
                                    pathname === "/destination-v1"
                                        ? "text-orange-400 bg-gray-100"
                                        : "text-gray-600 hover:text-orange-400 hover:bg-gray-100"
                                }`}
                            >
                                <Grid3X3 className="w-5 h-5 lg:w-6 lg:h-6" />
                            </button>
                        </Link>
                        <Link href="/destination-details">
                            <button
                                className={`p-2 lg:p-3 rounded-lg transition-colors cursor-pointer ${
                                    pathname ===
                                    "/destination-details"
                                        ? "text-orange-400 bg-gray-100"
                                        : "text-gray-600 hover:text-orange-400 hover:bg-gray-100"
                                }`}
                            >
                                <MoreHorizontal className="w-5 h-5 lg:w-6 lg:h-6" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
