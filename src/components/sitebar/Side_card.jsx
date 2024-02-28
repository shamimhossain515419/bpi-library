"use client";
import { useRemoveCartBookMutation } from "@/redux/features/managebooks/ManageBooksApi";
import Image from "next/image";
import { useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Side_card = ({ books, refetch }) => {
  const dispatch = useDispatch();
  const { image1, name } = books?.book

  const [removeCartBook, { data: removeCart, error }] = useRemoveCartBookMutation();
  const handleDelete = (id) => {
    removeCartBook(id);

  }
  useEffect(() => {
    if (removeCart?.success) {
      refetch()
      Swal.fire({
        icon: "success",
        title: "Book removed from cart",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [removeCart, refetch])
  console.log(removeCart,);
  console.log(error);

  return (
    <div className=" bg-[#FFF] rounded-[3px] shadow-md  py-3 px-2 my-1">
      <div className=" flex  justify-between  items-center gap-3">
        <div className=" flex justify-start gap-2 items-center">
          <div className=" flex justify-start gap-2 items-center ">
            <div className=" w-[46px] h-[46px] ">
              <Image
                className=" w-full h-full"
                width={100}
                height={100}
                src={image1}
                alt="image"
              ></Image>
            </div>
            <div>
              <h1 className=" text-[#000000CC] text-[14px] font-normal">
                {name}
              </h1>
              <span className=" block text-[#00000099] text-[11px] font-bold">
                Free
              </span>
            </div>
          </div>
        </div>
        <div className=" flex justify-start items-center gap-3">
          <div onClick={() => handleDelete(books?.id)} className=" w-full cursor-pointer">
            <IoMdCloseCircle
              className=" text-[#e33030] "
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side_card;
