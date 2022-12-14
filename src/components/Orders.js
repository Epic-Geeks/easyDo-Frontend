import React from 'react'
import { useSelector } from 'react-redux';
import { selectOrders } from '../redux/counterSlicer';

export default function Orders() {
    const orders = useSelector(selectOrders);
  return (
    <div>

        
<h3 className=" text-center text-3xl font-bold dark:text-white">Orders</h3>
      <ul>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-5">
       
            {orders && orders.map((order, index) => (
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" key={index}>{order.orderNotes}</p>
            ))}

         </div>
      </ul>

        
    </div>
  )
}
