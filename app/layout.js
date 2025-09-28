import localFont from "next/font/local";
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import Header from "./_components/common/Header.jsx";
import Footer from "./_components/common/Footer.jsx";
import LenisScroll from "./_lib/LenisScroll";
import LoadingOverlay from "./_ui/LoadingOverlay.jsx";
import { ToastContainer } from "react-toastify";

const Gilroy = localFont({
    src: "./Gilroy-Regular.ttf",
});

export const metadata = {
    title: "Travel & Tours | Plan Your Dream Vacation",
    description: 
        "Let us help you plan the perfect vacation. Expert travel planning, custom itineraries, exclusive deals on flights, hotels and tour packages worldwide.",
    keywords:
        "luxury travel, vacation planning, travel packages, flight booking, hotel reservations, guided tours, travel deals, international travel",
    category: "travel",
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: "Travel & Tours | Plan Your Dream Vacation",
        description: "Let us help you plan the perfect vacation. Expert travel planning and exclusive deals.",
        type: "website",
        locale: "en_US",
    }
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className="overflow-x-hidden"
            data-scroll-behavior="smooth"
        >
            <body
                cz-shortcut-listen="true"
                className={`${Gilroy.className} antialiased`}
            >
                <AppProvider>
                    <LoadingOverlay />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <LenisScroll />
                    <Header />
                    {children}
                    <Footer />
                </AppProvider>
            </body>
        </html>
    );
}