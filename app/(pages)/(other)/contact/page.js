import PageBanner from "../../../_components/common/PageBanner.jsx";
import Contact from "../../../_components/extra/Contact.jsx";

export const metadata = {
    title: "Contact Us | Get in Touch with Travel Experts",
    description:
        "Contact our travel experts for personalized vacation planning. Get quotes, ask questions, and start planning your dream trip today.",
    keywords:
        "contact travel agency, travel consultation, vacation planning, travel quotes, travel experts contact, travel inquiry",
};

export default function ContactPage() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1692895591954-451050db22fd?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Contact us"
            />
            <Contact />
        </>
    );
}
