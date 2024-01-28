
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const MenuBar = ({ user }) => {
     const pathName = usePathname()
     return (
          <div>
               <div>
                    <div>
                         <hr />
                         <div className=' space-y-3 flex flex-col '>

                              <Link href={'/'} className={`${pathName == "/" ? "activeLink" : ""}`}> Home</Link>

                              <Link href={'/teacher'} className={`${pathName == "/teacher" ? "activeLink" : ""}`}>Teacher </Link>
                              <Link href={'/leader-board'} className={`${pathName == "/leader-board" ? "activeLink" : ""}`}> Leader board</Link>
                              <Link href={'/courses'} className={`${pathName == "/courses" ? "activeLink" : ""}`}> All Courses</Link>
                              <Link href={'/blogs'} className={`${pathName == "/blogs" ? "activeLink" : ""}`}> Blogs</Link>
                              <Link href={'/about'} className={`${pathName == "/about" ? "activeLink" : ""}`}> About</Link>
                              <Link href={'/contact'} className={`${pathName == "/contact" ? "activeLink" : ""}`}> Contact Us</Link>

                              {user ?
                                   ''
                                   :
                                   <div className="flex gap-2 items-center mx-auto">
                                        <Link href={'/login'} className="px-5 border-2 hover:border-white transition-all border-[#27895C] text-white bg-[#27895C] hover:bg-[#black font-mediumFe1] rounded-full font-mediumer:shadow-lg">Login</Link>
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