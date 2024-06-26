"use client"
import React from "react";
import PrimaryCart from "../carts/primaryCart";
import { useGetAllboksQuery } from "@/redux/features/books/BooksAPI";
import { Button, Spinner } from "keep-react";
import { useSelector } from "react-redux";

const AllProducts = () => {
    const { filters } = useSelector((state) => state.filter)
    console.log(filters);

    const {
        data: prodcut,
        isLoading,
        error,
    } = useGetAllboksQuery(`name=${filters?.name}&&department=${filters?.department}`);
    return (
        <div>
            <div className=" grid sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-4 p-10 rounded-2xl ">
                {prodcut?.data?.map((item, index) => (
                    <PrimaryCart key={index} product={item}></PrimaryCart>
                ))}
            </div>

            {isLoading && (
                <div className=" flex items-center justify-center min-h-screen">
                    {" "}
                    <Button type="" size="md">
                        <span className="pr-2">
                            <Spinner color="info" size="md" />
                        </span>
                        Loading...
                    </Button>
                </div>
            )}
        </div>
    );
};

export default AllProducts;
