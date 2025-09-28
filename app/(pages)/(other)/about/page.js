import PageBanner from "../../../_components/common/PageBanner.jsx";
import Choose from "../../../_components/about/Choose.jsx";
import Hosts from "../../../_components/about/Hosts.jsx";
import Cta from "../../../_components/home/Cta.jsx";


export const metadata = {
    title: "About Us | Professional Travel Agency & Tour Experts",
    description:
        "Learn about our travel agency, experienced team, and commitment to creating unforgettable travel experiences. Discover why travelers choose us for their dream vacations.",
    keywords:
        "about travel agency, travel experts, professional tour company, travel team, travel experience, travel services",
};

export default function Aboutpage() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1734302262977-5fd530b28e73?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="About us"
            />
            <Choose />
            <Hosts />
            <Cta />
        </>
    );
}
