import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";

export default function HomeScreen() {

    return (
        <div className='h-screen overflow-y-clip'>
            <Navbar />
            <div className="h-5/6 mt-4 flex flex-row">
                <SideNav />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
