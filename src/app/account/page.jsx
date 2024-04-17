"use client"
import { GlobalContext } from '@/AuthProvider/AuthProvider';
import React from 'react';
import { useContext } from 'react';

const Page = () => {
    const { user } = useContext(GlobalContext);

    return (
        <div className='  flex justify-center items-center h-[500px]'>
            <h1 className='text-[35px] font-bold py-3'> Welcome {user?.email}  </h1>

        </div>
    );
};

export default Page;