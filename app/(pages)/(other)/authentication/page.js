import PageBanner from "../../../_components/common/PageBanner.jsx";
import Authentication from "../../../_components/extra/Authentication.jsx";

export const metadata = {
    title: "Login | Access Your Travel Account",
    description:
        "Login to your travel account to manage bookings, view trip details, and access exclusive travel deals and offers.",
    keywords:
        "travel login, account access, booking management, travel account, user login, travel dashboard",
};


export default function AuthPage() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Authentication"
            />
            <Authentication />
        </>
    );
}
