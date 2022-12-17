import React, { useEffect, useState } from "react";
import { createOrder } from "../../actions/OrdersActions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthorized, selectUserInfo } from "../../redux/counterSlicer";
import { useParams } from "react-router-dom";
import axios from "axios";

const CreateOrder = ({ setShowModal, showModal }) => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);
  const userInfo = useSelector(selectUserInfo);
  const { serviceId } = useParams();
  const [currentLocation, setCurrentLocation] = useState("");
  const disableOldDate = () => {
    let today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate() + 1;
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.orderNotes.value === "  ") {
      alert("your notes can't be empty");
    } else {
      createOrder(dispatch, e, serviceId);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrentLocation(location.data.city);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    Book a service
                  </h3>
                  <button onClick={() => setShowModal(false)}>
                    <svg
                      className="h-8 w-8 text-gray-800 font-semibold"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-col">
                  <form onSubmit={handleSubmit} className="p-3">
                    <label
                      htmlFor="orderNotes"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Pick your first note...
                    </label>
                    <textarea
                      type="text"
                      name="orderNotes"
                      id="orderNotes"
                      required
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your notes..."
                    ></textarea>

                    <div className="mt-6">
                      <label
                        htmlFor="location"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Add Your Location
                      </label>
                      <select
                        id="location"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value={currentLocation}>
                          Current Location
                        </option>
                        <option value="Amman">Amman</option>
                        <option value="Irbid">Irbid</option>
                        <option value="Al-Mafraq">Mafraq</option>
                        <option value="Al-Karak">Al Karak</option>
                        <option value="Al-Karak">Al Karak</option>
                        <option value="Aqaba">Aqaba</option>
                        <option value="Ajloun">Ajloun</option>
                        <option value="Ma'an">Ma'an</option>
                        <option value="Jaresh">Jaresh</option>
                        <option value="Madaba">Madaba</option>
                        <option value="At-Tafilah">At-Tafilah</option>
                        <option value="As-Salt">As-Salt</option>
                        <option value="Al-Zarqa">Al-Zarqa</option>
                      </select>
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-4522-678"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                    <div className="mt-6">
                      <label
                        htmlFor="orderDate"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Pick Your Avaliabile Date
                      </label>

                      <input
                        required
                        min={disableOldDate()}
                        className="block object-center border-none mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        type="date"
                        name="orderDate"
                        id="orderDate"
                      />
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        // className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        // type="button"
                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        // onClick={() =>{ setTimeout(()=>{setShowModal(false)},2000)}}
                      >
                        Create Order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CreateOrder;
