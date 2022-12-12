import React, { useState } from "react";
import cookies from "react-cookies";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuthorized } from "../../redux/counterSlicer";
import Orders from "../Orders";

import logo3 from "../../assets/dashboard/logo.png";
import control from "../../assets/dashboard/control.png";

export default function UserDashboard() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "homepage", path: "/" },
    // { title: "Dashboard", src: "Chart_fill", path: '/', },
    { title: "Accounts", src: "User", gap: true, path: "/EditProfile" },
    // { title: "Chat", src: "Chat", path: '/' },
    { title: "Orders ", src: "Orders" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];
  return (
    <>
      {isAuthorized && (
        <div className="flex">
          <div
            className={`${
              open ? "w-72" : "w-20"
            } duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
          >
            <img
              src={control}
              className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={logo3}
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
                User
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
                    <Link to={Menu.path}></Link>
                    <img src={`../../assets/dashboard${Menu.src}.png`} />
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
          </div>

          {/* <div>Dashboard for User {cookies.load("name")}</div> */}
        </div>
      )}
      <Orders />
    </>
  );
}
