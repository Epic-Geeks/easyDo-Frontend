import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLocation, editProfile } from "../actions/AuthActions";
import { selectUserInfo } from "../redux/counterSlicer";
import cookies from "react-cookies";

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

  return (
    <div>
      <div className="pl-20 pr-20 pb-20">
        <h1 className="text-2xl pt-6 pb-6">Edit Profile</h1>
        <hr></hr>

        <div>
          <form
            onClick={() => setOpenName(!openName)}
            className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
          >
            <label>Name</label>
          </form>

          <form
            className={`${
              !openName && "hidden"
            } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
            onSubmit={(e) => editProfile(e, dispatch, userInfo)}
          >
            <label className="pl-2 pr-2">First Name</label>
            <input
              className="border border-dark-purple rounded"
              type="text"
              name="firstName"
              id="firstName"
              defaultValue={cookies.load("name")}
            />
            <label className="pl-12 pr-2">Last Name</label>
            <input
              className="border border-dark-purple rounded"
              type="text"
              name="lastName"
              id="lastName"
              // defaultValue={cookies.load("lastName")}
            />
          </form>
        </div>
        <hr></hr>

        <form
          onClick={() => setOpenEmail(!openEmail)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label>Email</label>
        </form>

        <form
          className={`${
            !openEmail && "hidden"
          } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <label className="pl-2 pr-2">Email</label>
          <input
            className="border border-dark-purple rounded"
            type="text"
            name="email"
            id="email"
            defaultValue={cookies.load("email")}
          />
        </form>
        <hr></hr>

        <form
          onClick={() => setOpenPassword(!openPassword)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label>Password</label>
        </form>

        <form
          className={`${
            !openPassword && "hidden"
          } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <label className="pl-2 pr-2">password</label>
          <input
            className="border border-dark-purple rounded"
            type="text"
            name="password"
            id="password"
          />
        </form>
        <hr></hr>

        <form
          onClick={() => setOpenPhone(!openPhone)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label>Phone</label>
        </form>

        <form
          className={`${
            !openPhone && "hidden"
          } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <label className="pl-2 pr-2">Phone</label>
          <input
            className="border border-dark-purple rounded"
            type="text"
            name="phone"
            id="phone"
          />
        </form>
        <hr></hr>

        <form
          onClick={() => setOpenCity(!openCity)}
          className="px-5 py-2 hover:bg-Anti-Flash-White rounded cursor-pointer"
        >
          <label>City</label>
        </form>

        <form
          className={`${
            !openCity && "hidden"
          } px-8 py-8 bg-Anti-Flash-White rounded mb-2`}
          onSubmit={(e) => editProfile(e, dispatch, userInfo)}
        >
          <label className="pl-2 pr-2">City</label>
          <input
            className="border border-dark-purple rounded"
            type="text"
            name="city"
            id="city"
          />
          <label className="pl-12 pr-2">Street</label>
          <input
            className="border border-dark-purple rounded"
            type="text"
            name="street"
            id="street"
          />
          <label className="pl-12 pr-2">building num</label>
          <input
            className="border border-dark-purple rounded"
            type="text"
            name="buildingNum"
            id="buildingNum"
          />
        </form>
        <hr></hr>

        <div className="flex justify-end">
          <button
            className="bg-Polished-Pine hover:bg-Myrtle-Green text-white font-bold py-2 px-8 rounded mt-8 "
            type="submit"
          >
            Save
          </button>
        </div>
      </div>

      {/* <h2>Add Address</h2>
      <form
        className="space-y-6"
        onSubmit={(e) => editProfile(e, dispatch, userInfo)}
      >
        <label>City</label>
        <input type="text" name="city" id="city" />
        <label>Street</label>
        <input type="text" name="street" id="street" />
        <label>building num</label>
        <input type="text" name="buildingNum" id="buildingNum" />
        <button type="submit">Add Address</button>
      </form> */}
      {userInfo &&
        userInfo.customerAddress &&
        userInfo.customerAddress.map((item, idx) => {
          let parsedData = JSON.parse(item);
          return (
            <div key={idx}>
              <a>{parsedData.city}</a>
              <a>{parsedData.street}</a>
              <a>{parsedData.buildingNum}</a>
              <button onClick={() => handleRemoveLoc(idx)}>delete</button>
            </div>
          );
        })}
    </div>
  );
}
