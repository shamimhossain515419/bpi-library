"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import banner from "../../../../../public/image/department images/banner.webp";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Container from "@/share/container/Container";
import FilterSection from "@/components/filter/FilterSection";
import AllProducts from "@/components/allProdcuts/AllProducts";
import Pagination from "@/components/Pagination/Pagination";


const Page = () => {
    const pathname = usePathname();
    const departmentLength = "/department/".length;
    const department = pathname.substring(departmentLength);

    return (
        <div className=" ">
            <div>
                <div className=" h-[500px] w-full relative">
                    <Image className=" w-full h-full relative" height={500} width={1000} src={banner} alt="image"></Image>

                    <div className=" flex  absolute justify-center items-center w-full  h-full top-0">
                        <div>
                            <h1 className="text-[25px]  sm:text-[40px] lg:text-[55px] text-white font-medium uppercase"> {department} </h1>
                            <div className=" flex items-center justify-center text-white gap-1">
                                <Link className=" hover:underline text-[16px] font-medium " href={'/'}>Home</Link> <IoIosArrowForward size={15} /> <Link className="hover:underline text-[16px] font-medium" href={'/'}>All books</Link>
                            </div>
                        </div>


                    </div>

                </div>

                <Container>
                    <div className=" py-4">
                        <div>
                            <FilterSection></FilterSection>
                        </div>
                        <AllProducts></AllProducts>
                        <div className="py-10">
                            <Pagination></Pagination>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Page;