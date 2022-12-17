import React from "react";
import { useSelector } from "react-redux";
import {
  selectIsAuthorized,
  selectServiceById,
} from "../../redux/counterSlicer";
import { Link, Navigate, useParams } from "react-router-dom";
import Loading from "../pages/Loading";
import Container from "../Container";
import Slider from "./Slider";

const OneServicePage = () => {
  const { serviceId } = useParams();
  const isAuthorized = useSelector(selectIsAuthorized);
  const service = useSelector((state) =>
    selectServiceById(state, Number(serviceId))
  );
  const go = ()=>{
    Navigate(`/createOrder/${serviceId}`)
  }
  if (!service) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen min-w-screen py-4 justify-center flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden shadow-2xl">
          <div className="border">
            {/* <img
            className="lg:h-72 md:h-48 h-screen w-screen object-cover object-center"
            src={service.picture || "https://images.pexels.com/photos/14529648/pexels-photo-14529648.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
            alt="blog"
          /> */}
            <Slider />
            <div className="p-6 text-gray-900 bg-gray-200 transition duration-300 justify-center flex items-center flex-col ">
              <h2 className="text-base font-medium text-gray-800 mb-1 text-xs text-[14px] ml-auto">
                {service.serviceCategory}
              </h2>
              <p className="text-base font-medium text-gray-800 mb-1 text-xs text-[14px] ml-auto">
                {service.Provider.name}{" "}
                <a href="tel:0786629845">
                  <i className="fa fa-phone" />
                </a>
              </p>
              <p className="text-base font-medium text-gray-800 mb-1 text-xs text-[14px] ml-auto">
                {service.Provider.email}{" "}
                <a href={`mailto: ${service.Provider.email}`}>
                  <i className="fa fa-envelope" />
                </a>
              </p>
              <p className="leading-relaxed mr-auto text-ellipsis overflow-hidden">
                {service.serviceDescription}
              </p>

              {isAuthorized ? (
                <div className="flex items-center flex-wrap ">
                  <Link
                    to={`/createOrder/${serviceId}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Book this service
                  </Link>
                </div>
              ) : (
                <div className="flex items-center flex-wrap ">
                  <button
                    onClick={() => alert("Please Login")}
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                  >
                    Book this service
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <ul>
        <li>serviceCategory: {service.serviceCategory}</li>
        <li>serviceDescription: {service.serviceDescription}</li>
        <li>averageRate: {service.averageRate}</li>
        <li>visibility{service.visibility.toString()}</li>
        <li>price: {service.price}</li>
        <li>Provider Name: {service.Provider.name}</li>
      </ul> */}
    </div>
  );
};

export default OneServicePage;
