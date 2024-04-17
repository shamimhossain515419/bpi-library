
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';



const MenuBar = ({ user }) => {
     const pathName = usePathname();

     return (
          <div className=' pt-4'>
               <div>
                    <div className=' '>
                         <hr />
                         <div className='  '>
                              <div className="  space-y-3">
                                   <Link
                                        className={` rounded-lg block  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                        href={"/all-books"}
                                   >
                                        All Books{" "}
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>{" "}
                                   </Link>
                                   <Link
                                        className={` block rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
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
                                        className={` block rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                        href={"/gallery"}
                                   >
                                        Gallery{" "}
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                                   <Link
                                        className={` block rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                        href={"/about"}
                                   >
                                        About{" "}
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                                   <Link
                                        className={` block rounded-lg  hover:text-primary relative group  duration-200 font-medium transition-all`}
                                        href={"/contact"}
                                   >
                                        Contact Us{" "}
                                        <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-primary transition-all duration-200 group-hover:w-full"></span>
                                   </Link>
                              </div>
                              {user ?
                                   ''
                                   :
                                   <div className="flex gap-2 items-center mx-auto">
                                        <Link href={'/login'} className="px-5 border-2 hover:border-white transition-all border-primary text-white  bg-primary hover:bg-[#black font-mediumFe1] rounded-full font-mediumer:shadow-lg">Login</Link>
                                        <Link href={'/register'} className="px-3 bg-transparent text-white border-2 border-slate-600 hover:bg-slate-600 rounded-full hover:shadow-lg transition-all">Register</Link>
                                   </div>
                              }

                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MenuBar;