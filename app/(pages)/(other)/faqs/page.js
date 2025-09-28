import PageBanner from "../../../_components/common/PageBanner.jsx";
import Faqs from "../../../_components/extra/Faqs.jsx";

export const metadata = {
    title: "FAQs | Travel Questions & Booking Information",
    description:
        "Find answers to frequently asked questions about travel booking, vacation packages, payment options, and travel policies. Get help planning your trip.",
    keywords:
        "travel FAQs, booking questions, travel information, vacation planning help, travel policies, booking assistance",
};


export default function FaqsPage() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
                title="Frequently Asked Questions"
            />
            <Faqs />
        </>
    );
}
