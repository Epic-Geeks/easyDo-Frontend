
import axios from "axios";
import cookies from "react-cookies";
import { fetchServices } from "../redux/counterSlicer";
import { getProfile } from "./AuthActions";

export const createOrder = (dispatch, payload, id) => {
    payload.preventDefault();
    // console.log("payload", payload.target);
    const { orderNotes, orderDate } = payload.target;
    const obj = {
        orderNotes: orderNotes.value,
        orderDate: orderDate.value,
        serviceID: id,
    };
    // console.log("payload", id, orderNotes.value, orderDate.value);
    try {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND}/order`,
          obj,
          {
            headers: {
                Authorization: `Bearer ${cookies.load("token")}`,
              },
            }
            )
        .then((res) => {
        console.log(res.data)
            getProfile(dispatch); 
        })
        .catch((err) => alert(err.message));
    } catch (err) {
      alert(err);
    }
  };

  //@TODO
  // get orders