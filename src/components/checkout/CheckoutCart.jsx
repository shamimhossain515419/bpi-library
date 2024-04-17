"use client"
import { removeItem } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

const CheckoutCart = ({ book, selectBook, setSelectBook }) => {
    const { image1, name, price, id, department, category, writer_name } = book;
    cancelIdleCallback
    const dispatch = useDispatch()
    return (
        <div>
            <div className=" lg:pt-10">
                <div onClick={() => setSelectBook(id)} className={`${selectBook == id ? 'border border-primary' : ""} relative p-2 rounded-lg`}>
                    <div className="   grid  grid-cols-2  relative    gap-3 py-4">
                        <div className=" w-full">
                            <Image
                                width={100}
                                height={100}
                                className=" w-full h-full  object-fill max-h-[250px]"
                                src={image1}
                                alt="product"
                            ></Image>
                        </div>
                        <div className="  flex flex-col md:flex-row gap-2 w-full ">
                            <div className=" w-full">
                                <p className=" text-[14px]    tracking-tight capitalize font-normal text-[#727272]">
                                    {" "}
                                    {category}
                                </p>
                                <h4 className=" py-1 text-[16px] font-medium primary">
                                    writer: {writer_name}
                                </h4>
                                <p className="text-[15px] text-color">
                                    {name}
                                </p>
                                <p className="text-[15px] text-color"> Dep: {department} </p>
                                <div className=" w-full">
                                    <h2 className="text-[16px] font-semibold">$ {price ? price : "Free"} </h2>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => dispatch(removeItem(id))} className=" absolute top-3 cursor-pointer  duration-150 right-3 hover:bg-[#F5F5F5] p-[2px] rounded-sm">
                            <IoMdClose size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;
