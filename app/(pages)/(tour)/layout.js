import PageBanner from "../../_components/common/PageBanner.jsx";

export const metadata = {
    title: "Tour Packages | Travel Agency",
    description:
        "Explore our curated selection of tour packages for your next adventure",
    keywords: "tours, travel packages, vacation packages, guided tours",
};

export default function TourLayout({ children }) {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Tour Packages"
            />
            {children}
        </>
    );
}
