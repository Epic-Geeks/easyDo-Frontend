import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateOrderStatus } from "../../actions/OrdersActions";
import { selectOrders, selectUserInfo } from "../../redux/counterSlicer";
import NotFound from "../notFound/NotFound";
import Loading from "../pages/Loading";
import Rate from "./Rate";
const CustomerOrders = () => {
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const userInfo = useSelector(selectUserInfo);

  // if (!orders) {
  //   return <Loading />;
  // }

  return (
    <div className="p-3 text-2xl font-semibold flex-1 border rounded-lg shadow-md sm:p-2 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center mx-5 mt-5 justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          My Orders
        </h5>
        <p
          onClick={() => setShowAll(!showAll)}
          className="text-lg font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500"
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
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Provider Name: {order.providerName}
                      </p>
                      <p className="text-sm inline-flex mt-2 text-gray-500 truncate dark:text-gray-400">
                        <i className="fa fa-location text-sm rotate-6" />

                        <span className="text-center text-xs ml-2 text-lg text-gray-500 dark:text-gray-400">
                          {order.location}
                        </span>
                      </p>
                        </div>
                        <div className="flex flex-col px-5">
                      <p className="text-sm mt-2 text-gray-500 hover:cursor-pointer truncate dark:text-gray-400">
                        provider number
                        <br />{" "}
                        <a href={`tel:${order.providerNumber}`}>
                          <i className="fa fa-phone text-lg rotate-6" />
                          <span className="text-center text-xs  ml-2 text-lg text-gray-500 dark:text-gray-400">
                            {order.providerNumber}
                          </span>
                        </a>
                      </p>
                      </div>
                      <div className="flex flex-col px-5">
                      <p
                        title={order.orderNotes}
                        className="text-sm text-ellipsis mt-2 text-gray-500 dark:text-gray-400"
                      >
                        Your Notes: <br /> {order.orderNotes}
                      </p>
                      </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0 items-center text-sm text-gray-900 dark:text-white">
                      {order.status === "done" ? (
                        <>
                          <span className="text-sm float-right bg-cyan-700 text-center text-white rounded-lg p-2">
                            Rate your provider
                          </span>
                          <p className="float-right">
                          <Rate orderId={order.id} />
                          </p>
                        </>
                      ) : (
                        
                          <>
                          <span className="text-sm float-right cursor-not-allowed bg-cyan-700 text-center text-white rounded-lg p-2">
                            Rate your provider
                          </span>
                          <p className="float-right text-sm">
                          Still {order.status}
                          </p>
                        </>
                        
                      )}
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
                      <div className="flex sm:flex-col md:flex-col lg:flex-row ">
                        <div className="flex flex-col px-5 pt-2">
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Provider Name: {order.providerName}
                      </p>
                      <p className="text-sm inline-flex mt-2 text-gray-500 truncate dark:text-gray-400">
                        <i className="fa fa-location text-sm rotate-6" />

                        <span className="text-center text-xs ml-2 text-lg text-gray-500 dark:text-gray-400">
                          {order.location}
                        </span>
                      </p>
                        </div>
                        <div className="flex flex-col px-5">
                      <p className="text-sm mt-2 text-gray-500 hover:cursor-pointer truncate dark:text-gray-400">
                        provider number
                        <br />{" "}
                        <a href={`tel:${order.providerNumber}`}>
                          <i className="fa fa-phone text-lg rotate-6" />
                          <span className="text-center text-xs  ml-2 text-lg text-gray-500 dark:text-gray-400">
                            {order.providerNumber}
                          </span>
                        </a>
                      </p>
                      </div>
                      <div className="flex flex-col px-5">
                      <p
                        title={order.orderNotes}
                        className="text-sm text-ellipsis mt-2 text-gray-500 dark:text-gray-400"
                      >
                        Your Notes: <br /> {order.orderNotes}
                      </p>
                      </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-w-0 items-center text-sm text-gray-900 dark:text-white">
                      {order.status === "done" ? (
                        <>
                          <span className="text-sm float-right bg-cyan-700 text-center text-white rounded-lg p-2">
                            Rate your provider
                          </span>
                          <p className="float-right">
                          <Rate orderId={order.id} />
                          </p>
                        </>
                      ) : (
                        <button
                          type="submit"
                          className="w-full float-right cursor-not-allowed lg:w-56 lg:justify-end bg-gray-700  py-3 text-center text-white rounded-lg p-2 border"
                          title="Rate Service"
                        >
                          Rate Service
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ) : (
                ""
              )
            )}
        </ul>
        {orders && orders.length === 0 && (
          <NotFound
            message={{
              body: "You don't have any orders yet, book your service now!",
              title: "Pick your needs!",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerOrders;
