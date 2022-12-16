import React from 'react'
// import { useSelector } from 'react-redux';
// import { selectOrders } from '../../redux/counterSlicer';
// import { selectMyServices } from '../../redux/counterSlicer';

export default function Orders() {
    // const orders = useSelector(selectOrders);
    // const services = useSelector(selectMyServices);
    let myOrders = [
        {
            orders:
            {
                "orderNotes": "I want to order this service, it's very important for me to have it done",
                "orderDate": "2022-12-15",
                "providerCoveredCities": "Amman",
            },

            services:
            {
                "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Val_de_Funes_cun_la_Odles_d%27auton_S%C3%BCdtirol.jpg/1200px-Val_de_Funes_cun_la_Odles_d%27auton_S%C3%BCdtirol.jpg",
                "serviceCategory": "string",
                "averageRate": 4.5,
                "price": 100,
            },

            provider:
            {
                "name": "amani smadi",
                "phone": "0799999999",
                "picture": "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
            }

        }
    ]


    return (
        <div className="service-details">
            {myOrders && myOrders.map((services, index) => (
                
                    <div key={index} className="container px-5 py-10 mx-auto shadow-xl rounded-xl border border-Slate-50 mr-20">
                        <div className="lg:w-5/5  mx-4 flex flex-wrap ">
                            <img alt="servicePic" className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={services.services.picture} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                                <div className="author flex mx-2 my-5">
                                    <img src={services.provider.picture}
                                        alt="pic" className="profile mr-4 mt-1 w-10 h-10 rounded-full" ></img>
                                    <div className="author-details text-xs font-sans">
                                        <p className="author-name"> {services.provider.name} </p>
                                        <p className="author-phone">{services.provider.phone} </p>
                                        <p className="author-category">{services.services.serviceCategory} </p>
                                    </div>
                                </div>

                                <h2 className="text-sm title-font font-sans text-gray-500 tracking-widest">{services.orders.orderDate}</h2>
                                <h1 className="text-gray-900 text-3xl font-sans title-font font-medium mb-1">{services.orders.providerCoveredCities}</h1>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <p className="ml-2 text-sm text-gray-900 dark:text-white">{services.services.averageRate}</p>
                                </div>
                                <p className="leading-relaxed font-sans">{services.orders.orderNotes}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl font-sans text-gray-900">${services.services.price}</span>
                                    <button className="flex ml-auto font-sans text-base text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded">Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>
               
            ))}

        </div>
    )
}
