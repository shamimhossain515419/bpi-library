
"use client"
import Image from 'next/image';
import React from 'react';
import { MdOutlineStar } from "react-icons/md";

const SecondaryCart = () => {
    return (
        <div className='  flex items-start  gap-2 py-2 '>
            <div className=''>
                <Image className=' rounded-xl h-[110px] object-cover ' width={100} height={100} src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/35.jpg"} alt='image'></Image>
            </div>
            <div>
                <h1 className=' text-gray-700 hover:text-primary  cursor-pointer text-[15px] md:text-[18px]  font-medium duration-300'>Rich Dad Poor Dad</h1>
                <div className='  flex items-center gap-[2px] py-1'>
                    <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                    <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                    <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                    <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                    <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                </div>
                <p className='text-[10px] md:text-[12px] text-gray-700  hover:text-primary font-normal  '>Misty Figueroa</p>

            </div>
        </div>
    );
};

export default SecondaryCart;