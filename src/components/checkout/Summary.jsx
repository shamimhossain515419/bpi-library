import Link from 'next/link';
import React from 'react';

const Summary = ({ books }) => {

    console.log(books);
    const totalPrice = books?.reduce((acc, item) => {
        // Multiply price and quantity for each item and add to accumulator
        return acc + (parseFloat(item?.book?.price));
    }, 0);
    console.log(totalPrice);

    const DeliveryCharge = (totalPrice * 5) / 100;
    console.log(DeliveryCharge);

    return (
        <div>
            {
                <div className=' lg:w-[390px]  pt-7 lg:pt-0'>
                    <div className='   hidden lg:block'>
                        <Link className='text-[13px] underline text-end font-normal secondary' href={'/product'}> Continue  Shopping </Link>
                    </div>
                    <div className=' lg:pt-10'>
                        <h2 className='text-[19px] secondary font-medium'>Summary</h2>

                        <div className=' pt-6'>
                            <div className=' flex justify-between gap-2 items-center'>
                                <p>Subtotal</p>
                                <span>${totalPrice ? totalPrice : "Free"}</span>
                            </div>
                            <div className='  py-3 flex justify-between gap-2 items-center'>
                                <p>Delivery</p>
                                <span>${DeliveryCharge ? DeliveryCharge : "Free"}</span>
                            </div>
                            <div className=' my-2 h-[2px] w-full bg-[#aca2a2d7] '></div>

                            <div className='  py-3 flex justify-between gap-2 items-center'>
                                <p className=' font-bold'>Total</p>
                                <p>BD:  <span className=' font-bold'>${totalPrice ? totalPrice + DeliveryCharge : " All Free"}</span></p>
                            </div>
                        </div>
                        <div className=' py-2 w-full'>
                            <button className=' w-full text-white block text-center  duration-200      bg-primary  px-2 py-[10px] hover:opacity-80 rounded-lg text-[16px] font-bold'>Go To Checkout</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Summary;