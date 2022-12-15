import React from "react";
import Container from "../Container";
import data from "../../assets/data/svg.json";

const Improvment = () => {
  return (
    <div>
      <div className="w-full md:h-full p-1">
        <Container>
        <h1 className="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">
          WHAT CAN OUR HOME IMPROVEMENT PROFESSIONALS DO FOR YOU?
        </h1>

        <div className="flex flex-wrap justify-center">
          {data.map((svg, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer hover:scale-105 transition-transform hover:bg-Myrtle-Green hover:text-white ease-in duration-300 "
            >
              <svg
                viewBox={svg.viewBox}
                role={svg.role}
                className="w-10 h-10 flex justify-center items-center mt-2 pt-2"
                title={svg.title}
                data-use={svg["data-use"]}
              >
                <path d={svg.d}></path>
              </svg>

              <h2 className="text-center px-2 pb-5 m-2 font-semibold">
                {svg.strong}
              </h2>
            </div>
          ))}
        </div>
        </Container>
      </div>
    </div>
  );
};

export default Improvment;
