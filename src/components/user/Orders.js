import React from 'react'
import { useSelector } from 'react-redux';
import { selectOrders, selectCustomerOrders, selectUserInfo } from '../../redux/counterSlicer';
// import { selectMyServices } from '../../redux/counterSlicer';
import cookies from "react-cookies";
export default function Orders() {
    const orders = useSelector(selectOrders);
    const userInfo = useSelector(selectUserInfo);
    console.log(orders)
    // const services = useSelector(selectMyServices);


    return (
        <div className="service-details">
            {orders && orders.map((order, index) => (
                
                    <div key={index} className="container px-5 py-10 mx-auto shadow-xl rounded-xl border border-Slate-50 mr-20">
                        <div className="lg:w-5/5  mx-4 flex flex-wrap ">
                            {/* <img alt="servicePic" className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={services.services.picture} /> */}
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                                <div className="author flex mx-2 my-5">
                                    {/* <img src={order.provider.picture}
                                        alt="pic" className="profile mr-4 mt-1 w-10 h-10 rounded-full" ></img> */}
                                    <div className="author-details text-xs font-sans">
                                        { userInfo.role === "provider" &&
                                            <>
                                            <p className="author-name"> {order.customerName} </p>
                                           <p className="author-phone">{order.phoneNumber} </p>
                                            </>

                                        }
                                        {/* <p className="author-category">{services.services.serviceCategory} </p>  */}
                                    </div>
                                </div>

                                <h2 className="text-sm title-font font-sans text-gray-500 tracking-widest">{order.orderDate}</h2>
                                {/* <h1 className="text-gray-900 text-3xl font-sans title-font font-medium mb-1">{services.orders.providerCoveredCities}</h1> */}
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <p className="ml-2 text-sm text-gray-900 dark:text-white">{order.averageRate}</p>
                                </div>
                                <p className="leading-relaxed font-sans">{order.orderNotes}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                              <span className="title-font font-medium text-2xl font-sans text-gray-900"></span>
                                </div>
                                <div className="flex">
                                    <button className="flex ml-auto font-sans text-base text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded">Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>
               
            ))}

        </div>
        )
    }