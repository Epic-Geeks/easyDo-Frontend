import React from "react";
import { useSelector } from "react-redux";
import { selectMyServices } from "../../redux/counterSlicer";
import { useDispatch } from "react-redux";
import { deleteService } from "../../actions/ServicesActions";
import EditServiceModal from "./editServiceModal";
import { useState } from "react";

import Container from "../Container";

export default function MyServices() {
  const services = useSelector(selectMyServices);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <div>
      <section className="md:h-full flex items-center text-gray-600 bg-cover bg-no-repeat bg-center">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {services &&
              services.map((service, index) =>
                service.visibility === true ? (
                  <>
                    <div className='p-4 sm:w-1/2 lg:w-1/3 flex flex-col items-center hover:drop-shadow-xl' key={index}>
                      <div className="max-w-2xl mx-auto ">
                        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                          {/* {
                            service.picture && service.picture.map((img,idx)=>(
                              
                              ))
                            } */}
                            {/* <img
                              className="rounded-t-lg p-8 "
                              src={service.picture[0]}
                               alt={service.picture[0]}
                            /> */}

                          <div className="px-5 pb-5">
                            <h3 className="text-base font-semibold tracking-tight dark:text-white">
                              {service.serviceDescription}
                            </h3>

                            <span className="text-right float-right text-gray-900 dark:text-white text-base">
                              $ {service.price}
                            </span>

                            <div className="flex items-center mt-2.5 mb-5">
                              <h3 className="leading-relaxed uppercase text-gray-900 font-semibold text-lg dark:text-white">
                                {service.serviceCategory}
                              </h3>
                            </div>

                            <div className="flex items-center justify-between">
                              <button
                                className="bg-Myrtle-Green text-white font-bold rounded-lg px-6 py-2 mt-2 mr-2 text-sm hover:bg-cyan-700"
                                type="button"
                                data-modal-toggle="defadivtModal"
                                onClick={() => setShow(true)}
                              >
                                Edit Service
                              </button>
                              {/* Call the Modal component */}
                              <button
                                className="bg-Myrtle-Green text-white font-bold rounded-lg px-6 py-2 mt-2 text-sm hover:bg-cyan-700"
                                onClick={(e) =>
                                  deleteService(dispatch, service.id)
                                }
                              >
                                Delete Service
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )
              )}
          </div>
        </div>
      </section>
    </div>
  );
}
