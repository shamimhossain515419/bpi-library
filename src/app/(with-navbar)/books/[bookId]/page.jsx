"use client"
import { GlobalContext } from "@/AuthProvider/AuthProvider";
import RelatedProducts from "@/components/product/RelatedProducts";
import { useGetSingleIserQuery } from "@/redux/features/auth/authApi";
import { useGetSingleBookQuery } from "@/redux/features/books/BooksAPI";
import { useAddbookMutation, useGetCartQuery } from "@/redux/features/managebooks/ManageBooksApi";
import Container from "@/share/container/Container";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { IoReloadOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import ViewCardLoader from "../../loader/viewCardLoader";

const Page = ({ params }) => {
    const { bookId } = params || {};
    const { data: sngleProdcut, isLoading: sngleProductLoading } = useGetSingleBookQuery(bookId)
    const { id, name, writer_name, description } = sngleProdcut?.data || {};
    const { user } = useContext(GlobalContext);
    const [addbook, { data: resultAddCart, isLoading, error }] = useAddbookMutation();
    const { data: userData, } = useGetSingleIserQuery(user?.email);
    const userinfo = userData?.data;
    const { data: getCart, refetch } = useGetCartQuery(userinfo?.id)
    //  add submit
    const handleSubmit = (id) => {
        const data = { bookId: id, userId: userinfo?.id }
        if (user?.email) {
            addbook(data)
        } else {
            Swal.fire({
                title: "Please login first",
                icon: "error",
            })
        }
    }

    //  success  add cart 
    useEffect(() => {
        if (resultAddCart?.success) {
            refetch()
            Swal.fire({
                icon: "success",
                title: `${resultAddCart?.message}`,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }, [resultAddCart, refetch])

    const cartproduct = getCart?.data?.find(item => item?.book?.id === id);
    console.log(sngleProdcut);


    return (
        <>
            <Container>

                {
                    sngleProductLoading ? <ViewCardLoader></ViewCardLoader> :

                        <div>
                            <section className="text-gray-700 body-font overflow-hidden bg-white">
                                <div className=" px-5 py-24 mx-auto">
                                    <div className=" px-1 grid lg:grid-cols-2 gap-3">
                                        <div className=" w-full h-full">
                                            <Image
                                                width={400}
                                                height={200}
                                                alt="ecommerce"
                                                className=" w-full object-cover object-center  border rounded-xl border-gray-200"
                                                src={sngleProdcut?.data?.image1}
                                            />
                                        </div>
                                        <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-6 border border-gray-200 rounded-xl">
                                            <h2 className="text-sm  py-3 title-font text-gray-500 tracking-widest">
                                                <span className="font-semibold bg-green-100 rounded-md p-1">
                                                    IN STOCK{" "}
                                                </span>
                                            </h2>
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                                {name}
                                            </h1>
                                            <div className="flex mb-4">
                                                <div className="flex items-center">
                                                    <span className="text-gray-600 mr-3">
                                                        {" "}
                                                        Author: {writer_name}
                                                    </span>
                                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"></span>
                                                    <svg
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-4 h-4 text-yellow-300"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-4 h-4 text-yellow-300"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-4 h-4 text-yellow-300"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-4 h-4 text-yellow-300"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        className="w-4 h-4 text-yellow-300"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                    </svg>
                                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"></span>
                                                    <span className="text-gray-600 ml-3">62 Reviews</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="py-6">
                                                <span className="text-3xl font-semibold ">
                                                    {" "}
                                                    Price: $  {sngleProdcut?.data?.price}
                                                </span>

                                                <h1>Quantity: {sngleProdcut?.data?.quantity} </h1>
                                                <h1> Available Quantity: {23} </h1>
                                            </div>
                                            <p className="leading-relaxed text-justify mb-3">
                                                {description}
                                            </p>
                                            <hr />
                                            <div className="py-5 ">
                                                {
                                                    cartproduct ? <Link href={'/checkout'} className="w-full block  py-2 px-5 rounded-3xl bg-primary hover:bg-opacity-90 text-white text-[20px] text-center"> Please checkout </Link> : <button onClick={() => handleSubmit(id)} className="w-full block  py-2 px-5 rounded-3xl bg-primary hover:bg-opacity-90">
                                                        {
                                                            isLoading ? <span className="flex items-center justify-center "> <IoReloadOutline className="text-white animate-spin text-[20px]  text-center  " />  </span> : <span className="text-2xl text-white">Add to Cart</span>
                                                        }

                                                    </button>
                                                }

                                            </div>
                                            <hr />
                                            <p className="mb-6">
                                                <span className="text-gray-400">Categories:</span>
                                                <span> Action & Adventure,Activity Books, Culture</span>
                                                <br />

                                                <span className="text-gray-400">Tags:</span>
                                                <span> Books,Ficton,Romance-Contemporary</span>
                                            </p>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* description section  */}

                            <div className=" w-full border space-y-5 rounded-lg border-gray-300  p-4 my-6">
                                <div className=" flex flex-row sm:flex-row items-start gap-1">
                                    <Image
                                        width={100}
                                        height={100}
                                        className="rounded-full w-10 h-1/5 sm:w-10 sm:h-10"
                                        src="/image/myPic2.jpg.jpg"
                                        alt=""
                                    />
                                    <div className="flex flex-col justify-between w-full sm:w-auto">
                                        <div className="px-2">
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 text-yellow-300 me-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300 me-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300 me-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-300 me-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                            <div className="justify-between w-full sm:w-auto">
                                                <span className="font-bold me-2">Abu Rayhan</span>
                                                <span className="opacity-50">February 15, 2024</span>

                                                <div className="max-w-2xl">
                                                    <div className="truncate whitespace-normal">
                                                        I am 6 feet tall and 220 lbs. This shirt fit me
                                                        perfectly in the chest and shoulders. My only complaint
                                                        is that it is so long! I like to wear polo shirts
                                                        untucked. This shirt goes completely past my rear end.
                                                        If I wore it with ordinary shorts, you probably wouldnt
                                                        be able to see the shorts at all - completely hidden by
                                                        the shirt. It needs to be 4 to 5 inches shorter in terms
                                                        of length to suit me. I have many RL polo shirts, and
                                                        this one is by far the longest. I dont understand why.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <form className="mt-[4rem]" action="#">
                                        <p className="opacity-75">
                                            Your email address will not be published. Required fields are
                                            marked *
                                        </p>
                                        <p className="mt-4 mb-3">
                                            Your rating <span className=" text-primary"> *</span>
                                        </p>
                                        <div className="grid">
                                            <textarea
                                                id="message"
                                                rows="6"
                                                className="block p-4 mb-4 max-h-full outline-primary rounded-xl border border-gray-300"
                                                placeholder="Your review*"
                                                required
                                            ></textarea>
                                            <div className="md:flex">
                                                <input
                                                    type="text"
                                                    className="w-full mb-4 md:w-3/6 md:me-2 p-4 h-12 rounded-xl border outline-primary border-gray-300"
                                                    placeholder="Name*"
                                                    required
                                                />
                                                <input
                                                    type="text"
                                                    className="w-full mb-4 md:w-3/6 md:ms-2 p-4 h-12 rounded-xl border outline-primary border-gray-300"
                                                    placeholder="Email*"
                                                    required
                                                />
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 md:w-[1rem] md:h-[1rem] border border-gray-300"
                                                />
                                                <label
                                                    for="link-checkbox"
                                                    className="ms-2 text-sm font-medium opacity-75 text-gray-900"
                                                >
                                                    Save my name, email, and website in this browser for the
                                                    next time I comment.
                                                </label>
                                            </div>
                                            <button className="mt-4 w-[8rem] h-12 p-2 font-semibold rounded-3xl text-white hover:opacity-80 bg-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                }
            </Container>
            <RelatedProducts />
        </>
    );
};

export default Page;
