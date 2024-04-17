import DashboardSidebar from '@/components/account/sidebar/DashboardSidebar';
import DashboardNavbar from '@/components/account/sidebar/dashboardNavbar';
import { Toaster } from 'react-hot-toast';
const layout = ({ children }) => {
    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className=" flex items-start  pt-[87px]">
                <div className=''>
                    <DashboardSidebar></DashboardSidebar>
                </div>

                <div className={` w-full  min-w-[50%] p-4 m-0 pt-10  `}>
                    <div>{children}</div>
                    <Toaster />
                </div>
            </div>

        </div>
    );
};

export default layout;