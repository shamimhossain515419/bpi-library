import SecondaryCart from '@/components/carts/SecondaryCart';
import SectionTitle from '@/components/utilirycomponents/SectionTitle';
import Container from '@/share/container/Container';
import Image from 'next/image';
import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const LatastBooks = () => {
    return (
        <div className=' py-5'>
            <Container>
                <div>
                    <SectionTitle title={"Our Favourite Reads"} path={'/all-books'} />
                </div>
                <div className=' py-5 '>
                    <div className='  grid sm:grid-cols-2  lg:grid-cols-4 gap-4 p-10 rounded-2xl border border-[#0000003c]'>
                        <div className=' col-span-1'>
                            <SecondaryCart></SecondaryCart>
                            <SecondaryCart></SecondaryCart>
                            <SecondaryCart></SecondaryCart>
                            <SecondaryCart></SecondaryCart>
                        </div>
                        <div className='col-span-2 hidden lg:block'>
                            <div className=' flex items-center gap-2 border-x border-[#0000003c] px-2'>
                                <div>
                                    <div className=' h-[420px]'>
                                        <Image width={300} height={500} className=' h-full' src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/34.jpg"} alt='image'></Image>
                                    </div>
                                    <div className=' pt-2'>
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
                                <div>
                                    <div className=' h-[420px]'>
                                        <Image width={300} height={500} className=' h-full' src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/33.jpg"} alt='image'></Image>
                                    </div>
                                    <div className=' pt-2'>
                                        <h1 className=' text-gray-700 hover:text-primary  cursor-pointer text-[15px] md:text-[18px]  font-medium duration-300'>Rich Dad Poor Dad</h1>
                                        <div className='  flex items-center gap-[2px] py-1'>
                                            <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                            <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                            <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                            <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                            <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                        </div>
                                        <p className='text-[10px] md:text-[12px] text-gray-700  hover:text-primary font-normal  '>
                                            Annie Leibovitz: Wonderland</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' col-span-1'>
                            <SecondaryCart></SecondaryCart>
                            <SecondaryCart></SecondaryCart>
                            <SecondaryCart></SecondaryCart>
                            <SecondaryCart></SecondaryCart>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default LatastBooks;