import React from "react";
import cookies from "react-cookies";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsAuthorized, selectServices } from "../redux/counterSlicer";

export default function Home() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const services = useSelector(selectServices);

  return (
    <div>
      {isAuthorized ? (
        <p>You are authorized {cookies.load("name")}</p>
      ) : (
        <p>Welcome guest</p>
      )}
      <h2>Services</h2>
      <ul>
        {services &&
          services.map((service, index) => (
            <li key={index}>
              {service.serviceCategory}{" "}
              <button /* open a modal */>Check Service</button>{" "}
              <Link /* onClick if not logged in show alert please log in if
               logged open a modal or navigate to a new page to complete order  */
                to={!isAuthorized? `/signIn` :`/createOrder/${service.id}`}
              >
                Create Order
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
