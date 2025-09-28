import PageBanner from "../../_components/common/PageBanner.jsx";

export const metadata = {
    title: "Blog | Insights and Updates",
    description: "Stay up to date with our latest insights, industry news, and company updates through our blog.",
};

export default function BlogLayout({ children }) {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1717776412686-b19736dd2cba?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Our Latest Insights"            />
            {children}
        </>
    );
}
