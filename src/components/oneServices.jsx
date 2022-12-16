import React from 'react'
import { GrChatOption } from 'react-icons/gr'
// import { useSelector } from 'react-redux';
// import { selectOrders } from '../redux/counterSlicer';
// import { selectMyServices } from '../redux/counterSlicer';

export default function OneServices() {
    // const orders = useSelector(selectOrders);
    // const services = useSelector(selectMyServices);

    let theServices = [
        {
            "serviceCategory": "string",
            "averageRate": 4.5,
            "price": 100,
            "name": "amani smadi",
            "email": "amani@amani.com",
            "phone": "0799999999",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Val_de_Funes_cun_la_Odles_d%27auton_S%C3%BCdtirol.jpg/1200px-Val_de_Funes_cun_la_Odles_d%27auton_S%C3%BCdtirol.jpg",
            "providerCoveredCities": "Amman",
            "description": "we build houses and we have a good experience in this field",
            "pic": "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
        },
    ]

    return (
        <div className="services">

            {theServices && theServices.map((services, index) => (
                <div className="service flex flex-col shadow-xl rounded-xl  mx-20 my-10" key={index}>

                    <div className="flex flex-col justify-around sm:flex-row max-w-md mx-auto border-b-2 border-gray-200">
                        <div className="relative w-[200px] h-[200px] mt-20 mb-4 " >
                            <div className="w-full h-full  bg-teal-800 absolute -top-8 -left-4">
                                <span
                                    className="absolute text-white bottom-4 left-2 leading-none rotate-180 [writing-mode:vertical-lr]  text-black inline-blocks uppercase tracking-widest">PROVIDER</span>
                            </div>
                            <div className="relative left-4">
                                <img className="w-full h-full object-center object-cover relative rounded-tr-[40px] rounded-bl-[40px]"
                                    src={services.pic} alt="profile pic" />
                            </div>

                        </div>

                        <div className="author-details text-lg mt-20">
                            <p className="author-name mt-2 ml-10"> {services.name}</p>
                            <p className="author-email mt-2 ml-10"> {services.email}</p>
                            <p className="author-phone mt-2 ml-10"> {services.phone}</p>
                            <p className="author-city mt-2 ml-10"> {services.providerCoveredCities}</p>
                        </div>
                    </div>


                    <div className="service-details">
                        <section className="text-gray-700 body-font overflow-hidden bg-white">
                            <div className="container px-5 py-10 mx-auto">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                                    <img alt="ecommerce" className="md:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={services.picture} />
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{services.providerCoveredCities}</h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{services.serviceCategory}</h1>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <p className="ml-2 text-sm text-gray-900 dark:text-white">{services.averageRate}</p>
                                        </div>
                                        <p className="leading-relaxed">{services.description}</p>
                                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                        </div>
                                        <div className="flex">
                                            <span className="title-font font-medium text-2xl text-gray-900">${services.price}</span>
                                            <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-2 focus:outline-none hover:bg-teal-500 rounded">Service reservation</button>
                                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                <GrChatOption />
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            ))}
        </div>

    )
}




