import React from "react";
import {
  trend1,
  trend2,
  trend3,
  trend4,
  trend5,
  trend6,
} from "../../assets/home/trending";
import Container from "../Container";

const Trending = () => {
  const data = [
    {
      id: 1,
      title: "Mr. Provider’s 3rd Annual 2022 Ultimate Holiday Tool Giveaway",
      date: "October 29, 2022",
      body: "Whether you’re an aspiring DIYer interested in trying your hand at some home upgrades or an ...",
      img: trend3,
    },
    {
      id: 2,
      title: "Painting Tips for Beautiful Results",
      date: "May 15, 2022",
      body: `No time gets wasted with Mr. Handyman. That means we'll 
                     install crown molding while the stain dries on the entertainment center we built just for you`,
      img: trend2,
    },
    {
      id: 3,
      title: "easyDo is Hiring",
      date: "December 16, 2022",
      body: `For longer than 15 years, we've consistently hired reliable, customer service-focused employees who are both knowledgeable and skilled`,
      img: trend6,
    },
  ];
  return (
    <div>
      <section className="md:h-full flex items-center text-gray-600 bg-cover bg-no-repeat bg-center">
        <Container>
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-4xl text-gray-800 font-semibold">
              WHAT'S TRENDING WITH MR. PROVIDERS?
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {data &&
              data.map((item) => (
                <div className="p-4 sm:w-1/2 lg:w-1/3" key={item.id}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                    <img
                      className="lg:h-72 md:h-48 w-full object-cover object-center "
                      src={item.img}
                      alt="blog"
                    />
                    <div className="p-6 text-gray-900 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                      <h2 className="text-base font-medium text-indigo-300 mb-1">
                        {item.date}
                      </h2>
                      <h1 className="text-2xl font-semibold mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{item.body}</p>
                      <div className="flex items-center flex-wrap ">
                        <a
                          href="#more"
                          onClick={() => alert("comming soon!")}
                          className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                          50
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        </Container>
      </section>
    </div>
  );
};

export default Trending;
