
import axios from "axios";
import cookies from "react-cookies";
import { fetchServices } from "../redux/counterSlicer";
import { getProfile } from "./AuthActions";

export const createOrder = (dispatch, payload, id) => {
    payload.preventDefault();
    // console.log("payload", payload.target);
    const { orderNotes, orderDate, location, phone } = payload.target;
    const obj = {
        orderNotes: orderNotes.value,
        orderDate: orderDate.value,
        serviceID: id,
        location: location.value,
        customerName: cookies.load("name"),
        phoneNumber: phone.value
    };

    console.log(obj)
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
        .catch((err) => alert("Provider has a full schedule this day, please chose another one"));
    } catch (err) {
      alert(err);
    }
  };

  //@TODO
  // update order status

  export const updateOrderStatus = async(dispatch,payload, orderId)=>{
    payload.preventDefault();
    const { status } = payload.target
    console.log(status.value, orderId)
    try {
     await axios.put(`${process.env.REACT_APP_BACKEND}/orderStatus/${orderId}/${status.value}`,{},{
        headers: {
            Authorization: `Bearer ${cookies.load("token")}`,
          },
        }).then((res)=>{
          console.log(res.data)
          getProfile(dispatch)
        }).catch(err=> console.log(err))
    } catch (error) {
      
    }
  }