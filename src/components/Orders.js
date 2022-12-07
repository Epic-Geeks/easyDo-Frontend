import React from 'react'
import { useSelector } from 'react-redux';
import { selectOrders } from '../redux/counterSlicer';

export default function Orders() {
    const orders = useSelector(selectOrders);
  return (
    <div>
        <h2>Orders</h2>
        <ul>
            {orders && orders.map((order, index) => (
                <li key={index}>{order.orderNotes}</li>
            ))}
        </ul>
    </div>
  )
}
