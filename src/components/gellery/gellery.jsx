import Image from 'next/image';
import React from 'react';
import image1 from "../../../public/image/gellery/10.jpg"
const Gellery = () => {
    return (
        <div className=' py-9'>
            <h1 class="text-4xl font-semi-bold text-center mt-6 opacity-75">About us</h1>
            <div class="flex justify-center">
                <div class="p-8 max-w-2xl mx-auto text-center">
                    <span class="text-gray-600 ">This is a homepage example featuring a 4 column grid layout, with manually
                        selected galleries and meta data displayed on mouse hover.</span>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 px-8">
                    {/* <!-- Row 1 --> */}
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image width={400} height={200} src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden group">
                        <Image src={image1} alt="Placeholder Image"
                            className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110" />
                        <div
                            className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-bold">Some text on hover</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gellery;