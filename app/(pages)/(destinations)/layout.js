import PageBanner from "../../_components/common/PageBanner.jsx";

export const metadata = {
    title: "Explore Travel Destinations | Your Travel Guide",
    description: "Discover amazing travel destinations around the world. Find detailed guides, tips, and recommendations for your next adventure.",
};

export default function DestinationLayout({ children }) {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Explore Destinations"
            />
            {children}
        </>
    );
}
