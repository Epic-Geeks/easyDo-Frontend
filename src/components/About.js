import React from "react";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import Container from "./Container";

export default function About() {
  const aboutInfo = [
    {
      name: "Mohammed Almomani",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/106746339?v=4",
      description:
        "For longer than 15 years, we've consistently hired reliable",
    },
    {
      name: "Malek Hamdan",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/62914608?v=4",
      description:
        "For longer than 15 years, we've consistently hired reliable",
    },
    {
      name: "Ali Mohammad",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/108058306?v=4",
      description:
        "For longer than 15 years, we've consistently hired reliable",
    },
    {
      name: "Amani Alsmadi",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/108059931?v=4",
      description:
        "For longer than 15 years, we've consistently hired reliable",
    },
    {
      name: "Shaima Alkhateeb",
      text: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/97349122?v=4",
      description:
        "For longer than 15 years, we've consistently hired reliable",
    },
  ];

  return (
    <div>
      <section className="md:h-full flex items-center text-gray-600 bg-cover bg-no-repeat bg-center">
        <Container>
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-4xl text-gray-800 font-semibold">
                Meet our Developers
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {aboutInfo &&
                aboutInfo.map((item, index) => (
                  <div
                    className="p-4 sm:w-1/2 lg:w-1/3 flex flex-col items-center hover:drop-shadow-xl"
                    key={index}
                  >
                    <div className="h-full w-80 border-2 border-gray-200 bg-Anti-Flash-White border-opacity-60 rounded-lg flex flex-col items-center overflow-hidden cursor-pointer hover:scale-105 transition-transform drop-shadow-xl">
                      <img
                        className="w-2/4 rounded-full h-auto mb-5 flex items-center mt-10 drop-shadow-xl"
                        src={item.image}
                        alt="blog"
                      />
                      <div className="p-6 text-center hover:transition duration-300 ease-in">
                        <h1 className="text-lg font-semibold mb-3">
                          {item.name}
                        </h1>
                        <p className="leading-relaxed mb-3 text-center">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-center text-xl text-black mb-5 ">
                        <a href="https://www.twitter.com">
                          <FaTwitter className="w-7 h-7 cursor-pointer text-2xl m-2 hover:text-slate-600 inline-block" />
                        </a>
                        <a href="https://www.linkedin.com">
                          <FaLinkedin className="w-7 h-7 cursor-pointer text-2xl m-2 hover:text-slate-600 inline-block" />
                        </a>
                        <a href="https://github.com/Epic-Geeks">
                          <FaGithub className="w-7 h-7 cursor-pointer text-2xl m-2 hover:bg-slate-600 rounded-3xl inline-block" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </div>

    // <div className="md:h-full flex items-center text-gray-600 bg-cover bg-no-repeat bg-center">
    //   <div className="container px-5 py-10 mx-auto">
    //     {aboutInfo &&
    //       aboutInfo.map((item, index) => (
    //         <div key={index} className=" p-4 sm:w-1/2 lg:w-1/3">
    //           <div className="w-80 p-10 bg-Anti-Flash-White rounded-lg mx-auto flex flex-col items-center my-5 hover:drop-shadow-xl shadow-blak duration-300">
    //             <img
    //               className="w-2/3 rounded-full h-auto mb-5 drop-shadow-2xl"
    //               src={item.image}
    //               alt="image"
    //             />
    //             <h1 className="text-lg font-bold text-slate-600 mb-2">
    //               {item.name}
    //             </h1>
    //             <h2 className="text-sm font-semibold text-slate-400">
    //               {item.text}
    //             </h2>
    //             <p className="text-xs text-slate-550 text-center my-4 ">
    //               {item.description}
    //             </p>

    //           <div className="text-center text-xl text-black mb-2 ">
    //             <a href="https://www.twitter.com">
    //               <FaTwitter className="w-7 h-7 cursor-pointer text-2xl m-2 hover:text-slate-600 inline-block" />
    //             </a>
    //             <a href="https://www.linkedin.com">
    //               <FaLinkedin className="w-7 h-7 cursor-pointer text-2xl m-2 hover:text-slate-600 inline-block" />
    //             </a>
    //             <a href="https://github.com/Epic-Geeks">
    //               <FaGithub className="w-7 h-7 cursor-pointer text-2xl m-2 hover:bg-slate-600 rounded-3xl inline-block" />
    //             </a>
    //           </div>
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
}
