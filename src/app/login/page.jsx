"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png"
import bannar from "../../assets/account/background.jpg"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { useLoginuserMutation } from "@/redux/features/auth/authApi";

export default function Login() {
     const [loginuser, { data: loginResult, isSuccess, isLoading, data, error }] = useLoginuserMutation()

     const { loginUser } = useContext(GlobalContext);
     const router = useRouter()
     const [loading, setLoading] = useState(false)
     const handleSubmit = async (e) => {
          setLoading(false)
          e.preventDefault()
          const from = e.target;
          const email = from?.email.value
          const password = from?.password.value
          const data = { email };
          const result = await loginUser(email, password);
          if (result?.user) {
               loginuser(data)
          }

     }



     useEffect(() => {
          if (loginResult && isSuccess) {
               Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${loginResult?.data?.name}`,
                    showConfirmButton: false,
                    timer: 1500
               });
               router.push('/')

          }

     }, [loginResult, isSuccess])

     return (
          <div className="grid md:grid-cols-2 gap-4 py-20">
               <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                         <Image width={100} height={100}
                              className="mx-auto h-10 w-auto"
                              src={logo}
                              alt="Your Company"
                         />
                         <h2 className=" pt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                              login Now
                         </h2>
                    </div>

                    <div className=" pt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                         <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                              <div>
                                   <div className="relative w-full max-w-[392px] mb-6">
                                        <input type="email"
                                             name="email"
                                             className="w-full h-full pl-[16px] pr-[35px] pt-[12px] pb-[21px] font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-[#919EAB33] text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#919EAB33] placeholder-shown:border-t-[#919EAB33] focus:border-1 focus:border-[#919EAB33] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                        />

                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md  before:transition-all 
                                                      after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#919EAB33] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#637381] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
                                                    peer-focus:text-[12px] uppercase peer-focus:leading-tight peer-focus:text-[#637381] peer-focus:before:border-t-2 peer-focus:before:border-l-1 peer-focus:before:!border-[#919EAB33] peer-focus:after:border-t- peer-focus:after:border-r-1 peer-focus:after:!border-[#919EAB33] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#637381]">

                                             Your email
                                        </label>
                                   </div>
                              </div>


                              <div className="relative w-full max-w-[392px] mb-6">
                                   <input type="password"
                                        className="w-full h-full pl-[16px] pr-[35px] pt-[12px] pb-[21px] font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-[#919EAB33] text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-[#919EAB33] placeholder-shown:border-t-[#919EAB33] focus:border-1 focus:border-[#919EAB33] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"

                                        name="password"
                                   />

                                   <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md  before:transition-all 
                                                      after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#919EAB33] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.7] peer-placeholder-shown:text-[#637381] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
                                                    peer-focus:text-[12px] uppercase peer-focus:leading-tight peer-focus:text-[#637381] peer-focus:before:border-t-2 peer-focus:before:border-l-1 peer-focus:before:!border-[#919EAB33] peer-focus:after:border-t- peer-focus:after:border-r-1 peer-focus:after:!border-[#919EAB33] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#637381]">

                                        Password
                                   </label>
                              </div>


                              <div className=" flex items-center gap-3">

                                   <input type="checkbox" name="" id="" />
                                   <p className="text-[14px] font-normal">I aggreewith the Terms & Conditions</p>
                              </div>

                              <div>
                                   <button disabled={loading}
                                        type="submit"
                                        className="flex w-full justify-center rounded-md   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#ff6900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                                   >

                                        {loading ? <ClipLoader size={20} color="#ffff" /> : <span>Submit</span>
                                        }
                                   </button>
                              </div>
                         </form>

                         <p className="mt-10 text-center text-sm text-gray-500">
                              Not a member?{' '}
                              <Link href="/register" className="font-semibold leading-6    text-primary hover:text-primary">
                                   Register
                              </Link>
                         </p>
                    </div>
               </div>
               <div className=" max-h-[80vh] hidden md:block overflow-hidden">
                    <Image className=" h-full object-cover" src={bannar} alt="image"></Image>
               </div>
          </div>
     )
}
