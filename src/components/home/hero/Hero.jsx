"use client";
import Image from "next/image";
import React from "react";
import hero1 from "../../../assets/slider/main_pic.jpg";
import hero2 from "../../../assets/slider/second_pic.jpg";
import hero3 from "../../../assets/slider/third_pic.jpg";
import Container from "@/share/container/Container";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="">
      <div className="  relative">
        {/* banner slider  */}
        <div>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={2}
            loop={true}
            speed={500}
            modules={[Pagination, Navigation]}
            className="mySwiper overflow-hidden "
          >
            <SwiperSlide className=" ">
              <div className=" w-full relative group   h-[300px]  lg:h-[500px] overflow-hidden">
                <Image
                  className=" w-full h-full  object-fill"
                  src={hero1}
                  alt="image"
                ></Image>
                <div className="absolute top-3  flex justify-center items-center h-full w-full">
                  <div className=" text-center text-white">
                    <p className=" text-[32px] font-medium"> BPI Library</p>
                    <h1 className="text-[25px] hover:text-primary lg:text-[52px] text-white font-bold capitalize">
                      Library Office Security Administration
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" ">
              <div className=" w-full relative group   h-[300px]  lg:h-[500px] overflow-hidden">
                <Image
                  className=" w-full h-full  object-fill"
                  src={hero2}
                  alt="image"
                ></Image>
                <div className="absolute top-3  flex justify-center items-center h-full w-full">
                  <div className=" text-center text-white">
                    <p className=" text-[32px] font-medium"> BPI Library</p>
                    <h1 className="text-[25px] hover:text-primary lg:text-[52px] text-white font-bold capitalize">
                      Library Office Security Administration
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full relative group  h-[300px]  lg:h-[500px] overflow-hidden">
                <Image
                  className=" w-full h-full  object-fill"
                  src={hero3}
                  alt="image"
                ></Image>
                <div className="absolute top-3  flex justify-center items-center h-full w-full">
                  <div className=" text-center text-white">
                    <p className=" text-[32px] font-medium"> BPI Library</p>
                    <h1 className="text-[25px] hover:text-primary lg:text-[52px] text-white font-bold capitalize">
                      Library Office Security Administration
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="arrow absolute     top-1/2  md:20 z-30  w-full ">
          <div className=" flex  justify-between items-center  gap-5  px-5 ">
            <div
              className="flex cursor-pointer text-white hover:text-red-600 justify-center items-center shadow h-[30px] b  duration-150  rounded-md "
              onClick={goPrev}
            >
              {/*   button  */}
              <MdArrowBackIosNew size={25} />
            </div>
            <div
              className="flex cursor-pointer text-white hover:text-red-600 justify-center items-center shadow h-[30px] w-[30px]   duration-150 rounded-md "
              onClick={goNext}
            >
              {/*  Next button  */}
              <MdArrowForwardIos size={25} />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className=" py-4">
          <div className="w-full flex  lg:flex-row flex-col  justify-center ">
            <div className="  w-full lg:w-[70%] bg-tertiary py-10 ">
              <div className="   w-full flex justify-center items-center h-full px-4">
                <div className=" w-full relative">
                  <input
                    className="w-full border-b pb-1 text-[18px] md:text-[25px] focus:border-primary  text-black border-gray-600 outline-0  placeholder:text-black  bg-transparent"
                    type="search"
                    placeholder="Search"
                  />
                  <FaSearch className=" absolute  right-2 top-1 text-[15px] lg:text-[20px]  text-black" />
                </div>
              </div>
            </div>
            <div className="  w-full lg:w-[30%]  bg-gradient-to-r from-primary py-8 to-primary">
              <div className="text-white text-center">
                <p className="text-[12px] md:text-[15px] font-normal">
                  The library is open today
                </p>
                <h1 className=" text-[20px] md:text-[25px] lg:text-[35px] font-medium py-1">
                  6:00 AM – 8:00 PM
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
