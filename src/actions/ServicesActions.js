
import axios from "axios";
import cookies from "react-cookies";
import { fetchServices } from "../redux/counterSlicer";
import { getProfile } from "./AuthActions";
import swal from "sweetalert";


export const getServices = (dispatch) => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND}/services`,
          {})
        .then((res) => {
          dispatch(fetchServices(res.data));
          console.log("res.data", res.data);
        })
        .catch((err) => alert(err.message));
    } catch (err) {
      alert(err);
    }
  };


// create service with form data picture

/* export const createService = (dispatch, payload) => {
  payload.preventDefault();
  const { serviceDescription, price, serviceCategory, picture} = payload.target;
  const obj = {
    serviceDescription: serviceDescription.value,
    price: price.value,
    serviceCategory: serviceCategory.value,
    picture: !picture.files[0] ? null : picture.files[0],
  };
  console.log("payload", obj);
  
  const formData = new FormData();
  formData.append("serviceDescription", obj.serviceDescription);
  formData.append("price", obj.price);
  formData.append("serviceCategory", obj.serviceCategory);
  formData.append("picture", obj.picture);
  try {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND}/service`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${cookies.load("token")}`,
            "Content-Type": "multipart/form-data",
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
  }
}; */

 export const createService = (dispatch, payload) => {
  payload.preventDefault();
  const { serviceDescription, price, serviceCategory, picture} = payload.target;
  const obj = {
    serviceDescription: serviceDescription.value,
    price: price.value,
    serviceCategory: serviceCategory.value,
    /* picture: picture.files[0], */

    
 };
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
  swal({
   title: "Do you wanna edit this service?",
   icon: "warning",
   buttons: true,
   dangerMode: true,
  }).then(async (willedit) => {
   if (willedit) {
    const { serviceDescription, price, serviceCategory, picture } = payload.target;
    const obj = {
      serviceDescription: serviceDescription.value,
      price: price.value,
      serviceCategory: serviceCategory.value,
      /* picture: picture.files[0], */
    };
    console.log("payload", obj);
    await axios
     .put(`${process.env.REACT_APP_BACKEND}/service`, obj, {
      headers: {
       Authorization: `bearer ${cookies.load("token")}`,
      },
     })
     .then(() => {
      getProfile(dispatch);
      getServices(dispatch);
     });
   } else {
    swal("Your service is safe!");
   }
  });
 };


  export const deleteService = (dispatch, id) => {
    swal({
      title: "Do you wanna delete this service?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await axios
          .delete(`${process.env.REACT_APP_BACKEND}/service/${id}`, {
            headers: {
              Authorization: `bearer ${cookies.load("token")}`,
            },
          })
          .then(() => {
            getProfile(dispatch);
            getServices(dispatch);
          }
          );
      } else {
        swal("Your service is safe!");
      }
    });
  };
  


  


