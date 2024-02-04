import Footer from '@/share/Footer/Footer';
import Navbar from '@/share/Navbar/Navbar';
import React from 'react';
import ReduxProvider from '../reduxprovider/ReduxProvider';
const AllProvider = ({ children }) => {
     return (
          <div>
               <ReduxProvider>


                    <div>
                         <Navbar></Navbar>
                    </div>
                    <div className=' min-h-[50vh]'>
                         {children}
                    </div>
                    <div>
                         <Footer></Footer>
                    </div>
               </ReduxProvider>

          </div>
     );
};

export default AllProvider;