"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        description:
            "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions exceeded our expectations.",
        name: "Clark Johnson",
        location: "New York, USA",
        profession: "Marketing Director",
        image: "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        description:
            "The level of professionalism and expertise demonstrated throughout our project was exceptional. I couldn't be happier with the results.",
        name: "Michael Chen",
        location: "Singapore",
        profession: "Tech Entrepreneur",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        description:
            "Their creative approach and dedication to delivering quality work made all the difference. Highly recommend their services to anyone looking for excellence.",
        name: "Emma Williams",
        location: "London, UK",
        profession: "Creative Director",
        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3JlYXRpdmUlMjBEaXJlY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        description:
            "Outstanding service from start to finish. They truly understand client needs and deliver solutions that exceed expectations.",
        name: "David Rodriguez",
        location: "Madrid, Spain",
        profession: "Business Consultant",
        image: "https://images.unsplash.com/photo-1589114207353-1fc98a11070b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        description:
            "The team's innovative thinking and problem-solving abilities are remarkable. They've helped transform our digital presence completely.",
        name: "Lisa Anderson",
        location: "Sydney, Australia",
        profession: "CEO",
        image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q0VPfGVufDB8fDB8fHww",
    },
    {
        description:
            "Exceptional work ethic and brilliant execution. They've become our go-to partners for all our project needs.",
        name: "James Wilson",
        location: "Toronto, Canada",
        profession: "Product Manager",
        image: "https://images.unsplash.com/photo-1653226439336-177c4c1ccc51?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJvZHVjdCUyME1hbmFnZXJ8ZW58MHx8MHx8fDA%3D",
    },
];

// ✅ Smart navigation component (reusable)
const SwiperNavButton = ({ direction, swiperRef }) => {
    const isPrev = direction === "prev";
    const Icon = isPrev ? ArrowLeft : ArrowRight;
    return (
        <button
            onClick={() =>
                isPrev
                    ? swiperRef.current?.slidePrev()
                    : swiperRef.current?.slideNext()
            }
            className="rounded-full shadow-md md:flex items-center justify-center p-2 bg-white border border-black hover:bg-gray-100 transition hidden cursor-pointer"
            aria-label={isPrev ? "Previous" : "Next"}
        >
            <Icon className="w-5 h-5" />
        </button>
    );
};

export default function Testimonials() {
    const swiperRef = useRef(null);

    return (
        <section className="section-container flex flex-col items-center gap-6">
            {/* Section Heading */}
            <div className="flex items-center gap-x-2 px-4 py-2 border border-black w-fit rounded-full">
                <Star className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium">Testimonials</span>
            </div>

            <h2 className="section-title text-center">What our clients say</h2>

            {/* Swiper + Navigation */}
            <div className="w-full lg:w-3/4 flex items-center gap-4">
                <SwiperNavButton direction="prev" swiperRef={swiperRef} />
                <Swiper
                    modules={[Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    speed={1200}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className="w-full"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    <Quote className="w-8 h-8 text-gray-600 rotate-y-180 mb-4" />
                                    <p className="font-semibold text-gray-600 mb-6">
                                        {t.description}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="text-3xl">&#9733;</p>
                                        <p className="text-3xl">&#9733;</p>
                                        <p className="text-3xl">&#9733;</p>
                                        <p className="text-3xl">&#9733;</p>
                                        <p className="text-3xl text-gray-400">
                                            &#9733;
                                        </p>
                                    </div>
                                    <h3 className="font-bold text-3xl mb-5">
                                        Feedback
                                    </h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-lg font-semibold">
                                            - {t.name}., {t.location}
                                        </p>
                                        <p className="text-gray-400">
                                            {t.profession}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative rounded-2xl w-[700px] h-[400px] hidden lg:block">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        className="object-cover rounded-2xl"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <SwiperNavButton direction="next" swiperRef={swiperRef} />
            </div>
        </section>
    );
}
