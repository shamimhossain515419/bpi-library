import Image from 'next/image';
import React from 'react';
import image1 from "../../../../public/image/contact/image/contact_pic_1.png"
import image2 from "../../../../public/image/contact/image/contact_pic_2.png"
import image3 from "../../../../public/image/contact/image/contact_pic_3.png"
import Container from '@/share/container/Container';

const Page = () => {
    return (
        <>
            <Container>
                <div className='px-4  '>
                    <div>
                        <div class=" text-center mt-8 font-bold text-4xl">
                            <h1>We Would Love To Hear From You.</h1>
                        </div>

                        <div class="text-center">
                            <p class="mt-12">
                                Your email address will not be published Required fields are marked*
                            </p>
                        </div>
                    </div>
                    <div>
                        {/* contact form  */}
                        <div className="flex justify-center px-8 mt-12 mb-8">
                            <form className="w-full max-w-[800px]">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="  Enter your Name *"
                                        required
                                        className="  focus:outline-primary rounded-full shadow appearance-none  w-full py-4  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email *"
                                        required
                                        className="mt-4 py-4   focus:outline-1 focus:outline-primary rounded-full shadow appearance-none  w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Message"
                                        required
                                        className="mt-4 py-4   focus:outline-primary rounded-xl shadow appearance-none  w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                    </textarea>
                                </div>
                                <div className="flex items-center justify-self-auto">
                                    <input type="checkbox" id="agree" name="agree" className="mr-2" />
                                    <label for="agree" className="text-gray-700 text-sm break-words">
                                        Save my name,email and website in this browser for the next time
                                        Icomment
                                    </label>
                                </div>

                                <div className="mt-12">
                                    <button
                                        type="submit"
                                        className=" bg-primary   hover:opacity-75 text-white font-bold rounded-full focus:outline-none focus:shadow-outline w-32 h-12">
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>

                        {/* Our Book Store  */}

                        <div>
                            <h1 className=' py-10 text-[24px] text-center font-medium'> Our Book Store</h1>
                            <div
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center "
                            >
                                <div class="mx-4 mb-24">
                                    <Image width={400} height={250} src={image1} alt="image" />
                                    <h1 class="mt-8 font-bold text-2xl">New York</h1>
                                    <p class="mt-4">3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                                    <p>Hotline: +(84) 2500 888 33</p>
                                    <p>support@example.com</p>
                                    <h2 class="mt-4 font-semibold text-xl">Working Hours</h2>
                                    <p class="mt-4">Open: 8:00AM – Close: 18:00PM</p>
                                    <p>Saturday – Sunday: Close</p>
                                </div>

                                <div class="mx-4 mt-8 md:mt-0">
                                    <Image width={400} height={250} src={image2} alt="image" />
                                    <h1 class="mt-8 font-bold text-2xl">Las Vegas</h1>
                                    <p class="mt-4">3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                                    <p>Hotline: +(84) 2500 888 33</p>
                                    <p>support@example.com</p>
                                    <h2 class="mt-4 font-semibold text-xl">Working Hours</h2>
                                    <p class="mt-4">Open: 8:00AM – Close: 18:00PM</p>
                                    <p>Saturday – Sunday: Close</p>
                                </div>

                                <div class="mx-4 mt-8 lg:mt-0">
                                    <Image width={400} height={250} src={image3} alt="image" />
                                    <h1 class="mt-8 font-bold text-2xl">Los Angeles</h1>
                                    <p class="mt-4">3164 N Delaware Rd Milan, Indiana(IN), 47031</p>
                                    <p>Hotline: +(84) 2500 888 33</p>
                                    <p>support@example.com</p>
                                    <h2 class="mt-4 font-semibold text-xl">Working Hours</h2>
                                    <p class="mt-4">Open: 8:00AM – Close: 18:00PM</p>
                                    <p>Saturday – Sunday: Close</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Page;