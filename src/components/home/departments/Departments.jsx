import Image from 'next/image';
import React from 'react';
import coumputer from "../../../../public/image/department images/computer.webp"
import Container from '@/share/container/Container';
const Departments = () => {
    return (
        <Container>
            <div className='  pt-20 pb-2'>
                <h1 className='text-black font-bold text-[20px] text-center  md:text-[45px] '> Department books list</h1>
                <div className=' grid  md:grid-cols-3  gap-1 py-10'>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Conputer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Conputer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Conputer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Conputer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Conputer</h3>
                            <span className="text-white text-md">65 Books</span>
                        </div>
                    </div>
                    <div className="relative  group shadow-md h-[280px] overflow-hidden ">
                        <Image className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm" src={coumputer} alt="Image" />

                        <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
                            <h3 className="text-white text-2xl font-semibold">Conputer</h3>
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