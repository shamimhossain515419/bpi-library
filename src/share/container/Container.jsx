import React from 'react';

const Container = ({ children }) => {
     return (
          <div>

               <div className='max-w-[1400px]   mx-auto px-2 md:px-5'>
                    <div className=" md:mx-8 w-full">
                         {children}
                    </div>
               </div>
          </div>
     );
};

export default Container;