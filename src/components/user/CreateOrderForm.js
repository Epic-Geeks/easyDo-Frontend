import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { createOrder } from '../../actions/OrdersActions'
import { selectIsAuthorized, selectUserInfo } from '../../redux/counterSlicer';

export default function CreateOrderForm(props) {
  let location = useLocation();
  console.log(location);
  // React.useEffect(() => {
  //   // Google Analytics
  //   ga('send', 'pageview');
  // }, [location]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);
  const userInfo = useSelector(selectUserInfo);

  return (
    <div>
      <h2>Create Order Form</h2>
      {isAuthorized && userInfo.role === "customer" && (
        <form onSubmit={(e)=>createOrder(dispatch, e, id)}>
            <label>orderNotes</label>
            <input type="text" name="orderNotes" id="orderNotes" /><br/>
            <label>orderDate</label>
            <input type="date" name="orderDate" id="orderDate" /><br/>
            {/* serviceID */}
            <button className='bg-blue-500 hover:bg-blue-700' type="submit">Create Order</button>
        </form>
      )}

      {!isAuthorized && (
        <h3>You must be logged in to create an order</h3>
      )}

      {isAuthorized && userInfo.role === "provider" && (
        <h3>Providers cannot create orders</h3>
      )}

    </div>
  )
}
