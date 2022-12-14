import React, { useState } from "react";
// import cookies from "react-cookies";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuthorized } from "../../redux/counterSlicer";
import Orders from "../customer/Orders";
import MyServices from "./MyServices";

// import logo3 from "../../assets/dashboard/logo3.png"
// import control from "../../assets/dashboard/control.png"

import { User, logo3, control, homepage2 } from "../../assets/dashboard";

export default function ProviderDashboard() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: homepage2, path: "/" },
    // { title: "Dashboard", src: "Chart_fill", path: '/', },
    { title: "Profile", src: User, path: "/EditProfile" },
    // { title: "Order ", src: "Calendar", path: '/order' },
    // { title: "Services", src: "Services", path: '/providerServices' },
    // { title: "Chat", src: "Chat", path: '/Chat' },
    // { title: "Delete", src: "Delete", path: '/delete' },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];
  return (
    <div>
      {isAuthorized && (
        <div className="flex">
          <div
            className={`${
              open ? "w-72" : "w-20"
            } duration-300 h-auto p-5 pt-8 bg-dark-purple relative`}
          >
            <img
              src={control}

              alt="control img"

              className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={logo3}
                alt="logo3 img"
                style={{ width: "50px" }}
                className={`curson-pointer duration-500 light-yellow ${
                  open && "rotate-[360deg]"
                } `}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Provider
              </h1>
            </div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => {
                return (
                  <li
                    key={index}
                    className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                   `}
                  >
                    <iimg src={Menu.src} style={{ width: "25px" }} />
                    <Link to={Menu.path}>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200`}
                      >
                        {Menu.title}
                      </span>
                    </Link>
                  </li>                 
                );
              })}           
            </ul>         
          </div>       
          <MyServices />
          {/* <div>Dashboard for Provider {cookies.load("name")}</div> */}
        </div>   
      )}
      {/* <Orders /> */} 
    </div>
    
  );
}
