import React, { useState } from "react";
import swal from "sweetalert";

import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-Myrtle-Green w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-cyan-100 text-sm">
                If you have any question, good or negative feedback please feel
                free to contact with us.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <FaPhone className="text-teal-400 text-xl" />
                <span>+962 222 222 589</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <GrMail className="text-teal-400 text-xl" />
                <span>info@easydo.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ImLocation className="text-teal-400 text-xl" />
                <span>Amman, Jordan </span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="https://www.twitter.com">
                <FaTwitter className="hover:text-teal-400" />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="hover:text-teal-400" />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="hover:text-teal-400" />
              </a>
              <a href="https://www.instagram.com">
                <FaInstagram className="hover:text-teal-400" />
              </a>
              <a href="https://github.com/Epic-Geeks">
                <FaGithub className="hover:text-teal-400" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form action="" className="flex flex-col speace-y-4">
                <div>
                  <label htmlFor="name" className="text-sm pb-5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 mb-4 outline-none focus:ring-2 focus:ring-Polished-Pine"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm pb-5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 mb-4 outline-none focus:ring-2 focus:ring-Polished-Pine"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm pb-5">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    rows="4"
                    id="message"
                    required
                    placeholder="Message"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-Polished-Pine"
                  />
                </div>
                <button
                  onClick={() =>
                    swal("Thank you", "Your message is sent successfully", "success")
                  }
                  className="inline-block self-end bg-Myrtle-Green text-white font-bold rounded-lg px-6 py-2 mt-2 uppercase text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
