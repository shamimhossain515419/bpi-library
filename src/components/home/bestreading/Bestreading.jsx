
'use client';
import PrimaryCart from "@/components/carts/primaryCart";
import SectionTitle from "@/components/utilirycomponents/SectionTitle";
import Container from "@/share/container/Container";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { products } from "@/utility/prodcut";
import { useGetAllboksQuery } from "@/redux/features/books/BooksAPI";

const Bestreading = () => {

    const { data: prodcut, isLoading, error } = useGetAllboksQuery("")
    return (
        <div>
            <Container>
                <div className=" py-3">
                    <SectionTitle title={"Best Reading Books"} path={"/all-books/best"} ></SectionTitle>
                </div>

                <div className=" pb-10">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={2}
                        loop={true}
                        speed={500}

                        breakpoints={{
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 4,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 4,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 9,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1536: {
                                slidesPerView: 6,
                                spaceBetween: 7,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper overflow-hidden "
                    >
                        {
                            prodcut?.data?.map((product, index) => <SwiperSlide key={index} className="  px-2 " >
                                <PrimaryCart product={product}></PrimaryCart>
                            </SwiperSlide>)
                        }


                    </Swiper>
                </div>


            </Container>

        </div>
    );
};

export default Bestreading;