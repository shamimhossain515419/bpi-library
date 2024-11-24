import React from "react";
import Image from "next/image";
import image1 from "/B P I/bpi-library/src/assets/product/Library (1).jpg";
import css from "./re.css";
import Link from "next/link";
const page = () => {
  return (
    <div className=" mb-10 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-8">
      <div className="card">
        <div className="card-info">
          <h2 className="title">Bangabandhu Cell </h2>
          <Image
            width={400}
            height={200}
            src={image1}
            alt="Placeholder Image"
            className="w-full h-auto  rounded-xl  mb-3"
          />
          <div className="flex justify-center ">
         
              <button className="button">Veiw Details</button>
        
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-info">
          <h2 className="title">Bangabandhu Cell </h2>
          <Image
            width={400}
            height={200}
            src={image1}
            alt="Placeholder Image"
            className="w-full h-auto  rounded-xl mb-3"
          />
          <div className="flex justify-center">
            <button className="button">veiw details</button>
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-info">
          <h2 className="title">Bangabandhu Cell </h2>
          <Image
            width={400}
            height={200}
            src={image1}
            alt="Placeholder Image"
            className="w-full h-auto  rounded-xl mb-3"
          />
          <div className="flex justify-center">
            <button className="button">veiw details</button>
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-info">
          <h2 className="title">Bangabandhu Cell </h2>
          <Image
            width={400}
            height={200}
            src={image1}
            alt="Placeholder Image"
            className="w-full h-auto  rounded-xl mb-3"
          />
          <div className="flex justify-center">
            <button className="button">veiw details</button>
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-info">
          <h2 className="title">Bangabandhu Cell </h2>
          <Image
            width={400}
            height={200}
            src={image1}
            alt="Placeholder Image"
            className="w-full h-auto  rounded-xl mb-3"
          />
          <div className="flex justify-center">
            <button className="button">veiw details</button>
          </div>
        </div>
      </div>{" "}
      <div className="card">
        <div className="card-info">
          <h2 className="title">Bangabandhu Cell </h2>
          <Image
            width={400}
            height={200}
            src={image1}
            alt="Placeholder Image"
            className="w-full h-auto  rounded-xl mb-3"
          />
          <div className="flex justify-center">
            <button className="button">veiw details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
