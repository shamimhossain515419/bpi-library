import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import Container from '../container/Container';

const Footer = () => {
     return (
          <div className=' bg-[#E6E6E6] py-6 px-2'>
               <Container>



                    <div className=''>
                         <div className=' grid md:grid-cols-2 lg:grid-cols-3  gap-2 sm:gap-3 md:gap-4 lg:gap-7 items-start'>
                              <div>
                                   <h1 className='text-[17px] font-medium primary'>Customer Service</h1>
                                   <div>
                                        <div className=' flex flex-col gap-2 mt-4'>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> Contact us </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> FAQs  </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>  Orders and delivery </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>  Returns and refunds</Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>   Payment and pricing</Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>Cryptocurrency payments  </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> Promotion terms and conditions </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>   BPI-Library Customer Promise </Link>
                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <h1 className='text-[17px] font-medium primary'>About  BPI-Library</h1>
                                   <div>
                                        <div className=' flex flex-col gap-2 mt-4'>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>  About us </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> FAQs  </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>  Investors </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>    BPI-Library partner boutiques</Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>   Payment and pricing</Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> Modern slavery statement  </Link>

                                        </div>
                                   </div>
                              </div>
                              <div>
                                   <h1 className='text-[17px] font-medium primary'>Discounts and membership</h1>
                                   <div>
                                        <div className=' flex flex-col gap-2 mt-4'>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> Affiliate program</Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}> Refer a friend  </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>  BPI-Library membership </Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>  Student Beans and Graduates</Link>
                                             <Link className='text-[14px] hover:underline duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'}>   Payment and pricing</Link>
                                             <div>
                                                  <h1 className='text-[17px] font-medium primary'> Follow us</h1>
                                             </div>
                                             <div className=' flex items-center gap-2'>
                                                  <Link href={'/'} className=' p-2 hover:bg-[#F5F5F5]  duration-200 rounded-md cursor-pointer'>
                                                       <FaFacebook size={18}></FaFacebook>
                                                  </Link>
                                                  <Link target='_blank' href={'https://google.com'} className=' p-2 hover:bg-[#F5F5F5]  duration-200 rounded-md cursor-pointer'> <FaGoogle size={18}></FaGoogle></Link>
                                                  <Link target='_blank' href={'https://instagram.com'} className=' p-2 hover:bg-[#F5F5F5]  duration-200 rounded-md cursor-pointer'> <FaInstagram size={18}></FaInstagram></Link>
                                                  <Link target='_blank' href={'https://twitter.com'} className=' p-2 hover:bg-[#F5F5F5]  duration-200 rounded-md cursor-pointer' > <FaTwitter size={18}></FaTwitter></Link>
                                                  <Link target='_blank' href={'https://facebook.com'} className=' p-2 hover:bg-[#F5F5F5]  duration-200 rounded-md cursor-pointer'>  <FaYoutube size={18}></FaYoutube></Link>
                                             </div>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className=' bg-white h-[2px] w-full my-3'>

                    </div>
                    {/* public link  */}
                    <div className=' container'>

                         <div className=' flex gap-3 flex-wrap items-center'>
                              <Link className='text-[14px] hover:underline hover:opacity-70 duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'} > Privacy policy</Link>
                              <Link className='text-[14px] hover:underline hover:opacity-70 duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'} >  Terms and conditions</Link>
                              <Link className='text-[14px] hover:underline hover:opacity-70 duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'} > Accessibility</Link>
                              <Link className='text-[14px] hover:underline hover:opacity-70 duration-200  font-normal capitalize  text-gray-700 hover:text-primary' href={'/'} >  Sitemap</Link>
                         </div>
                         {/* copy right section */}
                         <div className=' py-4'>
                              <p className='text-[14px]  duration-200  font-normal capitalize  text-gray-700 hover:text-primary' >{' BPI-Library'} and the {' BPI-Library'} logo are trade marks of  BPI-Library UK Limited and are registered in numerous jurisdictions around the world.</p>
                              <p className='text-[14px]  duration-200  font-normal capitalize  text-gray-700 hover:text-primary' >© Copyright 2024  BPI-Library BD Limited. All rights reserved.</p>

                         </div>

                    </div>
               </Container>
          </div>
     );
};

export default Footer;