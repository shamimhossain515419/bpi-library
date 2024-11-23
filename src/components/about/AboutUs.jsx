"use client";
import Container from "@/share/container/Container";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="pt-12 pb-12">
      <Container>
        <h1 className="text-[20px]  md:text-[30px] text-center font-medium">
          {" "}
          About us
        </h1>
        <div className=" p-4 grid lg:grid-cols-2 grid-cols-1 items-center md:grid-cols-2 gap-2">
          <div className=" px-3">
            <Image
              className=" w-full h-[500px]"
              width={500}
              height={350}
              src="https://i.ibb.co/4YPBVqB/aboutpage.webp"
              alt="iamge"
            ></Image>
          </div>

          <div className="">
            <p className=" text-[14px] md:text-[16px]  text-center">
              In this section, we offer insight into the library s mission,
              history, and values. Students can discover the institution s
              commitment to fostering knowledge, supporting academic endeavors,
              and serving as a vibrant hub for learning. They will learn about
              the library is journey, key milestones, and its dedication to
              creating an inclusive and enriching environment.
            </p>

            <p className=" text-[14px] md:text-[16px] mt-7  text-center">
              Facilitating Admin Approvals & Granting Permissions. Your Gateway
              to Seamless Decision-Making. Streamlining Access, Empowering
              Learning: Our vision is a simplified library experience through an
              intuitive Library Management System, promoting effortless access
              to knowledge.
            </p>
          </div>
        </div>
       
      </Container>
    </div>
  );
};

export default AboutUs;
