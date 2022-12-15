import React from 'react'
import { useSelector } from 'react-redux'
import { fetchServices } from '../../redux/counterSlicer'
const Services = () => {
 
  const services = useSelector(fetchServices);
  console.log(services.payload.counter.services)
  return (
    <div>
      <ul>
      {
        services && 
        services.payload.counter.services.map((service, idx)=>(
        <>
          <li>serviceDescription: {service.serviceDescription}</li><br/>
          <li>averageRate: {service.averageRate}</li>
          <li>price: {service.price}</li>
          <li>serviceCategory: {service.serviceCategory}</li>
        </>
        ))
      }
      </ul>
        
    </div>
  )
}

export default Services