"use client"


import { useSelector } from "react-redux";
import SidebarCard from "./SidebarCard";
import { sidebar } from "@/utility/sidebaritems";


const DashboardSidebar = () => {
     const { value } = useSelector(state => state.sidebarToggle);

     return (
          <div className={`${value ? "block w-full sm:w-[360px]   left-0 fixed  " : "hidden"}    left-0  lg:relative border-slate-200  bg-white/95 lg:block lg:w-[300px] overflow-hidden z-20 `}>
               <div className={` shadow-md  h-screen    w-full left-0 lg:w-[300px] duration-500  bg-white/95 fixed    px-1 `} >

                    {/* mapping   side bar card  */}
                    <div className=" pt-11 px-3">
                         {sidebar?.map((item, index) => <SidebarCard key={index} item={item}></SidebarCard>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default DashboardSidebar;