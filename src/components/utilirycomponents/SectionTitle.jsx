import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const SectionTitle = ({ title, path }) => {
    return (
        <div className='  flex  justify-between items-center gap-3 py-3'>
            <div className=' '>
                <h1 className=' text-[17px] md:text-[28px]  font-semibold  text-gray-700 '> {title} </h1>
            </div>

            <div className=' '>
                <Link className=' px-7 py-2 rounded-[45px]  text-wrap bg-primary flex items-center justify-center gap-2 text-white  text-[15px] md:text-[20px] hover:opacity-95 duration-300 ' href={`${path}`}> <span> View All </span>  <IoIosArrowForward className=' ' size={16} />  </Link>
            </div>
        </div>
    );
};

export default SectionTitle;