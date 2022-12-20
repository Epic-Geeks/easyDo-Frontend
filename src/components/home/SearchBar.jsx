import { useState } from "react";
import random from "../../assets/images/home/front.jpg";

export default function SearchBar() {
  const [focusBox, setFocusBox] = useState(false);
  const focusHandler = () => {
    setFocusBox(!focusBox);
  };

  return (
    <div className="relative z-40">
      <input
        type="text"
        placeholder="Search by service, provider, category"
        onFocus={focusHandler}
        onBlur={focusHandler}
        className="bg-blue-500 bg-opacity-50 focus:bg-opacity-100 border-[1px] border-white outline-none px-4 py-2 rounded-md sm:w-[500px] w-[300px] placeholder-white"
      />
      {focusBox && (
        <div className="bg-white px-4 py-4 absolute top-[2.4rem] left-0 w-full text-[12px] border-t-[1px] border-t-black search_drop_shadow rounded-br-md rounded-bl-md">
          <h2 className="uppercase text-gray-400 font-bold">Services</h2>
          <div className="my-4 flex items-center gap-2 flex-wrap">
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">
            Barber
            </p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Plumber</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Electrical services</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Cleaning and maid</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Painting & Staining</p>
            <p className="bg-[#F6F6F6] rounded-lg px-2 py-1">Engineer</p>
          </div>
          <div>
            <h2 className="uppercase text-gray-400 font-bold py-4">Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="font-light capitalize text-base">
                  Carpentry
                  </h1>
                  <p className="opacity-40">10k Providers</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="font-light capitalize text-base">
                  Blacksmith
                  </h1>
                  <p className="opacity-40">8k+ Providers</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="font-light capitalize text-base">
                  House Painting
                  </h1>
                  <p className="opacity-40">15k+ Providers</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-600 hover:text-white border-gray-500">
                <img
                  src={random}
                  alt="random"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="font-light capitalize text-base">
                  Construction
                  </h1>
                  <p className="opacity-40">25k+ Providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
