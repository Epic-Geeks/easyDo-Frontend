import logo from "./easydo.png";
import Container from "../Container";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex flex-col">
    <footer className="mt-auto">
      <div className="bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pt-2">
            <div className="mt-9">
              {/* <h4 className="text-xl pb-4">Company</h4> */}
              <p className="text-gray-500">
                {/* Amman-Jordan
                <br />
                ASAC, Lumins Al-Qudas
                <br />
                <br />
                <strong>Phone: </strong> +962 222 222 589
                <br />
                <strong>Email: </strong> info@easydo.com
                <br /> */}
                <img
                  src={logo}
                  alt=""
                  className="w-[256px] h-[110px] cursor-pointer object-contain rounded-2xl"
                />
              <span className="">easyDo is the easiest and most convenient way to book services</span>
              </p>
            </div>
            <div className="mb-5 mt-10 ml-10">
              <h4 className="text-xl pb-4">Useful Links</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Home
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="/about" className="hover:text-Polished-Pine">
                    About Us
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Services
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Terms Of Services
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Privacy Policy
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="mb-5 mt-10 ml-10">
              <h4 className="text-xl pb-4 ">Our Services</h4>
              <ul>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Plumber
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Blacksmith
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Carpentry
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Construction
                  </a>{" "}
                </li>
                <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    House Painting
                  </a>
                </li>
                {/* <li className="pb-4">
                  <i className="fa fa-chevron-right text-white mr-2" />
                  <a href="#" className="hover:text-Polished-Pine">
                    Online Services
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="mb-5 mt-10 ml-10">
              <h4 className="text-xl pb-4">Company</h4>
              <i className="fa fa-chevron-right text-white mr-2" />
              <a href="/contactUs" className="hover:text-Polished-Pine">
                Contact Us
              </a>
              {/* <p className="text-gray-500">
                Amman-Jordan
                <br />
                ASAC, Lumins Al-Qudas
                <br />
                <br />
                <strong>Phone: </strong> +962 222 222 589
                <br />
                <strong>Email: </strong> info@easydo.com
              </p> */}
              {/* <h4 className="text-xl pb-4">Join Our Newsletter</h4>
              <p className="text-gray-500 pb-2">
                Join 65,000+ others and never miss out on new tips, services and
                more
              </p>
              <form
                className="flex flex-row flex-wrap"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(e.target.email.value + " has recieved successfully");
                }}
              >
                <input
                  type="email"
                  name="email"
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                  placeholder="email@example.com"
                />
                <button className="p-2 w-1/3 bg-red-500 text-white hover:bg-yellow-600">
                  Subscribe
                </button>
              </form> */}
              <div className="mb-5 mt-10">
                <h4 className="text-xl pb-4">Follow Us</h4>
                <div className="flex space-x-4 text-lg ">
                  <a href="https://www.twitter.com">
                    <FaTwitter className="hover:text-Polished-Pine" />
                  </a>
                  <a href="https://www.linkedin.com">
                    <FaLinkedin className="hover:text-Polished-Pine" />
                  </a>
                  <a href="https://www.facebook.com">
                    <FaFacebook className="hover:text-Polished-Pine" />
                  </a>
                  <a href="https://www.instagram.com">
                    <FaInstagram className="hover:text-Polished-Pine" />
                  </a>
                  <a href="https://github.com/Epic-Geeks">
                    <FaGithub className="hover:text-Polished-Pine" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-center items-center">
          <div className="text-center">
            <div>
              Copyright &copy;
              <strong>
                <span>easyDo </span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="">
              Designed by{" "}
              <a
                href="https://www.github.com/Epic-Geeks"
                className="text-white-500 underline"
              >
                Epic-Geeks
              </a>
            </div>
          </div>
          {/* <div className="text-center text-xl text-white mb-2">
            <a href="https://www.twitter.com">
              <FaTwitter className="w-10 h-10 cursor-pointer text-2xl m-2 hover:text-Polished-Pine inline-block" />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook className="w-10 h-10 cursor-pointer text-2xl m-2 hover:text-Polished-Pine inline-block" />
            </a>
            <a href="https://www.linkedin.com">
              <FaLinkedin className="w-10 h-10 cursor-pointer text-2xl m-2 hover:text-Polished-Pine inline-block" />
            </a>
            <a href="https://github.com/Epic-Geeks">
              <FaGithub className="w-10 h-10 cursor-pointer text-2xl m-2 hover:bg-black rounded-3xl inline-block" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
    </div>
  );
}
