"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"
const CursorDesign = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.clientX - 48)
      setY(e.clientY - 48)
    }
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor)
    }

  }, [])

  return (<div className=" z-20 fixed top-0 ">
    <motion.div animate={{
      x,
      y
    }} className=" border-4  w-[100px] cursor-pointer h-[100px] rounded-full  flex justify-center items-center  border-primary">
      <p className="  w-[6px] h-[6px] rounded-full bg-primary"></p>
    </motion.div>
  </div>)
};

export default CursorDesign;
