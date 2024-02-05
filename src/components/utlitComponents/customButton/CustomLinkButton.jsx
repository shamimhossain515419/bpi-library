
import Link from 'next/link';
import React from 'react';

const CustomLinkButton = ({ title, path, primary_bg }) => {
     return (
          <Link href={path} className={`text-[15px] w-full  px-6 py-4 ${primary_bg ? primary_bg : "bg-transparent"}    my-3 flex items-center justify-center rounded-[40px] cursor-pointer relative overflow-hidden transition-all    duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-indigo-500
          before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[40px]  hover:before:left-0 uppercase  text-white`}>
               {title}
          </Link>
     );
};

export default CustomLinkButton;