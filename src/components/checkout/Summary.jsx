import { removeItem } from "@/redux/features/cart/cartSlice";
import { useAddbookMutation } from "@/redux/features/managebooks/ManageBooksApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Summary = ({ books, userinfo, selectBook }) => {
    const findProduct = books?.find((item) => item?.id == selectBook);
    const [addbook, { data: resultAddbook, isLoading, isSuccess, error }] =
        useAddbookMutation();
    const DeliveryCharge = (findProduct?.price * 5) / 100;
    const router = useRouter();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (!selectBook) {
            toast.error("please select a book");
        } else if (!userinfo?.id) {
            router.push("/login");
        } else {
            const data = { bookId: selectBook, userId: userinfo?.id, status: false };
            addbook(data);
        }
    };
    useEffect(() => {
        if (resultAddbook) {
            toast.success(resultAddbook?.message);
            dispatch(removeItem(selectBook));
        }
    }, [resultAddbook, selectBook, dispatch]);

    return (
        <div>
            {
                <div className=" lg:w-[390px]  pt-7 lg:pt-0">
                    <div className="   hidden lg:block">
                        <Link
                            className="text-[13px] underline text-end font-normal secondary"
                            href={"/books"}
                        >
                            {" "}
                            Continue add book{" "}
                        </Link>
                    </div>
                    <div className=" lg:pt-10">
                        <h2 className="text-[19px] secondary font-medium">Summary</h2>

                        <div className=" pt-6">
                            <div className=" flex justify-between gap-2 items-center">
                                <p>Subtotal</p>
                                <span>${findProduct?.price ? findProduct?.price : "Free"}</span>
                            </div>
                            <div className="  py-3 flex justify-between gap-2 items-center">
                                <p>Delivery</p>
                                <span>${DeliveryCharge ? DeliveryCharge : "Free"}</span>
                            </div>
                            <div className=" my-2 h-[2px] w-full bg-[#aca2a2d7] "></div>

                            <div className="  py-3 flex justify-between gap-2 items-center">
                                <p className=" font-bold">Total</p>
                                <p>
                                    BD:{" "}
                                    <span className=" font-bold">
                                        $
                                        {findProduct?.price
                                            ? findProduct?.price + DeliveryCharge
                                            : " All Free"}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className=" py-2 w-full">
                            <button
                                onClick={handleSubmit}
                                className=" w-full text-white block text-center  duration-200      bg-primary  px-2 py-[10px] hover:opacity-80 rounded-lg text-[16px] font-bold"
                            >
                                {isLoading ? <>loading...</> : <>Please Apply</>}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Summary;
