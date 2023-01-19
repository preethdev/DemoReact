import { useState } from "react"
import { FaChartLine, FaUserPlus, FaUser, FaEdit, FaRoute, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { useNavigate } from "react-router";
export default function SideNav() {
    const navigate = useNavigate();
    const [minimize, setminimize] = useState(false);
    const routehandler = (pathname: any) => {
        navigate('/Menu/' + pathname);
    }
    return (
        <>
            <div className="transition-all w-2/12 mt-8 ml-2">
                <div className="w-full mt-4 h-14 shadow-md shadow-slate-600 grid grid-cols-6 items-center place-content-evenly" onClick={() => {
                    routehandler('UserList');
                }}>
                    <span className="col-span-2 grid justify-items-end"> <FaUser /></span>
                    <span className="col-span-4 grid justify-items-start ml-2">User List</span>
                </div>
            </div>
        </>
    )
}
