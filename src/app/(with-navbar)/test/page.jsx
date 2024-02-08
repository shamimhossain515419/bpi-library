"use client"

import { GlobalContext } from "@/AuthProvider/AuthProvider";
import { useContext } from "react";

const Page = () => {
     const { createUser, updateUserProfile } = useContext(GlobalContext);
     const name = "shamim";
     const photo = "https://simgbb.com/avatar/1fmbxVwJfCXB.png"

     const handleClick = async () => {
          console.log("Ddddds");

          const ressult = await updateUserProfile(name, photo);
          console.log(ressult);

     }

     return (
          <div>
               <div className=" p-9">
                    <button onClick={handleClick} className=" p-4   bg-red-400 text-white  rounded"> Click post</button>
               </div>
          </div>
     );
};

export default Page;