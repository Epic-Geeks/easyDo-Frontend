import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLocation, editProfile } from "../actions/AuthActions";
import { selectUserInfo } from "../redux/counterSlicer";

export default function EditProfile() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

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
       <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        <h2 className="text-3xl font-bold dark:text-white">Add Address</h2>
      <form onSubmit={(e) => editProfile(e, dispatch, userInfo)}>
      <div className="mb-6">
    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
    <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>
        <div className="mb-6">
    <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street</label>
    <input type="text" id="street" name="street" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>
        
<div className="mb-6">
    <label htmlFor="buliding_num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buliding num</label>
    <input type="text" id="buliding_num" name="buliding_num" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>


<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Address</button>
      </form>
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
        </div>
    </div>

  );
}
