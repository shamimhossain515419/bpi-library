"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MenuBar from "./MenuBar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Container from "../container/Container";
import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { GlobalContext } from "@/AuthProvider/AuthProvider";
import CustomToastMessage from "@/components/customToastMessage/CustomToastMessage";
import toast from "react-hot-toast";
import { Avatar } from "keep-react";
import UserModal from "@/components/userModal/UserModal";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
     const [Open, setOpen] = useState(false);
     const { user, logOutUser } = useContext(GlobalContext);
     const pathName = usePathname();
     const [openUserModal, setOpenUserModal] = useState(false)
     const router = useRouter();



     return (
          <div className=" mb-12 relative text-gray-600">
               <div>p
                    <nav
                         className={`px-2 py-3 z-50    bg-white shadow-md  fixed top-0 left-0 w-full transition-transform`}
                    >
                         <Container>
                              <div className=" ">
                                   <div className="flex justify-between items-center">
                                        <div className=" flex  items-center gap-4 clear-start w-[170px]">
                                             <Link href="/">
                                                  {" "}
                                                  <Image width={50} height={50}
                                                       src={logo}
                                                       className="    w-full   h h-full"
                                                       alt="image"
                                                  />{" "}
                                             </Link>
                                        </div>

                                        <div className=" hidden lg:flex items-center gap-3  space-x-5">
                                             <Link
                                                  className={` rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                                  href={"/allbooks"}
                                             >
                                                  All Books{" "}
                                                  <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>{" "}
                                             </Link>
                                             <Link
                                                  className={` rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                                  href={"/research"}
                                             >
                                                  {" "}
                                                  Research Cell{" "}
                                                  <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                             </Link>
                                             <div className=" group ">
                                                  <div>
                                                       <Link href={'/department/coumputer'} className="  flex  items-center  gap-3 rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all  ">
                                                            <span> Department</span>
                                                            <MdKeyboardArrowDown size={20} />
                                                            <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                                       </Link>
                                                  </div>
                                                  <div className="  group-hover:block hover:block hidden duration-200   absolute z-30    ">
                                                       <div className="  space-y-3 flex flex-col  gap-3  mt-[20px] bg-white  py-5    " >
                                                            <Link href={'/collections/fall-winter-2023'} className=" hover:text-primary hover:bg-tertiary py-2 duration-200   px-10"> Computer </Link>
                                                            <Link href={'/department/spring-summer-2023'} className=" hover:text-primary  hover:bg-tertiary py-2  duration-200   px-10">  Civil </Link>
                                                            <Link href={'/department/fall-winter-2022'} className=" hover:text-primary   hover:bg-tertiary py-2  duration-200   px-10">  Electrical  </Link>
                                                            <Link href={'/department/fall-winter-2022'} className=" hover:text-primary  hover:bg-tertiary py-2   duration-200   px-10">  Electronic </Link>
                                                            <Link href={'/department/fall-winter-2022'} className=" hover:text-primary  hover:bg-tertiary py-2  duration-200   px-10">  Power </Link>
                                                       </div>
                                                  </div>
                                             </div>
                                             <Link
                                                  className={` rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                                  href={"/gallery"}
                                             >
                                                  Gallery{" "}
                                                  <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                             </Link>
                                             <Link
                                                  className={` rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                                  href={"/about"}
                                             >
                                                  About{" "}
                                                  <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                             </Link>
                                             <Link
                                                  className={` rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                                  href={"/contact"}
                                             >
                                                  Contact Us{" "}
                                                  <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                             </Link>
                                        </div>

                                        {/* right side user image and modal for large screen */}
                                        <div className=" hidden lg:block">
                                             {user ? (
                                                  <div onClick={() => setOpenUserModal(!openUserModal)} className=" cursor-pointer">
                                                       {" "}
                                                       {user?.photoURL ? (
                                                            <Image
                                                                 width={40}
                                                                 height={40}
                                                                 className=" w-[40px] h-[40px] rounded-full"
                                                                 src={user?.photoURL}
                                                                 alt="image"
                                                            ></Image>
                                                       ) : (
                                                            <Avatar shape="circle" />
                                                       )}{" "}
                                                  </div>
                                             ) : (
                                                  <div className="flex gap-2 items-center">
                                                       <Link
                                                            href={"/login"}
                                                            className="px-5 border-2  py-2 hover:border-white transition-all  text-white bg-[#B6561A] hover:bg-bg-[#B6561A]  duration-150 rounded-[5px] font-mediumer:shadow-lg"
                                                       >
                                                            Login
                                                       </Link>
                                                  </div>
                                             )}
                                        </div>

                                        {/* three bar menu for mobile screen */}
                                        <div onClick={() => setOpen(!Open)} className=" lg:hidden ">
                                             {!Open ? (
                                                  <FaBars size={24} className=" ">
                                                       {" "}
                                                  </FaBars>
                                             ) : (
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       fill="none"
                                                       viewBox="0 0 24 24"
                                                       strokeWidth={1.5}
                                                       stroke="currentColor"
                                                       className="w-8 h-8"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                       />
                                                  </svg>
                                             )}
                                        </div>
                                   </div>
                                   {/* navigation links  for mobile screen */}
                                   <div className="lg:hidden">
                                        {Open ? (
                                             <MenuBar user={user} setOpen={setOpen}></MenuBar>
                                        ) : null}
                                   </div>
                              </div>
                         </Container>
                    </nav>
               </div>

               <CustomToastMessage></CustomToastMessage>

               <UserModal openUserModal={openUserModal}></UserModal>


          </div>
     );
};

export default Navbar;
