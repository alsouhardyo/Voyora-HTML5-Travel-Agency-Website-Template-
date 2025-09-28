"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            lerp: 0.3,
            easing: "easeInOut",
            anchors: true,
            smoothWheel: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
}
