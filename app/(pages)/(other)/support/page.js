import PageBanner from "../../../_components/common/PageBanner.jsx";
import Support from "../../../_components/extra/Support.jsx";

export const metadata = {
    title: "Customer Support | Travel Assistance & Help Center",
    description:
        "Get travel support and assistance from our customer service team. Find help with bookings, travel issues, and vacation planning questions.",
    keywords:
        "travel support, customer service, travel assistance, booking help, travel customer care, vacation support",
};


export default function SupportPage() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1614088459293-5669fadc3448?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D"
                route="Support"
                title="24 / 7 Support"
            />
            <Support />
        </>
    );
}
