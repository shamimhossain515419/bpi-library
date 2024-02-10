import Image from 'next/image';
import React from 'react';
import SectionTitle from '../utilirycomponents/SectionTitle';
import Container from '@/share/container/Container';

const LatestBlog = () => {
    return (
        <div>
            <Container>
                <SectionTitle title={"Latest Blog Post "}></SectionTitle>
                <div
                    className="grid grid-cols-1  md:grid-cols-3 justify-center items-center gap-12 py-10"
                >
                    <div className=' flex flex-col '>
                        <div
                            className="flex flex-col lg:flex-row md:items-center gap-8"
                        >
                            <Image width={200} height={250}
                                className="w-full lg:w-[50%] h-[170px]   rounded-3xl"
                                src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-750x500.jpg"}
                                alt=""
                            />
                            <div className="flex mx-3 md:mx-0 flex-col">
                                <p className="text-secondary duration-500">NOVEMBER 14, 2022</p>
                                <p className="text-lg leading-[25px]  font-semibold hover:text-primary duration-500">
                                    5 Attractive Bookstore WordPress Themes
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col  my-3 lg:flex-row md:items-center gap-8"
                        >
                            <Image width={200} height={250}
                                className="w-full lg:w-[50%] h-[170px] rounded-3xl"
                                src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-750x500.jpg"}
                                alt=""
                            />
                            <div className="flex mx-3 md:mx-0 flex-col">
                                <p className="text-secondary duration-500">NOVEMBER 14, 2022</p>
                                <p className="text-lg leading-[25px] font-semibold hover:text-primary duration-500">
                                    5 Attractive Bookstore WordPress Themes
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col lg:flex-row md:items-center gap-8"
                        >
                            <Image width={200} height={250}
                                className="w-full lg:w-[50%] h-[170px]   rounded-3xl"
                                src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-750x500.jpg"}
                                alt=""
                            />
                            <div className="flex mx-3 md:mx-0 flex-col">
                                <p className="text-secondary duration-500">NOVEMBER 14, 2022</p>
                                <p className="text-lg leading-[25px] font-semibold hover:text-primary duration-500">
                                    5 Attractive Bookstore WordPress Themes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full">

                        <div className="h-full relative shadow-md rounded-2xl">
                            <Image width={200} height={250} className="h-full rounded-xl  object-cover" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/blog_6-750x500.jpg" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-2xl"></div>
                            <div className="absolute inset-0 flex flex-col items-start justify-end p-4 ">
                                <span className="text-white text-xs font-semibold uppercase">October 11, 2022 / by admin</span>
                                <span className="text-white text-2xl font-semibold hover:text-primary duration-300"> <a href="#">Behind the Scenes
                                    with Author Victoria Aveyard</a> </span>
                                <hr className="border-t-2 border-white w-full my-2 opacity-50" />
                                <div className="flex justify-between w-full">
                                    <span className="font-xs uppercase">
                                        <span className="text-white text-xs font-semibold">in</span>
                                        <span className="text-secondary text-xs font-semibold hover:text-white duration-300">
                                            <a href="#">cultural</a>
                                        </span>
                                    </span>
                                    <span className="text-white hover:text-primary duration-300"><a href="#">Read More &nbsp;<i
                                        className="fa-solid fa-angle-right"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="flex flex-col lg:flex-row md:items-center gap-8"
                        >
                            <Image width={200} height={250}
                                className="w-full lg:w-[50%] h-[170px]   rounded-3xl"
                                src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-750x500.jpg"}
                                alt=""
                            />
                            <div className="flex mx-3 md:mx-0 flex-col">
                                <p className="text-secondary duration-500">NOVEMBER 14, 2022</p>
                                <p className="text-lg leading-[25px] font-semibold hover:text-primary duration-500">
                                    5 Attractive Bookstore WordPress Themes
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col my-3 lg:flex-row md:items-center gap-8"
                        >
                            <Image width={200} height={250}
                                className="w-full lg:w-[50%] h-[170px]   rounded-3xl"
                                src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-750x500.jpg"}
                                alt=""
                            />
                            <div className="flex mx-3 md:mx-0 flex-col">
                                <p className="text-secondary duration-500">NOVEMBER 14, 2022</p>
                                <p className="text-lg leading-[25px] font-semibold hover:text-primary duration-500">
                                    5 Attractive Bookstore WordPress Themes
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col lg:flex-row md:items-center gap-8"
                        >
                            <Image width={200} height={250}
                                className="w-full lg:w-[50%] h-[170px]   rounded-3xl"
                                src={"https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/11/blog_7-750x500.jpg"}
                                alt=""
                            />
                            <div className="flex mx-3 md:mx-0 flex-col">
                                <p className="text-secondary duration-500">NOVEMBER 14, 2022</p>
                                <p className="text-lg leading-[25px] font-semibold hover:text-primary duration-500">
                                    5 Attractive Bookstore WordPress Themes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LatestBlog;