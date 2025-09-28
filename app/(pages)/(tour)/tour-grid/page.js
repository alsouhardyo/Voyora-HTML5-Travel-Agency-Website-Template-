import Sidebar from "../../../_components/tour/Sidebar.jsx";
import Toursgrid from "../../../_components/tour/Toursgrid.jsx";

export default function TourGrid() {
    return (
        <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
                <div className="w-full lg:w-auto lg:flex-shrink-0">
                    <Sidebar />
                </div>
                <div className="flex-1 min-w-0">
                    <Toursgrid />
                </div>
            </div>
        </div>
    );
}
