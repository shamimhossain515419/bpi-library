import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineStar } from "react-icons/md";
const PrimaryCart = ({ product }) => {
  return (
    <div className=" md:w-[220px] w-full">
      <div className=" w-full h-[290px]">
        <Link href={`/books/${product?.id}`} className=" w-full h-[290px]">
          <Image
            className=" w-full h-full rounded-[15px]"
            width={100}
            height={100}
            src={product?.image1}
            alt="image"
          ></Image>
        </Link>
      </div>
      <div className=" pt-2">
        <h1 className="text-[14px]   lg:text-[17px] hover:text-primary d duration-200 font-bold ">
          {" "}
          {product?.name}{" "}
        </h1>
        <div className="  flex items-center ">
          <MdOutlineStar
            className="text-[25px]   text-[#FA8C17]   cursor-pointer "
            size={18}
          />
          <MdOutlineStar
            className="text-[25px]   text-[#FA8C17]   cursor-pointer "
            size={18}
          />
          <MdOutlineStar
            className="text-[25px]   text-[#FA8C17]   cursor-pointer "
            size={18}
          />
          <MdOutlineStar
            className="text-[25px]   text-[#FA8C17]   cursor-pointer "
            size={18}
          />
          <MdOutlineStar
            className="text-[25px]   text-[#FA8C17]   cursor-pointer "
            size={18}
          />
          <p className=" pl-2">5</p>
        </div>
        <small className=" text-gray-700 text-[12px]  lg:text-[14px] font-light">
          {product?.writer_name}
        </small>
        <p className=" text-[12px] lg:text-[18px] text-primary font-medium ">
          Quntity: {product?.quantity}
        </p>
      </div>
    </div>
  );
};

export default PrimaryCart;
