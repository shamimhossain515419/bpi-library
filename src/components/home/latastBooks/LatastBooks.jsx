"use client"

import SecondaryCart from '@/components/carts/SecondaryCart';
import SectionTitle from '@/components/utilirycomponents/SectionTitle';
import { useGetAllboksQuery } from '@/redux/features/books/BooksAPI';

import Container from '@/share/container/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const LatastBooks = () => {

    const { data: prodcut, isLoading, error } = useGetAllboksQuery("")
    return (
        <div className=' py-5'>
            <Container>
                <div>
                    <SectionTitle title={"Our Favourite Reads"} path={'/all-books'} />
                </div>
                <div className=' py-5 '>
                    <div className='  grid sm:grid-cols-2  lg:grid-cols-4 gap-4 p-10 rounded-2xl border border-[#0000003c]'>
                        <div className=' col-span-1'>
                            {
                                prodcut?.data?.slice(0, 4).map((item, i) => <SecondaryCart books={item} key={i} />)
                            }

                        </div>
                        <div className='col-span-2 hidden lg:block'>
                            <div className=' flex items-center gap-2 border-x border-[#0000003c] px-2'>
                                {
                                    prodcut?.data?.slice(4, 6).map((product, i) => <div key={i}>
                                        <Link href={`/books/${product?.id}`} className=' h-[420px]'>
                                            <Image width={300} height={500} className=' h-full' src={product.image1} alt='image'></Image>
                                        </Link>
                                        <div className=' pt-2'>
                                            <h1 className=' text-gray-700 hover:text-primary  cursor-pointer text-[15px] md:text-[18px]  font-medium duration-300'> {product?.name} </h1>
                                            <div className='  flex items-center gap-[2px] py-1'>
                                                <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                                <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                                <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                                <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                                <MdOutlineStar className='text-[25px]   text-[#FA8C17]   cursor-pointer ' size={18} />
                                            </div>
                                            <p className='text-[10px] md:text-[12px] text-gray-700  hover:text-primary font-normal  '>{product?.category} </p>

                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>
                        <div className=' col-span-1'>
                            {
                                prodcut?.data?.slice(6, 10).map((item, i) => <SecondaryCart books={item} key={i} />)
                            }
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default LatastBooks;