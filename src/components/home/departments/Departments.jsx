import Image from "next/image";
import React from "react";

import civil_engineering from "../../../../public/image/department/civil_engineering.jpg";
import coumputer from "../../../../public/image/department/computer_engineering.jpg";
import electrical_engineering from "../../../../public/image/department/electrical_engineering.jpg";
import mechanical from "../../../../public/image/department/mechanical-engineering.jpg";
import power_engineering from "../../../../public/image/department/power_engineering.jpg";
import rac_engineering from "../../../../public/image/department/rac_engineering.jpg";
import Container from "@/share/container/Container";

import { IoBookSharp } from "react-icons/io5";
const Departments = () => {
  return (
    <Container>
      <div className="  pt-20 pb-2">
        <div class=" max-w-[700px] mx-auto text-center mt-3 place-content-center">
          <div className=" flex items-center justify-center">
            <IoBookSharp className=" block text-[24px]" />
          </div>
          <h2 class="text-4xl font-mono font-black my-2">
            Binary Bookshelf Department
          </h2>
          <p class="text-gray-400 font-mono">
            Facilitating Admin Approvals & Granting Permissions. Your Gateway to
            Seamless Decision-Making. Streamlining Access, Empowering Learning:
            Our vision is a simplified library experience through an intuitive
            Library Management System, promoting effortless access to knowledge.
          </p>
        </div>
        <div className=" grid  md:grid-cols-3  gap-1 py-10">
          <div className="relative  group shadow-md h-[280px] overflow-hidden ">
            <Image
              className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm"
              src={coumputer}
              alt="Image"
            />

            <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
              <h3 className="text-white text-2xl font-semibold">Computer</h3>
              <span className="text-white text-md">65 Books</span>
            </div>
          </div>
          {/* civil_engineering  */}
          <div className="relative  group shadow-md h-[280px] overflow-hidden ">
            <Image
              className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm"
              src={civil_engineering}
              alt="Image"
            />

            <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
              <h3 className="text-white text-2xl font-semibold">Civil </h3>
              <span className="text-white text-md">50 Books</span>
            </div>
          </div>
          {/* electrical_engineering  */}
          <div className="relative  group shadow-md h-[280px] overflow-hidden ">
            <Image
              className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm"
              src={electrical_engineering}
              alt="Image"
            />

            <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
              <h3 className="text-white text-2xl font-semibold">Electrical</h3>
              <span className="text-white text-md">10 Books</span>
            </div>
          </div>
          {/* mechanical */}
          <div className="relative  group shadow-md h-[280px] overflow-hidden ">
            <Image
              className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm"
              src={mechanical}
              alt="Image"
            />

            <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
              <h3 className="text-white text-2xl font-semibold"> Mechanical</h3>
              <span className="text-white text-md">12 Books</span>
            </div>
          </div>
          <div className="relative  group shadow-md h-[280px] overflow-hidden ">
            <Image
              className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm"
              src={power_engineering}
              alt="Image"
            />

            <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
              <h3 className="text-white text-2xl font-semibold">Power</h3>
              <span className="text-white text-md">8 Books</span>
            </div>
          </div>
          {/* rac_engineering  */}
          <div className="relative  group shadow-md h-[280px] overflow-hidden ">
            <Image
              className=" object-cover group-hover:scale-110 duration-300   w-full  h-full rounded-sm"
              src={rac_engineering}
              alt="Image"
            />

            <div className="absolute inset-0 flex flex-col bg-[#0f0e0e7d] cursor-pointer items-center justify-center text-center w-full h-full textDiv">
              <h3 className="text-white text-2xl font-semibold">RAC</h3>
              <span className="text-white text-md">19 Books</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Container>
  );
};

export default Departments;
