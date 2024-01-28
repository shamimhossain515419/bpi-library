'use client'
import Link from "next/link";
import { FaBars } from 'react-icons/fa'
import MenuBar from "./MenuBar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "../container/Container";
import { useState } from "react";
import logo from "../../../public/image/hero/logo.png"

const Navbar = () => {
     const [Open, setOpen] = useState(false)
     const user = false
     const pathName = usePathname()
     return (
          <div className=" mb-12">
               <div>
                    <nav className={`px-2 py-3 z-50    bg-white shadow fixed top-0 left-0 w-full transition-transform`}>
                         <Container>
                              <div className=' '>
                                   <div className='flex justify-between items-center'>
                                        <div className=' flex  items-center gap-4 clear-start w-[80px]'>

                                             <Link href="/">  <Image  src={logo} className="    w-[80px]   h-[50px]" alt="image" /> </Link>
                                        </div>

                                        <div className=' hidden lg:flex items-center gap-3  space-x-5'>
                                             <Link className={`px-2 rounded-lg ${pathName == "/" ? "activeLink" : ""} hover:text-[#B6561A]  duration-200 font-medium transition-all`} href={'/'}>Home</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/teacher" ? "activeLink" : ""} hover:text-[#B6561A]  duration-200 font-medium transition-all`} href={'/teacher'}>Teacher</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/courses" ? "activeLink" : ""} hover:text-[#B6561A]  duration-200 font-medium transition-all`} href={'/courses'}> All Courses</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/blogs" ? "activeLink" : ""} hover:text-[#B6561A]  duration-200 font-medium transition-all`} href={'/blogs'}>Blogs</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/about" ? "activeLink" : ""} hover:text-[#B6561A]  duration-200 font-medium transition-all`} href={'/about'}>About</Link>
                                             <Link className={`px-2 rounded-lg ${pathName == "/contact" ? "activeLink" : ""} hover:text-[#B6561A]  duration-200 font-medium transition-all`} href={'/contact'}>Contact Us</Link>

                                        </div>


                                        {/* right side user image and modal for large screen */}
                                        <div className=" hidden lg:block">

                                             <div className="flex gap-2 items-center">
                                                  <Link href={'/login'} className="px-5 border-2  py-2 hover:border-white transition-all  text-white bg-[#B6561A] hover:bg-bg-[#B6561A]  duration-150 rounded-[5px] font-mediumer:shadow-lg">Login</Link>
                                                 
                                             </div>

                                        </div>

                                        {/* three bar menu for mobile screen */}
                                        <div onClick={() => setOpen(!Open)} className=' lg:hidden '>
                                             {
                                                  Open ? <FaBars size={24} className=' '> </FaBars>
                                                       :
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                       </svg>

                                             }

                                        </div>
                                   </div>
                                   {/* navigation links  for mobile screen */}
                                   <div className='lg:hidden'>
                                        {
                                             Open ? "" : <MenuBar user={user} setOpen={setOpen}></MenuBar>
                                        }
                                   </div>


                              </div>
                         </Container>

                    </nav>
               </div>


          </div>
     );
};

export default Navbar;