import Container from "@/share/container/Container";
import Image from "next/image";


const Page = ({ params }) => {
    const { bookId } = params || {};
    console.log(bookId);

    return (
        <div>
            <Container>
                <div>

                    <section className="text-gray-700 body-font overflow-hidden bg-white">
                        <div className=" px-5 py-24 mx-auto">
                            <div className=" mx-auto px-1 grid grid-cols-2 gap-3">

                                <div className=" w-full">
                                    <Image width={400} height={200}
                                        alt="ecommerce"
                                        className="  w-full w-full object-cover object-center  border rounded-xl border-gray-200"
                                        src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
                                    />
                                </div>


                                <div
                                    className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-6 border border-gray-200 rounded-xl"
                                >
                                    <h2
                                        className="text-sm  title-font text-gray-500 tracking-widest"
                                    >
                                        <span className="font-semibold bg-green-100 rounded-md p-1"
                                        >IN STOCK </span>
                                    </h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                        House of Sky and Breath
                                    </h1>
                                    <div className="flex mb-4">
                                        <span className="flex items-center">
                                            <span className="text-gray-600 mr-3"> Author: Nam jani na </span>
                                            <span
                                                className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"
                                            ></span>
                                            <svg
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 text-red-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                ></path>
                                            </svg>
                                            <svg
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 text-red-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                ></path>
                                            </svg>
                                            <svg
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 text-red-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                ></path>
                                            </svg>
                                            <svg
                                                fill="currentColor"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 text-red-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                ></path>
                                            </svg>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 text-red-500"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                                ></path>
                                            </svg>
                                            <span
                                                className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200"
                                            ></span>
                                            <span className="text-gray-600 ml-3">62 Reviews</span>
                                        </span>
                                    </div>
                                    <hr />
                                    <p className="py-6">
                                        <span className="text-4xl font-semibold text-red-500">$100 </span>
                                        <span className="text-lg line-through">$115</span>
                                    </p>
                                    <p className="leading-relaxed text-justify mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Temporibus, mollitia debitis odio molestiae dolore alias magnam
                                        iste error beatae, optio quidem amet autem dicta similique
                                        voluptatibus sint voluptates exercitationem mollitia, sed eum
                                        consequatur quas id sunt eligendi perspiciatis quam eos dolorem
                                        debitis autem velit voluptates quibusdam accusamus ducimus nobis?
                                        Quisquam, incidunt dolores ipsam quibusdam corrupti omnis sapiente
                                        odit tempora similique veniam reiciendis hic recusandae culpa, eos
                                        quidem deleniti et dolore alias earum repellendus id voluptatibus
                                        sed magni reprehenderit. Esse enim ipsum atque eum debitis! Quis
                                        eius ullam adipisci obcaecati delectus sed, ut magnam beatae sint
                                        nostrum? Reiciendis molestiae quaerat mollitia deserunt optio a
                                        quisquam, sint assumenda minima quas tempore?
                                    </p>
                                    <hr />
                                    <button
                                        className="m-6 border py-2 px-5 border-gray-200 rounded-3xl bg-red-500"
                                    >
                                        <span className="text-2xl text-white">Add to Cart</span>
                                    </button>
                                    <hr />
                                    <p className="mb-6">
                                        <span className="text-gray-400">Categories:</span>
                                        <span>Action & Adventure,Activity Books, Culture</span><br />

                                        <span className="text-gray-400">Tags:</span>
                                        <span>Books,Ficton,Romance-Contemporary</span>
                                    </p>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>

        </div>
    );
};

export default Page;