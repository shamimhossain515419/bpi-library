"use client"
import { GlobalContext } from '@/AuthProvider/AuthProvider';
import CheckoutCart from '@/components/checkout/CheckoutCart';
import Summary from '@/components/checkout/Summary';
import { useGetSingleIserQuery } from '@/redux/features/auth/authApi';
import { useGetCartQuery } from '@/redux/features/managebooks/ManageBooksApi';
import Container from '@/share/container/Container';
import React, { useContext } from 'react';

const Page = () => {
    const { user } = useContext(GlobalContext);
    const { data: userData, } = useGetSingleIserQuery(user?.email);
    const userinfo = userData?.data;
    const { data: getCart } = useGetCartQuery(userinfo?.id)
    return (
        <>
            <Container>
                <div className=' mt-10'>
                    <div className=' grid col-span-2 lg:grid-cols-3 gap-4 lg:gap-7'>
                        <div className='col-span-1 lg:col-span-2'>
                            {
                                getCart?.data?.map((item) => {
                                    return (
                                        <CheckoutCart
                                            key={item.id}
                                            book={item}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className='col-span-1 '>
                            <Summary books={getCart?.data} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Page;