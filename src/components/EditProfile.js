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
      <h2>Add Address</h2>
      <form onSubmit={(e) => editProfile(e, dispatch, userInfo)}>
        <label>City</label>
        <input type="text" name="city" id="city" />
        <label>Street</label>
        <input type="text" name="street" id="street" />
        {/* <label>password</label>
            <input type="text" name="password" id="password" /> */}
        <label>building num</label>
        <input type="text" name="buildingNum" id="buildingNum" />
        <button type="submit">Add Address</button>
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
  );
}
