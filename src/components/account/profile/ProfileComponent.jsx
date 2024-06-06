"use client";
import { useGetSingleIserQuery } from "@/redux/features/auth/authApi";
import EditProfile from "./EditProfile";
import { useState } from "react";

const ProfileComponent = ({ user }) => {
  const { data, error } = useGetSingleIserQuery(user?.email);
  const userInfo = data?.data;
  const [active, setActive] = useState(false);
  return (
    <>
      <div class="flex items-center w-full justify-center min-h-screen">
        <div class="bg-white shadow-lg rounded-lg p-4 md:w-2/4 grid gap-4 mt-10 mb-10 relative">
          <h2 class="font-bold">My Profile</h2>
          <div class="p-4 border rounded-lg border-gray-200">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="rounded-full  w-14 sm:w-auto sm:h-14 cursor-pointer"
                  src={userInfo?.photo}
                  alt="User Photo"
                />
                <div class="ml-3">
                  <h2 class="font-bold">{user?.displayName}</h2>
                  <p class="text-sm opacity-60 ">
                    #Role: {userInfo?.isRole ? userInfo?.isRole : "N/A"}{" "}
                  </p>
                  <p class="text-sm opacity-60 ">
                    {userInfo?.address ? userInfo?.address : "N/A"}
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
                  <span class="font-semibold">{userInfo?.name}</span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Department</span>
                  <span class="font-semibold">
                    {userInfo?.department ? userInfo?.department : "N/A"}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Semester</span>
                  <span class="font-semibold">
                    {userInfo?.semester ? userInfo?.semester : "N/A"}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Shift</span>
                  <span class="font-semibold">
                    {userInfo?.shift ? userInfo?.shift : "N/A"}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Roll</span>
                  <span class="font-semibold">
                    {" "}
                    {userInfo?.roll ? userInfo?.roll : "N/A"}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Group</span>
                  <span class="font-semibold">
                    {" "}
                    {userInfo?.group ? userInfo?.group : "N/A"}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Registration</span>
                  <span class="font-semibold">
                    {" "}
                    {userInfo?.reg ? userInfo?.reg : "N/A"}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Session</span>
                  <span class="font-semibold">
                    {" "}
                    {userInfo?.session ? userInfo?.session : "N/A"}
                  </span>
                </div>
              </div>

              <div class="absolute ms-2 top-2 right-2 lg:top-4 lg:right-4">
                <div>
                  <button
                    onClick={() => setActive(userInfo)}
                    class="border-2 rounded-md p-2 w-20 text-sm font-semibold opacity-30 hover:opacity-100 focus:ring-2 duration-300 hover:shadow-md hover:border-green-800 focus:shadow-md focus:outline-none focus:ring-green-800 focus:border-green-800"
                  >
                    Edit
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

                  <span class="font-semibold">Reading Card</span>
                </div>
                <div class="grid grid-cols-1 gap-y-2">
                  <span>Card Status</span>

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
      {active && <EditProfile userInfo={active} setActive={setActive} />}
    </>
  );
};

export default ProfileComponent;
