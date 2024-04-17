"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStar } from "react-icons/md";

const SecondaryCart = ({ books }) => {
    return (
        <div className="  flex items-start  gap-2 py-2 ">
            <Link href={`/books/${books?.id}`} className=" w-[120px] lg:w-[150px] overflow-hidden">
                <Image
                    className=" rounded-xl h-[110px] w-full object-cover "
                    width={100}
                    height={100}
                    src={books?.image1}
                    alt="image"
                ></Image>
            </Link>
            <div className=" w-full">
                <h1 className=" text-gray-700 hover:text-primary  cursor-pointer text-[15px] md:text-[18px]  font-medium duration-300">
                    {" "}
                    {books?.name}{" "}
                </h1>
                <div className="  flex items-center gap-[2px] py-1">
                    <MdOutlineStar
                        className="text-[25px]   text-[#FA8C17]   cursor-pointer "
                        size={18}
                    />
                    <MdOutlineStar
                        className="text-[25px]   text-[#FA8C17]   cursor-pointer "
                        size={18}
                    />
                    <MdOutlineStar
                        className="text-[25px]   text-[#FA8C17]   cursor-pointer "
                        size={18}
                    />
                    <MdOutlineStar
                        className="text-[25px]   text-[#FA8C17]   cursor-pointer "
                        size={18}
                    />
                    <MdOutlineStar
                        className="text-[25px]   text-[#FA8C17]   cursor-pointer "
                        size={18}
                    />
                </div>
                <p className="text-[10px] md:text-[12px] text-gray-700  hover:text-primary font-normal  ">
                    {books?.category}
                </p>
            </div>
        </div>
    );
};

export default SecondaryCart;
