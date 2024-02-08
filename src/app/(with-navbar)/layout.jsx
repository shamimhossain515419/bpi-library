
import Footer from '@/share/Footer/Footer';
import Navbar from '@/share/Navbar/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>

            <div>
                <Navbar></Navbar>
            </div>
            <div className=' min-h-[50vh]'>
                {children}
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default layout;