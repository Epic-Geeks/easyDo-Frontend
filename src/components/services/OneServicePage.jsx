import React, { useState } from "react";
import { GrChatOption } from 'react-icons/gr';
import { FaStar } from 'react-icons/fa';
import { useSelector } from "react-redux";
import {
  selectIsAuthorized,
  selectServiceById,
  selectUserInfo,
} from "../../redux/counterSlicer";
import { Link, Navigate, useParams } from "react-router-dom";
import Loading from "../pages/Loading";
import swal from "sweetalert";
import Container from "../Container";
import Slider from "./Slider";
import CreateOrder from "../user/CreateOrder";
import cookies from "react-cookies";

export default function OneServicePage() {
  const { serviceId } = useParams();
  const isAuthorized = useSelector(selectIsAuthorized);
  const [showModal, setShowModal] = React.useState(false);
  const userInfo = useSelector(selectUserInfo);
  const service = useSelector((state) =>
    selectServiceById(state, Number(serviceId))
  );
  console.log(service);
  const go = () => {
    Navigate(`/createOrder/${serviceId}`);
  };
  if (!service) {
    return <Loading />;
  }
  const stars = Array(5).fill(0);
  const goTo = () => {
    window.location.href = "/reviews"
  }




  return (
    <div className="services">
      <div className="service flex flex-col shadow-xl rounded-xl mx-20 my-10">

        <section className="text-gray-700 bg-cyan-500 border body-font rounded-xl overflow-hidden bg-white">
          <div className="container mx-auto">
            <div className="lg:w-4/5 mx-auto flex ">
              <div className="flex flex-row pt-5"> <Slider /> </div>

              <div className="flex flex-col ">
                <div className="flex flex-col justify-around sm:flex-row max-w-md mx-auto border-b-2 border-gray-200">

                  <div className="relative w-[100px] h-[100px] mt-20 mb-4 left-4">
                    <img className="w-full h-full border border-gray-300 object-center object-cover relative rounded-tr-[20px] rounded-bl-[20px]"
                      src={service.Provider.picture} alt={service.Provider.picture} />
                  </div>

                  <div className="author-details text-lg mt-20">
                    <p className="author-name mt-2 ml-10">Name: {service.Provider.name}</p>
                    <p className="author-email mt-2 ml-10">Email: {service.Provider.email}</p>
                    <p className="author-phone mt-2 ml-10">Phone: {service.Provider.phoneNumber}</p>
                  </div>
                </div>

                <div className="flex flex-col w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm my-2 text-gray-900">{
                  service.Provider.providerCoveredCities.map(city=>(
                    <>{city}<br/></>
                  ))
                  }</h2>
                  <h1 className="text-gray-900 text-3xl my-2 title-font font-medium mb-1">{service.serviceCategory}</h1>
                  <div className="flex items-center">
                    <div className="flex my-3">
                      <p className="ml-2 text-sm mr-3 text-gray-900 dark:text-white">Average Rate</p>
                      {stars.map((star, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          style={{
                            marginRight: 3,
                            cursor: "not-allowed	",
                          }}
                          color={index < service.averageRate ? "#ffc107" : "#e4e5e9"}
                          
                        />
                      ))}
                    </div>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>

                  </div>
                  <p className="leading-relaxed my-3 text-ellipsis">{service.serviceDescription}</p>
                </div>
              </div>

            </div>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

            </div>
            <div className="flex flex-row m-4 ">
              <span className="title-font font-medium text-2xl text-gray-900">${service.price}</span>

              {!isAuthorized && (
                <div className="flex ml-auto">
                  <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-2 focus:outline-none hover:bg-teal-500 rounded"
                    onClick={() => swal({
                      title: "Please Login",
                      buttons: {
                        cancel: "Ok",
                      },

                    })}
                  >Book Service</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <GrChatOption />
                  </button>
                </div>
              )}


              {isAuthorized && userInfo.role === "provider" && (
                <div className="flex ml-auto">
                  <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-2 focus:outline-none hover:bg-teal-500 rounded"
                    onClick={() =>{ swal(
                      {
                        text: "Only customers can book service",
                        buttons: {
                          cancel: "Ok",
                        },

                      })
                    }}
                  >Book Service</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <GrChatOption />
                  </button>
                </div>
              )}


              {isAuthorized && userInfo.role === "customer" && (
                <div className="flex ml-auto">
                  <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-2 focus:outline-none hover:bg-teal-500 rounded"
                    onClick={() => setShowModal(true)}
                  >Book Service</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <GrChatOption />
                  </button>
                </div>
              )}

              <CreateOrder
                showModal={showModal}
                setShowModal={setShowModal}
              />

            </div>
          </div>
        </section>


      </div>
    </div>

  )
}

  //  {/* <ul>
  //       <li>serviceCategory: {service.serviceCategory}</li>
  //       <li>serviceDescription: {service.serviceDescription}</li>
  //       <li>averageRate: {service.averageRate}</li>
  //       <li>visibility{service.visibility.toString()}</li>
  //       <li>price: {service.price}</li>
  //       <li>Provider Name: {service.Provider.name}</li>
  //     </ul> */}