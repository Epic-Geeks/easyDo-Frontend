import React, { useState } from "react";
import { Link } from "react-router-dom";
import { selectIsAuthorized } from "../../redux/counterSlicer";
import MyServices from "./MyServices";
import cookies from "react-cookies";
import ProviderProfile from "./ProviderProfile";
import EditProfile from "../EditProfile";
import Orders from "../user/Orders";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../../actions/AuthActions";
import { providerLogo, control } from "../../assets/images/dashboard";
import CreateServiceForm from "./CreateService";
import ProviderOrders from "../Orders/ProviderOrders";
import Container from "../Container";

export default function ProviderDashboard() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);
  const [open, setOpen] = useState(true);
  const [openProfile, setOpenProfile] = useState(true);
  const [openEditInfo, setOpenEditInfo] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openCreateService, setCreateSrvice] = useState(false);
  return (
    <div className="">
      {isAuthorized && (
        <div className="flex mt-8 mb-auto">
          <div
            className={`${
              open ? "w-72 " : "w-20 h-100%"
            } duration-300 h-100% p-5 pt-8 bg-gray-800 relative `}
          >
            <div className="sticky top-5">
              <img
                src={control}
                alt="control img"
                className={`absolute cursor-pointer rounded-full -right-7 top-9 w-7 border-2 border-dark-purple ${
                  !open && "rotate-180"
                }`}
                onClick={() => setOpen(!open)}
              />
              <div className="flex gap-x-4 items-center">
                <img
                  src={providerLogo}
                  alt="logo img"
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
                  {cookies.load("name")}
                </h1>
              </div>
              <ul className="pt-6">
                <li
                  onClick={() => {
                    setOpenProfile(!openProfile);
                    setOpenEditInfo(false);
                    setOpenServices(false);
                    setOpenOrders(false);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
                >
                  <svg
                    className="h-8 w-7 text-white-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Profile
                  </span>
                </li>
                <li
                  onClick={() => {
                    setOpenEditInfo(!openEditInfo);
                    setOpenProfile(false);
                    setOpenOrders(false);
                    setOpenServices(false);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
                >
                  <svg
                    className="h-8 w-7 text-white-300"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Edit Info
                  </span>
                </li>
                <li
                  onClick={() => {
                    setOpenEditInfo(false);
                    setOpenProfile(false);
                    setOpenOrders(false);
                    setOpenServices(false);
                    setCreateSrvice(!openCreateService);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
                >
                  <svg
                    className="h-8 w-7 text-white-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />{" "}
                    <polyline points="14 2 14 8 20 8" />{" "}
                    <line x1="16" y1="13" x2="8" y2="13" />{" "}
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Create Service
                  </span>
                </li>
                <li
                  onClick={() => {
                    setOpenEditInfo(false);
                    setOpenProfile(false);
                    setOpenOrders(false);
                    setOpenServices(!openServices);
                    setCreateSrvice(false);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
                >
                  <svg
                    className="h-8 w-7 text-white-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />{" "}
                    <polyline points="4 12 12 16 20 12" />{" "}
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    My services
                  </span>
                </li>
                <li
                  onClick={() => {
                    setOpenEditInfo(false);
                    setOpenProfile(false);
                    setOpenOrders(!openOrders);
                    setOpenServices(false);
                    setCreateSrvice(false);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
                >
                  <svg
                    className="h-8 w-7 text-white-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />{" "}
                    <polyline points="14 2 14 8 20 8" />{" "}
                    <line x1="16" y1="13" x2="8" y2="13" />{" "}
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    My Orders
                  </span>
                </li>
                <li
                  onClick={() => {
                    setOpenEditInfo(false);
                    setOpenProfile(false);
                    setOpenOrders(false);
                    dispatch(logoutHandler);
                  }}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md 
                       `}
                >
                  <svg
                    className="h-8 w-7 text-white-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                    <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                  </svg>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Log out
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <Container>
            <div className="p-2 text-2xl font-semibold flex-1">
              {openEditInfo && <EditProfile />}
              {openOrders && <ProviderOrders />}
              {openProfile && <ProviderProfile />}
              {openServices && <MyServices />}
              {openCreateService && <CreateServiceForm />}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
