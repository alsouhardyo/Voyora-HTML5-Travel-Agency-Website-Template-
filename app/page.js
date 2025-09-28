import Hero from "./_components/home/Hero.jsx";
import About from "./_components/home/About.jsx";
import Services from "./_components/home/Services.jsx";
import Destinations from "./_components/home/Destinations.jsx";
import Achievement from "./_components/home/Achievement.jsx";
import Testimonials from "./_components/home/Testimonials.jsx";
import Cta from "./_components/home/Cta.jsx";

export default function page() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Destinations />
            <Achievement />
            <Testimonials />
            <Cta />
        </>
    );
}
