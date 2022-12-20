import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLocation, editProfile } from "../actions/AuthActions";
import { selectUserInfo } from "../redux/counterSlicer";
import cookies from "react-cookies";
import Container from "./Container";
import { FiArrowRight } from "react-icons/fi";
import swal from "sweetalert";

export default function EditProfile() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  const [openName, setOpenName] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  const handleRemoveLoc = (idx) => {
    // userInfo.customerAddress.splice(idx, 1); // faster way to remove an item from an array
    const newLocations = userInfo.customerAddress.filter(
      (location, index) => index !== idx
    );

    const newUserInfo = { ...userInfo, customerAddress: newLocations };
    deleteLocation(dispatch, newUserInfo);
  };
  console.log((userInfo.customerAddress))
  return (
    <div>
      {/* <Container> */}
      <div className="pl-10 pr-20 pb-20 mt-6 sm:pl-5">
        <h1 className="text-2xl pt-6 pb-6">Edit Profile</h1>
        <hr></hr>

        <div>
          <form
            onClick={() => setOpenName(!openName)}
            className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
          >
            <label className="pr-5">Name </label>
            <FiArrowRight
              className={`inline-block text-Myrtle-Green ${openName && "rotate-90"
                }`}
            />
          </form>

          <form
            className={`${!openName && "hidden"
              } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
            onSubmit={(e) => editProfile(e, dispatch, userInfo)}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-Polished-Pine focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  defaultValue={cookies.load("name")}
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-Polished-Pine peer-focus:dark:text-Polished-Pine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
                <div className="flex justify-end">
                  <button
                    className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-2 rounded mt-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-Polished-Pine focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  defaultValue={cookies.load("username")}
                />
                <label
                  htmlFor="username"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-Polished-Pine peer-focus:dark:text-Polished-Pine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username
                </label>
                <div className="flex justify-end">
                  <button
                    className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-2 rounded mt-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr></hr>

        <form
          onClick={() => setOpenEmail(!openEmail)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label className="pr-5">Email</label>
          <FiArrowRight
            className={`inline-block text-Myrtle-Green ${openEmail && "rotate-90"
              }`}
          />
        </form>

        <form
          className={`${!openEmail && "hidden"
            } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-Polished-Pine focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={cookies.load("email")}
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-Polished-Pine peer-focus:dark:text-Polished-Pine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            <div className="flex justify-end">
                  <button
                    className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-2 rounded mt-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
          </div>
          {/* </div> */}
        </form>
        <hr></hr>

        <form
          onClick={() => setOpenPassword(!openPassword)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label className="pr-5">Password</label>
          <FiArrowRight
            className={`inline-block text-Myrtle-Green ${openPassword && "rotate-90"
              }`}
          />
        </form>

        <form
          className={`${!openPassword && "hidden"
            } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              autoComplete="true"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-Polished-Pine focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-Polished-Pine peer-focus:dark:text-Polished-Pine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            <div className="flex justify-end">
                  <button
                    className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-2 rounded mt-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
          </div>
        </form>
        <hr></hr>

        <form
          onClick={() => setOpenPhone(!openPhone)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label className="pr-5">Phone</label>
          <FiArrowRight
            className={`inline-block text-Myrtle-Green ${openPhone && "rotate-90"
              }`}
          />
        </form>

        <form
          className={`${!openPhone && "hidden"
            } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-Polished-Pine focus:outline-none focus:ring-0 focus:border-blue-600 peer"

            />
            <label
              htmlFor="phoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-Polished-Pine peer-focus:dark:text-Polished-Pine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone
            </label>
            <div className="flex justify-end">
                  <button
                    className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-2 rounded mt-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
          </div>
        </form>
        <hr></hr>

        <form
          onClick={() => setOpenCity(!openCity)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label className="pr-5">City</label>
          <FiArrowRight
            className={`inline-block text-Myrtle-Green ${openCity && "rotate-90"
              }`}
          />
        </form>

        <form
          className={`${!openCity && "hidden"
            } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="city"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-Polished-Pine focus:outline-none focus:ring-0 focus:border-blue-600 peer"

            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-Polished-Pine peer-focus:dark:text-Polished-Pine peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
            <div className="flex justify-end">
                  <button
                    className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-2 rounded mt-2"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
          </div>
        </form>
        <hr></hr>
      </div>

    </div>
  )
}

