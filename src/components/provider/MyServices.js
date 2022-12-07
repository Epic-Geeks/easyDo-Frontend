import React from "react";
import { useSelector } from "react-redux";
import { selectMyServices } from "../../redux/counterSlicer";

export default function MyServices() {
  const services = useSelector(selectMyServices);
  return (
    <div>
      <h2>My Services</h2>
      <ul>
        {services &&
          services.map((service, index) => (
            <li key={index}>
              {service.serviceCategory}{" "}
              <button /*Open a modal on click to edit service */>
                Edit Service
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
