
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
                              <Link className={` rounded-lg  hover:text-[#B6561A] relative group  duration-200 font-medium transition-all`} href={'/allbooks'}>All Books <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span> </Link>
                              <Link className={` rounded-lg  hover:text-[#B6561A] relative group  duration-200 font-medium transition-all`} href={'/research'}> Research Cell <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span></Link>
                              <Link className={` rounded-lg  hover:text-[#B6561A] relative group  duration-200 font-medium transition-all`} href={'/department'}>Department <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span></Link>
                              <Link className={` rounded-lg  hover:text-[#B6561A] relative group  duration-200 font-medium transition-all`} href={'/Gallay'}>Gallay <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span></Link>
                              <Link className={` rounded-lg  hover:text-[#B6561A] relative group  duration-200 font-medium transition-all`} href={'/about'}>About <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span></Link>
                              <Link className={` rounded-lg  hover:text-[#B6561A] relative group  duration-200 font-medium transition-all`} href={'/contact'}>Contact Us <span className="ease absolute left-0  -bottom-1  h-0 w-0 border-b border-[#ff6900] transition-all duration-200 group-hover:w-full"></span></Link>

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