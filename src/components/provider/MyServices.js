import React from "react";
import { useSelector } from "react-redux";
import { selectMyServices } from "../../redux/counterSlicer";
import { useDispatch } from "react-redux";
import { editService, deleteService } from "../../actions/ServicesActions";

export default function MyServices() {
  const services = useSelector(selectMyServices);
  const dispatch = useDispatch();
  
  return (
    <div> 

        <div className="flex items-center justify-center min-h-screen ">
        <div class="rounded overflow-hidden justify-center bg-white ">

        
<h3 className=" text-center text-3xl font-bold dark:text-white">My Services</h3>
      <ul>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-3 gap-5">

        {services &&
          services.map((service, index) => (
            <li key={index}>
              <div class="container mx-auto p-6">
  <div class="flex items-stretch -mx-4">
    <div class="flex-1 p-4">
      <div class="block bg-white overflow-hidden border-2 h-full">
        <div class="p-4">
        <img class="rounded-t-lg object-cover h-80 w-96" src={service.picture} alt="" />
          <h2 class="mt-2 mb-2 font-bold text-2xl font-Headingg">
          {service.serviceCategory}
          </h2>
          
          <p class="mb-3 font-bold text-gray-700 dark:text-gray-400"> $ {service.price}</p>


          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.serviceDescription}</p>
        </div>
        <div class="p-4 flex flex-wrap items-center">
        <button class="px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50 "  onClick={() => dispatch(editService(service.id))}>Edit Service</button>
        <button class="px-4 py-2 font-semibold text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"  onClick={() => dispatch(deleteService(service.id))}>Delete Service</button>
        </div>
      </div>
    </div>
    
</div>
</div>

    
   
                    
     
            </li>
          ))}
</div>
      </ul>
    </div>
    </div>
    </div>
    
    
  );

  
}

