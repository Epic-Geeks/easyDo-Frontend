
import axios from "axios";
import cookies from "react-cookies";
import { fetchServices } from "../redux/counterSlicer";
import { getProfile } from "./AuthActions";

export const getServices = (dispatch) => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND}/services`,
          {})
        .then((res) => {
          dispatch(fetchServices(res.data));
        })
        .catch((err) => alert(err.message));
    } catch (err) {
      alert(err);
    }
  };




export const createService = (dispatch, payload) => {
  payload.preventDefault();
  const { serviceDescription, price, serviceCategory, picture} = payload.target;
  const obj = {
    serviceDescription: serviceDescription.value,
    price: price.value,
    serviceCategory: serviceCategory.value,
/*     picture: picture.value,
 */  };
  console.log("payload", obj);
 
  
  try {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND}/service`,
        obj,
        {
          headers: {
              Authorization: `Bearer ${cookies.load("token")}`,
            },
          }
          )
      .then((res) => {
          getProfile(dispatch); 
          getServices(dispatch);
      })
      .catch((err) => alert(err.message));
  } catch (err) {
    alert(err);
  };
};

export const editService = (dispatch, payload) => {
    payload.preventDefault();
    const { serviceDescription, price, serviceCategory, picture} = payload.target;
    const obj = {
      serviceDescription: serviceDescription.value,
      price: price.value,
      serviceCategory: serviceCategory.value,
      picture: picture.value,
    };
    console.log("payload", obj);
    try {
      axios
        .put(
          `${process.env.REACT_APP_BACKEND}/service`,
          obj,
          {
            headers: {
              Authorization: `Bearer ${cookies.load("token")}`,
            },
          }
          )
      .then((res) => {
          getProfile(dispatch); 
          getServices(dispatch);
      })
      .catch((err) => alert(err.message));
  } catch (err) {
    alert(err);
  };
};


  export const deleteService = (dispatch, payload) => {
    payload.preventDefault();
    const { serviceDescription, price, serviceCategory, picture} = payload.target;
    const obj = {
      serviceDescription: serviceDescription.value,
      price: price.value,
      serviceCategory: serviceCategory.value,
      picture: picture.value,
    };
    console.log("payload", obj);
    try {
      axios
        .delete(
          `${process.env.REACT_APP_BACKEND}/service`,
          obj,
          {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
              },
            }
            )
        .then((res) => {
            getProfile(dispatch); 
            getServices(dispatch);
        })
        .catch((err) => alert(err.message));
    }
    catch (err) {
      alert(err);
    }
  };


  


