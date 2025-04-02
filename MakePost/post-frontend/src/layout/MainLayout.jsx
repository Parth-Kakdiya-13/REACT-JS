import { Outlet, useNavigate } from "react-router-dom";
import RightSidebar from "../components/RightSidebar";
import { Navbar } from "../components/Navbar";
import LeftSidebar from "../components/LeftSideBar";


const MainLayout = () => {


    const token = localStorage.getItem("token")

    return (
        <div className="relative flex h-screen bg-blue-900">
            {/* Left Sidebar - Full Height */}

            {token && <div className="w-1/4 bg-blue-950/60 p-5 h-full max-md:hidden relative">
                <LeftSidebar />
            </div>}

            {/* Main Content Area */}
            <div className="w-full mx-auto flex flex-col min-h-screen relative">
                {/* Centered Navbar */}
                <Navbar />
                {/* Dynamic Content (Changes Based on Route) */}
                <div className="flex-grow p-4 bg-blue-950">
                    <Outlet />
                </div>
            </div>

            {/* Right Sidebar - Full Height */}
            {token && <div className="w-1/4 bg-blue-950/60 p-5 h-full max-md:hidden">
                <RightSidebar />
            </div>}
        </div>
    );
};

export default MainLayout;
