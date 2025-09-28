import PageBanner from "../../_components/common/PageBanner.jsx";

export const metadata = {
    title: "Activities | Voyora Travel Agency",
    description: "Discover exciting activities and adventures with Voyora Travel Agency. From thrilling outdoor excursions to cultural experiences, find the perfect activities for your next trip.",
};

export default function ActivityLayout({ children }) {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Activities"
            />
            {children}
        </>
    );
}
