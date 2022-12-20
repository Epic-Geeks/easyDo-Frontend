import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderStatus } from "../../actions/OrdersActions";
import { selectOrders, selectUserInfo } from "../../redux/counterSlicer";
import NotFound from "../notFound/NotFound";
import Loading from "../pages/Loading";

const ProviderOrders = () => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
 
  const userInfo = useSelector(selectUserInfo);

  if (!orders) {
    return <Loading />;
  }

  return (
    <div className="p-3 mx-5 text-2xl font-semibold flex-1 border rounded-lg shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex px-5 mt-5 items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {userInfo.role === "customer" ? "My Orders" : "Latest Customers"}
        </h5>
        <p
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
        >
          {!showAll ? <>View all</> : <>View Less</>}
        </p>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-800 dark:divide-gray-700">
          {orders &&
            orders.map((order, idx) =>
              idx <= 2 ? (
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
                      <div className="flex sm:flex-col md:flex-col lg:flex-row ">
                      <div className="flex flex-col px-5 pt-2">
                      <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                        Customer Name: {order.customerName}
                      </p>
                      <p className="text-sm inline-flex mt-2 text-gray-500 truncate dark:text-gray-400">
                        <i className="fa fa-location text-xs rotate-6" />

                        <span className="text-center ml-2 text-xs text-gray-500 dark:text-gray-400">
                          {order.location}
                        </span>
                      </p>
                      </div>
                      <div className="flex flex-col px-5">
                      <p title="customer number"className="text-sm mt-2 text-gray-500 hover:cursor-pointer truncate dark:text-gray-400">
                      customer number<br/><a href={`tel:${order.customerNumber}`}>
                          <i className="fa fa-phone text-xs rotate-6" />
                          <span className="text-center text-xs ml-2 text-xstext-gray-500 dark:text-gray-400">
                            {order.customerNumber}
                          </span>
                        </a>
                      </p>
                      </div>
                      <div className="flex flex-col px-5">
                      <p
                        title={order.orderNotes}
                        className="text-xs text-ellipsis mt-2 text-gray-500 dark:text-gray-400"
                      >
                        Notes: <br /> {order.orderNotes}
                      </p>
                      </div>
                      </div>
                    </div>
                    <div className="flex flaot-right min-w-0 items-center text-sm text-gray-900 dark:text-white">
                      <form
                        className=""
                        onSubmit={(e) =>
                          updateOrderStatus(dispatch, e, order.id)
                        }
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
                          <option value="done">Done</option>
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
              ) : showAll === true ? (
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
                        <a href={`tel:${order.customerNumber}`}>
                          <i className="fa fa-phone text-lg rotate-6" />
                          <span className="text-center ml-2 text-lg text-gray-500 dark:text-gray-400">
                            {order.customerNumber}fsadsa
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
                        onSubmit={(e) =>
                          updateOrderStatus(dispatch, e, order.id)
                        }
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
              ) : (
                ""
              )
            )}
        </ul>
        {
           orders.length === 0 && 
           
           <NotFound message={{
            body: "You don't have any orders yet, Be patient you will be Elon Musk soon!",
            title: "No Orders!" 
        }}/>
           
        }
      </div>
    </div>
  );
};

export default ProviderOrders;
