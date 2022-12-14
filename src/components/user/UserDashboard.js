import React, { useState } from "react";
import { useSelector } from "react-redux";
import cookies from "react-cookies";
import { selectIsAuthorized } from "../../redux/counterSlicer";
// import Orders from "../Orders";

import { User, logo, control, homepage2, Chart_fill } from "../../assets/dashboard";
import CustomerProfile from "./CustomerProfile";
import EditProfile from "../EditProfile";
import Orders from "../Orders";

export default function UserDashboard() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [open, setOpen] = useState(true);
  const [openProfile, setOpenProfile] = useState(false);
  const [openEditInfo, setOpenEditInfo] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const Menus = [
    { title: "Home", src: homepage2, path: "/" },
    // { title: "Dashboard", src: "Chart_fill", path: '/', },
    { title: "Edit Profile", src: User, path: "/EditProfile" },
    // { title: "Chat", src: "Chat", path: '/' },
    { title: "Orders ", src: Chart_fill, path: "/Orders" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting" },
  ];
  return (
    <>
      {isAuthorized && (
        <div className="flex mt-8 mb-8 sticky top-0">
          <div
            className={`${open ? "w-72" : "w-20"
              } duration-300 h-screen p-5 pt-8 bg-dark-purple relative `}
          >
            <img
              src={control}
              alt="control img"
              className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"
                }`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <img
                src={logo}
                alt="logo img"
                style={{ width: "50px" }}
                className={`curson-pointer duration-500 light-yellow ${open && "rotate-[360deg]"
                  } `}
              />
              <h1
                className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"
                  }`}
              >
                {cookies.load("name")}
              </h1>
            </div>
            <ul className="pt-6">
              <li
                onClick={() => {
                  setOpenProfile(!openProfile)
                  setOpenEditInfo(false);

                  setOpenOrders(false)
                }}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
              >
                <img src={homepage2} alt='imgs' style={{ width: '25px' }} />
                <span
                  className={`${!open && "hidden"
                    } origin-left duration-200`}
                >
                  Profile
                </span>
              </li>
              <li
                onClick={() => {
                  setOpenEditInfo(!openEditInfo);
                  setOpenProfile(false)
                  setOpenOrders(false)
                }}

                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
              >
                <img src={Chart_fill} alt='imgs' style={{ width: '25px' }} />
                <span
                  className={`${!open && "hidden"
                    } origin-left duration-200`}
                >
                  Edit Info
                </span>
              </li>
              <li
                onClick={() => {
                  setOpenEditInfo(false);
                  setOpenProfile(false)
                  setOpenOrders(!openOrders)
                }}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
              >
                <img src={logo} alt='imgs' style={{ width: '25px' }} />
                <span
                  className={`${!open && "hidden"
                    } origin-left duration-200`}
                >
                  My Orders
                </span>
              </li>
            </ul>
          </div>
          <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            {
              openEditInfo &&
              <EditProfile />
            }
            {
              openOrders &&
              <Orders />
            }
            {openProfile &&
              <CustomerProfile />
            }
          </div>
        </div>
      )}
    </>
  );
}
