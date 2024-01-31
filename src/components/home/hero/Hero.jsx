
import Image from 'next/image';
import React from 'react';
import hero1 from "../../../assets/hero.jpg"
import Container from '@/share/container/Container';

const Hero = () => {

     return (
          <div className=''>

               <Container>

                    <div>
                         <div className=' w-full relative group  max-h-[600px] overflow-hidden'>
                              <Image className=' w-full h-full  object-fill' src={hero1} alt='image'></Image>
                              <span className=' absolute top-0  opacity-0 group-hover:opacity-100 duration-500 w-full h-full bg-[#00000052]'></span>
                              <h1 className='text-[25px] absolute bottom-7 left-5 hover:text-primary lg:text-[52px] text-white font-bold capitalize'>The Appalling and Beguiling History</h1>
                         </div>
                         <div>
                              <div>

                              </div>
                              <div></div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Hero;