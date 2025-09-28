import PageBanner from "./_components/common/PageBanner.jsx";
import NotFoundPage from "./_components/extra/NotFoundError.jsx";

export default function NotFound() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Page Not Found"
            />
            <NotFoundPage />
        </>
    );
}
