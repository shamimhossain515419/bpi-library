"use client";
import { GlobalContext } from "@/AuthProvider/AuthProvider";
import ProfileComponent from "@/components/account/profile/ProfileComponent";
import React from "react";
import { useContext } from "react";

const Page = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div className="">
      <ProfileComponent user={user} />
    </div>
  );
};

export default Page;
