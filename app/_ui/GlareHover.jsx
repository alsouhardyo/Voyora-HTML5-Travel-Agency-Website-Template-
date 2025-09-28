"use client";
import { useRef } from "react";

const GlareHover = ({
    width = "100%",
    height = "100%",
    background = "transparent",
    borderRadius = "10px",
    borderColor = "#333",
    children,
    glareColor = "#ffffff",
    glareOpacity = 0.5,
    glareAngle = -45,
    glareSize = 250,
    transitionDuration = 650,
    playOnce = false,
    className = "",
    style = {},
}) => {
    const hex = glareColor.replace("#", "");
    let rgba = glareColor;
    if (/^[\dA-Fa-f]{6}$/.test(hex)) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
    }

    const overlayRef = useRef(null);

    const animateIn = () => {
        const el = overlayRef.current;
        if (!el) return;

        el.style.transition = "none";
        el.style.backgroundPosition = "-100% -100%";
        el.style.transition = `background-position ${transitionDuration}ms ease`;
        requestAnimationFrame(() => {
            el.style.backgroundPosition = "100% 100%";
        });
    };

    const animateOut = () => {
        const el = overlayRef.current;
        if (!el) return;

        if (playOnce) {
            el.style.transition = "none";
            el.style.backgroundPosition = "-100% -100%";
        } else {
            el.style.transition = `background-position ${transitionDuration}ms ease`;
            el.style.backgroundPosition = "-100% -100%";
        }
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(${glareAngle}deg,
        transparent 40%,
        ${rgba} 50%,
        transparent 60%)`,
        backgroundSize: `${glareSize}% ${glareSize}%`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-100% -100%",
        pointerEvents: "none",
        zIndex: 10,
    };

    return (
        <div
            className={`relative cursor-pointer overflow-hidden ${className}`}
            style={{
                width,
                height,
                background,
                borderRadius,
                borderColor,
                ...style,
            }}
            onMouseEnter={animateIn}
            onMouseLeave={animateOut}
        >
            {children}
            <div ref={overlayRef} style={overlayStyle} />
        </div>
    );
};

export default GlareHover;
