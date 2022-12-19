import React from "react";
import { useSelector } from "react-redux";
import { selectMyServices } from "../../redux/counterSlicer";
import { useDispatch } from "react-redux";
import { deleteService } from "../../actions/ServicesActions";
import EditServiceModal from "./editServiceModal";
import { useState } from "react";


export default function MyServices() {
  const services = useSelector(selectMyServices);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <div>

<ul>
 {services &&
                services.map((service, index) => (
                  
                    (service.visibility === true)?
                    (<>
                      <li key={index}>



              
                      <div class="max-w-2xl mx-auto ">

<div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
  
    <img class="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp"/*{service.picture}*/alt="product image"></img>
     
    <div class="px-5 pb-5">
      
        <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{service.serviceDescription}</h3>
     
      <div class="flex items-center mt-2.5 mb-5">
        <h3 class="text-gray-900 font-semibold text-lg dark:text-white">{service.serviceCategory}</h3>
        
      </div>
      
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$ {service.price}</span>
      
      <div class="flex items-center justify-between">
       
       
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5" type="button" data-modal-toggle="defaultModal" onClick={() => setShow(true)}>
      Edit Service
      </button>
  
  /* Call the Modal component */
  

    
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5" onClick={(e) => deleteService(dispatch, service.id)}>Delete Service</button>
      </div>
    </div>
</div>
</div>

                     </li>
                    
                    </>):(<>
                   
                      </>)
                  
                ))}

                    
</ul>

</div>
  );


}

