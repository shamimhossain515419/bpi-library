"use client"

import Image from 'next/image';
import React, { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa6';
import image from "../../assets/account/background.jpg"
import { GlobalContext } from '@/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CiLogout } from "react-icons/ci";
import Cookies from 'js-cookie';

const UserModal = ({ openUserModal, setOpenUserModal }) => {
    const { user, logOutUser } = useContext(GlobalContext);
    const router = useRouter();
    const handleLogout = async () => {
        try {

            await logOutUser();
            Cookies.remove('accessToken');
            toast.success("Logout success");
            router.push("/");
            window.location.reload();
        } catch (error) {
            console.error("Logout failed", error);
            // Handle logout failure if needed
        }
    };

    return (
        <div className={`max-w-[350px] ${openUserModal ? " block" : " hidden"}  right-0 fixed top-[62px] shadow rounded-[5px] z-50 bg-white`}>

            <div className=" rounded-md shadow-2xl overflow-hidden">


                <div className=" m-3 rounded-md p-2 ">


                    <Link onClick={() => setOpenUserModal(false)} href={'/account'} className="flex items-center justify-between p-1 mb-0.5 hover:bg-tertiary rounded-t-md rounded-b-md ">

                        <p ><span className="font-semibold text-primary ms-1.5 me-10"> {user?.displayName} </span></p>
                        {
                            user?.photoURL ? <Image width={50} height={50} className="w-8 h-8 rounded-full " src={user?.photoURL} alt="" /> : <div className=' h-8 w-8 rounded-full flex justify-center items-center gap-2 uppercase text-white bg-[#ff6a00ae] border border-primary p-1'><p className='text-[15px] font-bold'> {user?.email?.slice(0, 2)} </p></div>
                        }

                    </Link>
                </div>





                <a href="#">
                    <div className="p-3 flex items-center justify-between hover:bg-tertiary   text-gray-600 hover:text-primary">
                        <div className="flex items-center">
                            <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center">
                                <FaFacebook></FaFacebook>
                            </div>
                            <span className="ms-2 font-semibold">Settings & privacy</span>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </a>
                <div onClick={handleLogout} >
                    <div className="p-3 flex items-center cursor-pointer justify-between hover:bg-tertiary   text-gray-600 hover:text-primary">
                        <div className="flex items-center">
                            <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center">
                                <CiLogout></CiLogout>
                            </div>
                            <span className="ms-2 font-semibold">Logout</span>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;