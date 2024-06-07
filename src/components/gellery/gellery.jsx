import Image from "next/image";
import React from "react";
import image1 from "../../../public/image/gellery/10.jpg";
const Gellery = () => {
  return (
    <div className=" py-9">
      <h1 class="text-4xl font-semi-bold text-center mt-6 opacity-75">
        Gellery
      </h1>
      <div class="flex justify-center">
        <div class="p-8 max-w-2xl mx-auto text-center">
          <span class="text-gray-600 ">
            This is a homepage example featuring a 4 column grid layout, with
            manually selected galleries and meta data displayed on mouse hover.
          </span>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 px-8">
          {/* <!-- Row 1 --> */}
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/QjWMM87/109352634-1935545759915522-7713840631862641141-n.jpg"
              }
              alt="Placeholder Image "
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/Qnx2N45/326773157-573806354339025-629602814245401810-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/Pz7pV5v/326874022-1238622063738660-8500177978172714235-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/C7ZkvQp/327952832-704476657751083-4377274551221025581-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/fq0zYrL/328035001-1560614297756856-2037304339164454837-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/GkcjJq5/328486558-874033437252346-8753088830960313378-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/2vdspvq/329039006-575293171144853-2777768926385141515-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/Sxycd92/329161062-561047782418152-4356413963863289886-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/X7kvJw6/329241394-568071598708801-7850489288747785966-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/G0nkKtV/378333035-1718469661899510-6420732560658192671-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/37my7pL/337036679-226622106521517-5263233668120892817-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/9ZLJqVb/337534175-952892576069500-3891659391122621576-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/Bj6K23B/337792213-905560523984308-5576904197978649728-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/g6W6KQq/347020126-951647332637822-2069399593199028804-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/bBvQzq1/348437434-798997658328324-2422544523348299258-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="col-span-1 relative overflow-hidden group">
            <Image
              width={400}
              height={200}
              src={
                "https://i.ibb.co/RBjzc3J/377782084-1718470281899448-4275052538922307125-n.jpg"
              }
              alt="Placeholder Image"
              className="w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gellery;
