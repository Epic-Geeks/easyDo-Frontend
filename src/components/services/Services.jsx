import ServiceCard from "./ServiceCard";
import Container from "../Container";
import { useSelector } from "react-redux";
import { fetchServices } from "../../redux/counterSlicer";
import Loading from "../pages/Loading";
import React from "react";

export default function ServiceCards() {
  const services = useSelector(fetchServices);
  const [query, setQuery] = React.useState("");
  if (!services) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="max-w-300 mt-5 place-content-center">
        <form className="flex place-content-center">
          <div className="relative w-1/3 place-items-center">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5"
              placeholder="Search..."
              required=""
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-teal-700 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300"
          >
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Search
          </button>
        </form>
      </div>

      <article className="grid my-10 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4 mb-8">
        {services.payload.counter.services &&
          services.payload.counter.services
            .filter((service) =>
              service.serviceDescription.toLowerCase().includes(query)
            )
            .map((service) => (
              <ServiceCard
                id={service.id}
                key={service.id}
                serviceDescription={service.serviceDescription}
                averageRate={service.averageRate}
                price={service.price}
                serviceCategory={service.serviceCategory}
                providerName={service.Provider.name}
              />
            ))}
      </article>
    </Container>
  );
}
