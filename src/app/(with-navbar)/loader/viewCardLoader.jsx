import React from 'react';

const ViewCardLoader = () => {
     return (
          <div>
               <div className=" w-full  flex  flex-col md:flex-row  py-5 gap-10 md:gap-8 overflow-hidden animate-pulse">
                    <div className=" w-full md:w-[70%]">
                         <div className=' flex  gap-2'>
                              <div className="relative h-[150px] md:min-h-[380px]  rounded-md overflow-hidden">
                                   <div className="aspect-video h-[150px] md:h-[380px]  bg-slate-200" />
                              </div>
                              <div className="relative md:min-h-[380px] h-[150px]  rounded-md overflow-hidden">
                                   <div className="aspect-video md:h-[380px] h-[150px]  bg-slate-200" />
                              </div>
                         </div>
                         <div className=' flex  gap-2 py-2'>
                              <div className="relative h-[150px] md:min-h-[380px]  rounded-md overflow-hidden">
                                   <div className="aspect-video h-[150px] md:h-[380px]  bg-slate-200" />
                              </div>
                              <div className="relative md:min-h-[380px] h-[150px]  rounded-md overflow-hidden">
                                   <div className="aspect-video md:h-[380px] h-[150px]  bg-slate-200" />
                              </div>
                              <div className="relative md:min-h-[380px] h-[150px]  rounded-md overflow-hidden">
                                   <div className="aspect-video md:h-[380px] h-[150px]  bg-slate-200" />
                              </div>
                         </div>
                    </div>
                    <div className=" full md:w-[30%] ">

                         <div className="flex flex-col space-y-2 grow  md:pr-5">
                              <p className="bg-slate-200 max-w-[50%]  mt-2 text-slate-200 h-[40px] text-[px]">
                                   Loading...
                              </p>
                              <p className="bg-slate-200  text-slate-200 max-w-[80%] text-[10px]">
                                   Loading...
                              </p>
                              <p className="bg-slate-200 max-w-[30%] text-slate-200 text-[8px]">
                                   Loading...
                              </p>
                              <div>
                                   <p className="bg-slate-200 max-w-[20%]  mt-2 text-slate-200 text-[8px]">
                                        Loading...
                                   </p>
                              </div>
                              <div>
                                   <p className="bg-slate-200  h-[55px] rounded-xl mt-2 text-slate-200 text-[8px]">
                                        Loading...
                                   </p>
                              </div>
                              <div className=' flex py-2 gap-4  items-center'>
                                   <p className="bg-slate-200 w-full  h-[55px] rounded-xl mt-2 text-slate-200 text-[8px]">
                                        Loading...
                                   </p>
                                   <p className="bg-slate-200  w-full    h-[55px] rounded-xl mt-2 text-slate-200 text-[8px]">
                                        Loading...
                                   </p>
                              </div>
                              <div className=' space-y-2'>
                                   <p className="bg-slate-200  text-slate-200 max-w-[50%] text-[10px]">
                                        Loading...
                                   </p>
                                   <p className="bg-slate-200 max-w-[30%] text-slate-200 text-[8px]">
                                        Loading...
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ViewCardLoader;