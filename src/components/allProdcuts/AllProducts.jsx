import React from 'react';
import PrimaryCart from '../carts/primaryCart';
import { products } from '@/utility/prodcut';

const AllProducts = () => {
    return (
        <div>
            <div className=" grid sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-4 p-10 rounded-2xl ">
                {
                    products?.map((item, index) => <PrimaryCart key={index} product={item}></PrimaryCart>)
                }
            </div>
        </div>
    );
};

export default AllProducts;