"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageBanner({ imgSrc, title }) {
    const path = usePathname();

    const formatPathname = (pathname) => {
        return pathname
            .split("/")
            .filter((segment) => segment)
            .map((segment) =>
                segment
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
            );
    };
    return (
        <section
            style={{
                backgroundImage: "url(" + imgSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[500px] flex justify-center items-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/50 z-20"></div>

            <div className="relative z-40 space-y-8 text-center transform transition-all duration-1000 hover:scale-105">
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white capitalize leading-tight drop-shadow-2xl">
                        {title}
                    </h2>
                    <div className="w-32 h-2 bg-orange-500 mx-auto rounded-full animate-pulse"></div>
                </div>

                <div className="text-xl text-white font-semibold flex justify-center items-center gap-4 bg-black/30 px-8 py-4 rounded-full border-2 border-orange-500/50 backdrop-blur-sm">
                    <Link
                        href="/"
                        className="hover:text-orange-400 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-3"
                    >
                        Home
                    </Link>
                    <span className="text-orange-500 text-2xl animate-pulse">
                        ★
                    </span>
                    <span className="text-orange-300">
                        {formatPathname(path)}
                    </span>
                </div>
            </div>
        </section>
    );
}
