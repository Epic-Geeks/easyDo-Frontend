import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo3.png";


const N = () => {
  const [open, setOpen] = useState(false);

  const onToggleMenu = ()=>{
    
  }
  return (
    <div class="font-[Poppins] h-0">
      <header class="z-20 bg-transparent">
        <nav class="flex justify-between items-center w-[92%]  mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer mt-2"
              src={Logo}

              alt="..."
            />
          </div>
          <div class="nav-links duration-500 md:static absolute bg-transparent md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul class="flex text-xl text-white md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a class="hover:text-gray-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a class="hover:text-gray-500" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a class="hover:text-gray-500" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a class="hover:text-gray-500" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a class="hover:text-gray-500" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-6">
            <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              Sign in
            </button>
            <ion-icon
              onclick="onToggleMenu(this)"
              name="menu"
              class="text-3xl cursor-pointer md:hidden"
            ></ion-icon>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default N;
