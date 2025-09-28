import Image from "next/image";
import { Star } from "lucide-react";

const hosts = [
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVuaWNlJTJDJTIwSXRhbHl8ZW58MHx8MHx8fDA%3D",
        hostImage:
            "https://images.unsplash.com/photo-1631131431211-4f768d89087d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Alex Johnson",
    },
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1559738933-d69ac3ff674b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVneXB0fGVufDB8fDB8fHww",
        hostImage:
            "https://images.unsplash.com/photo-1713946598186-8e28275719b9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFuYWdlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Michael Chen",
    },
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1575566668200-7dcaa7b2cf28?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hostImage:
            "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE1hbmFnZXJ8ZW58MHx8MHx8fDA%3D",
        name: "David Rodriguez",
    },
    {
        backgroundImage:
            "https://images.unsplash.com/photo-1566150783936-23096928b65b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdyZWVubGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        hostImage:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "James Thompson",
    },
];

export default function Hosts() {
    return (
        <section className="section-container">
            <h2 className="section-title">Best hosts of the month</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:px-8">
                {hosts.map((host, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden min-h-96 border border-zinc-200"
                    >
                        <div className="relative h-60">
                            <Image
                                src={host.backgroundImage}
                                alt="Background"
                                fill
                                className="object-cover"
                            />
                            {/* Host Image - Centered and positioned at bottom of background */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <Image
                                        src={host.hostImage}
                                        alt={host.name}
                                        width={224}
                                        height={224}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            {/* Rating badge positioned on background image */}
                            <div className="absolute top-4 left-4 flex items-center bg-white px-2 py-1 rounded-full gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-800 font-semibold">
                                    4.9
                                </span>
                            </div>
                        </div>

                        {/* Content Area - 25% height */}
                        <div className="h-1/4 flex flex-col justify-center items-center pt-8 pb-4 mt-10">
                            <h3 className="font-semibold text-gray-800 text-center text-lg">
                                {host.name}
                            </h3>
                            <p className="text-center text-gray-400 font-medium">
                                Gaylorside
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
