import PageBanner from "../../../_components/common/PageBanner.jsx";
import Gallery from "../../../_components/extra/Gallery.jsx";

export const metadata = {
    title: "Travel Gallery | Beautiful Destination Photos & Memories",
    description:
        "Browse our stunning travel gallery featuring beautiful destination photos, vacation memories, and inspiring travel imagery from around the world.",
    keywords:
        "travel gallery, destination photos, vacation photos, travel images, travel photography, destination gallery",
};


export default function GalleryPage() {
    return (
        <>
            <PageBanner
                imgSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Gallery"
            />
            <Gallery />
        </>
    );
}
