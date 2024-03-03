import Image from 'next/image';
import React from 'react';
import coumputer from "../../../../public/image/department images/computer.webp"
import Container from '@/share/container/Container';

import { IoBookSharp } from "react-icons/io5";
const Departments = () => {
    return (
        <Container>
            <div className='  pt-20 pb-2'>
                <div class=" max-w-[600px] mx-auto text-center mt-3 place-content-center">
                    <div className=' flex items-center justify-center'>
                        <IoBookSharp className=' block text-[24px]' />
                    </div>
                    <h2 class="text-4xl font-mono font-black my-2">Binary Bookshelf</h2>
                    <p class="text-gray-400 font-mono">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta
                        minima, quod aspernatur fugiat cupiditate?
                    </p>
                </div>
                <div className=' grid  md:grid-cols-3  gap-1 py-10'>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Computer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Computer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Computer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Computer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Computer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Computer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </Container>
    );
};

export default Departments;