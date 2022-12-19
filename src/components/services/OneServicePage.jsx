import React from "react";
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
      <div className="service flex flex-col shadow-xl rounded-xl  mx-20 my-10">

        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container mx-auto">
            <div className="lg:w-4/5 mx-auto flex ">
              <div className="flex flex-row h-[500px]"> <Slider /> </div>

              <div className="flex flex-col ">
                <div className="flex flex-col justify-around sm:flex-row max-w-md mx-auto border-b-2 border-gray-200">

                  <div className="relative w-[100px] h-[100px] mt-20 mb-4 left-4">
                    <img className="w-full h-full border border-gray-300 object-center object-cover relative rounded-tr-[20px] rounded-bl-[20px]"
                      src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="profile pic" />
                  </div>

                  <div className="author-details text-lg mt-20">
                    <p className="author-name mt-2 ml-10"> {service.Provider.name}</p>
                    <p className="author-email mt-2 ml-10"> {service.Provider.email}</p>
                    <p className="author-phone mt-2 ml-10"> {service.Provider.phone}</p>
                  </div>
                </div>

                <div className="flex flex-col w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font my-2 text-gray-500 tracking-widest">{service.providerCoveredCities}</h2>
                  <h1 className="text-gray-900 text-3xl my-2 title-font font-medium mb-1">{service.serviceCategory}</h1>
                  <div className="flex items-center">
                    <div className="flex my-3">
                      {stars.map((star, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          style={{
                            marginRight: 3,
                            cursor: "pointer",
                          }}
                          color={index < service.averageRate ? "#ffc107" : "#e4e5e9"}
                          onClick={() => goTo()}
                        />
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-900 dark:text-white">{service.averageRate}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="/reviews" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">Reviews</a>

                  </div>
                  <p className="leading-relaxed my-3">{service.serviceDescription}</p>
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
                  >Service reservation</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <GrChatOption />
                  </button>
                </div>
              )}


              {isAuthorized && userInfo.role === "provider" && (
                <div className="flex ml-auto">
                  <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-2 focus:outline-none hover:bg-teal-500 rounded"
                    onClick={() => swal(
                      {
                        text: "Only customers can book service",
                        buttons: {
                          cancel: "Ok",
                        },

                      })}
                  >Service reservation</button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <GrChatOption />
                  </button>
                </div>
              )}


              {isAuthorized && userInfo.role === "customer" && (
                <div className="flex ml-auto">
                  <button className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-2 focus:outline-none hover:bg-teal-500 rounded"
                    onClick={() => setShowModal(true)}
                  >Service reservation</button>
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