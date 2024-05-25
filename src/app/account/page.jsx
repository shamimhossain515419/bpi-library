'use client';
import { GlobalContext } from '@/AuthProvider/AuthProvider';
import EditInformation from '@/components/account/profile/EditInformation';
import { useGetSingleIserQuery } from '@/redux/features/auth/authApi';
import Image from 'next/image';
import React, { useState } from 'react';
import { useContext } from 'react';

const Page = () => {
  const { user } = useContext(GlobalContext);

  const [activeModal, setActiveModal] = useState(false);
  const { data } = useGetSingleIserQuery(user?.email);
  const usersDetails = data?.data;

  return (
    <>
      <div class="flex items-center justify-center min-h-screen ">
        <div class="bg-white shadow-lg rounded-lg p-4 md:w-2/4 grid gap-4 mt-10 mb-10 relative">
          <h2 class="font-bold">My Profile</h2>
          <div class="p-4 border rounded-lg border-gray-200">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                {/* <!-- Student Profile Photo || height,width need same size so that it can round fully --> */}
                <Image
                  width={100}
                  height={100}
                  class="rounded-full  w-14 sm:w-auto sm:h-14 cursor-pointer"
                  src={user?.photoURL}
                  alt="User Photo"
                />
                <div class="ml-3">
                  <h2 class="font-bold"> {user?.displayName} </h2>
                  <p class="text-sm opacity-60 ">#Role: Student</p>
                  <p class="text-sm opacity-60 ">
                    {' '}
                    {usersDetails?.address ? usersDetails?.address : 'N/A'}{' '}
                  </p>
                </div>
              </div>
              <div class="absolute ms-2 top-16 right-6 lg:mt-2.5 lg:right-8">
                <div>
                  <button class="border-2 rounded-md p-2 w-20 text-sm font-semibold opacity-30 hover:opacity-100 focus:ring-2 duration-300 hover:shadow-md hover:border-green-800 focus:shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800">
                    <i class="fa-solid fa-pencil"></i>&nbsp;&nbsp;Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 border rounded-lg border-gray-200 relative">
            <div>
              <h2 class="font-bold">Student Information</h2>
              <div class="grid gap-4 gap-y-5 lg:grid-cols-2 mt-6 opacity-60 lg:text-sm">
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Name</span>
                  <span class="font-semibold">
                    {' '}
                    {usersDetails?.name ? usersDetails?.name : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Department</span>
                  <span class="font-semibold">
                    {usersDetails?.department
                      ? usersDetails?.department
                      : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Semester</span>
                  <span class="font-semibold">
                    {usersDetails?.department ? usersDetails?.semester : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Shift</span>
                  <span class="font-semibold">
                    {usersDetails?.shift ? usersDetails?.shift : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Roll</span>
                  <span class="font-semibold">
                    {' '}
                    {usersDetails?.roll ? usersDetails?.roll : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Group</span>
                  <span class="font-semibold">
                    {' '}
                    {usersDetails?.gruop ? usersDetails?.gruop : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Registration</span>
                  <span class="font-semibold">
                    {' '}
                    {usersDetails?.registration
                      ? usersDetails?.registration
                      : 'N/A'}{' '}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Session</span>
                  <span class="font-semibold">
                    {' '}
                    {usersDetails?.sesstion
                      ? usersDetails?.sesstion
                      : 'N/A'}{' '}
                  </span>
                </div>
              </div>

              <div class="absolute ms-2 top-2 right-2 lg:top-4 lg:right-4">
                <div onClick={() => setActiveModal(usersDetails)}>
                  <button class="border-2 rounded-md p-2 w-20 text-sm font-semibold opacity-30 hover:opacity-100 focus:ring-2 duration-300 hover:shadow-md hover:border-green-800 focus:shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800">
                    <i class="fa-solid fa-pencil"></i>&nbsp;&nbsp;Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 border rounded-lg border-gray-200 relative">
            <div>
              <h2 class="font-bold">Card Information</h2>
              <div class="grid gap-4 gap-y-5 lg:grid-cols-2 mt-6 opacity-60 lg:text-sm">
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Card Type</span>
                  {/* <!-- dafult value is Reading card --> */}
                  <span class="font-semibold">Reading Card</span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Card Status</span>
                  {/* <!-- dafult value is Active --> */}
                  <span class="font-semibold text-green-500">Active</span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Active Date</span>
                  <span class="font-semibold">05-03-2024</span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Expire Date</span>
                  <span class="font-semibold">20-03-2024</span>
                </div>
              </div>

              <div class="absolute ms-2 top-2 right-2 lg:top-4 lg:right-4">
                <a href="/edit info/card info/src/index.html" target="_blank">
                  <button class="border-2 rounded-md p-2 w-20 text-sm font-semibold opacity-30 hover:opacity-100 focus:ring-2 duration-300 hover:shadow-md hover:border-green-800 focus:shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800">
                    <i class="fa-solid fa-pencil"></i>&nbsp;&nbsp;Edit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeModal && (
        <EditInformation
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      )}
    </>
  );
};

export default Page;
