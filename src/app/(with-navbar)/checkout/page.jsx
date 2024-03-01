"use client"
import { GlobalContext } from '@/AuthProvider/AuthProvider';
import CheckoutCart from '@/components/checkout/CheckoutCart';
import Summary from '@/components/checkout/Summary';
import { useGetSingleIserQuery } from '@/redux/features/auth/authApi';
import { useGetCartQuery } from '@/redux/features/managebooks/ManageBooksApi';
import Container from '@/share/container/Container';
import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
    const { user } = useContext(GlobalContext);
    const { data: userData, } = useGetSingleIserQuery(user?.email);
    const userinfo = userData?.data;
    const { cartItems, Loading, status } = useSelector((state) => state?.cart)
    const [selectBook, setSelectBook] = useState("");
    return (
        <>
            <Container>
                <div className=' mt-10'>
                    <div className=' grid col-span-2 lg:grid-cols-3 gap-4 lg:gap-7'>
                        <div className='col-span-1 lg:col-span-2'>
                            {
                                cartItems?.length > 0 ? <> {
                                    cartItems?.map((item) => {
                                        return (
                                            <CheckoutCart selectBook={selectBook} setSelectBook={setSelectBook}
                                                key={item.id}
                                                book={item}
                                            />
                                        )
                                    })
                                }</> : <p className=' flex items-center justify-center min-h-[50px] text-[35px] text-primary'>Please add to cart</p>
                            }

                        </div>
                        <div className='col-span-1 '>
                            <Summary userinfo={userinfo} selectBook={selectBook} books={cartItems} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Page;