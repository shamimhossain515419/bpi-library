
import Sitebar from '@/components/sitebar/Sitebar';
import Footer from '@/share/Footer/Footer';
import Navbar from '@/share/Navbar/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>

            <div>
                <Navbar />
            </div>
            <div className=' min-h-[50vh] pt-9'>
                {children}
            </div>
            <div>
                <Footer />
            </div>
            <Sitebar />
        </div>
    );
};

export default layout;