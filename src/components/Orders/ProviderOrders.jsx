import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../../actions/OrdersActions";
import { selectOrders } from "../../redux/counterSlicer";
import Loading from "../pages/Loading";

const ProviderOrders = () => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  console.log(orders);

  if (!orders) {
    return <Loading />;
  }

  return (
    <div className="p-3 text-2xl font-semibold flex-1 border rounded-lg shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h5>
        <a
          href="#1"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-800 dark:divide-gray-700">
          {orders &&
            orders.map((order, idx) => (
              <li className="py-3 sm:py-4" key={idx}>
                <div className="flex items-center space-x-4">
                  <div className="flex-1 ml-5 min-w-0">
                    <p
                      className={`mb-3 font-base text-sm text-gray-700 dark:text-gray-400`}
                    >
                      Status:
                      <b
                        className={`rounded-lg p-1 ml-1 ${
                          order.status === "pending"
                            ? "bg-[#ea580c] text-white border"
                            : order.status === "inProgress"
                            ? "bg-[#22d3ee] text-white border"
                            : order.status === "approved"
                            ? "bg-[#65a30d] text-white border"
                            : order.status === "done"
                            ? "bg-[#22c55e] text-white border line-through"
                            : ""
                        }`}
                      >
                        {order.status}
                      </b>
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Customer Name: {order.customerName}
                    </p>
                    <p className="text-sm inline-flex mt-2 text-gray-500 truncate dark:text-gray-400">
                      <i className="fa fa-location text-lg rotate-6" />

                      <span className="text-center ml-2 text-lg text-gray-500 dark:text-gray-400">
                        {order.location}
                      </span>
                    </p>
                    <p className="text-sm mt-2 text-gray-500 hover:cursor-pointer truncate dark:text-gray-400">
                      <a href={`tel:${order.phoneNumber}`}>
                        <i className="fa fa-phone text-lg rotate-6" />
                        <span className="text-center ml-2 text-lg text-gray-500 dark:text-gray-400">
                          {order.phoneNumber}
                        </span>
                      </a>
                    </p>
                    <p
                      title={order.orderNotes}
                      className="text-xs text-ellipsis mt-2 text-gray-500 dark:text-gray-400"
                    >
                      Notes: <br /> {order.orderNotes}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0 items-center text-sm text-gray-900 dark:text-white">
                    <form
                      className=""
                      onSubmit={(e) => updateOrderStatus(dispatch, e, order.id)}
                    >
                      <select
                        id="status"
                        name="status"
                        className="bg-gray-50 mb-2 lg:w-56 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option className=" text-center" value={"pending"}>
                          Pending-default
                        </option>
                        <option value="inProgress">In Progress</option>
                        <option value="approved">Approved</option>
                        <option value="done">done</option>
                        <option value="cancele">Cancel</option>
                      </select>
                      <button
                        type="submit"
                        className="w-full lg:w-56 lg:justify-end bg-cyan-700 py-3 text-center text-white rounded-lg p-2 border"
                        title="Update Status"
                      >
                        Update Status
                      </button>
                    </form>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProviderOrders;
