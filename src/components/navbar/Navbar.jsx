import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/easydo.png";
import Container from "../Container";
import { selectIsAuthorized } from "../../redux/counterSlicer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../actions/AuthActions";

const Navbar = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <nav className="py-2 z-40">
      <Container>
        <div className=" flex items-center justify-between h-16">
          <div className="flex gap-0 items-center">
            <img
              className="h-[70px] w-[150px] cursor-pointer mt-2 object-contain"
              src={logo}
              alt="logo"
            />
            <div className="hidden xl:block">
              
                <div className="ml-48 flex items-baseline space-x-16 font-semibold">
                  <Link
                    to="/"
                    className="hover:bg-cyan-700 hover:text-white px-3 py-2 rounded-md text-sm"
                  >
                    Home
                  </Link>

                  <Link
                    to="/services"
                    className="hover:bg-cyan-700  hover:text-white px-3 py-2 rounded-md text-sm"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contactUs"
                    className="hover:bg-cyan-700  hover:text-white px-3 py-2 rounded-md text-sm"
                  >
                    Contact Us
                  </Link>
                  {
                    !isAuthorized ? (
                  <Link
                    to="/about"
                    className="hover:bg-cyan-700  hover:text-white px-3 py-2 rounded-md text-sm"
                  >
                    About us
                  </Link>
                    ):(
                      <Link to="/dashboard" 
                      className="hover:bg-cyan-700  hover:text-white px-3 py-2 rounded-md text-sm"
                      >
                        Dashboard
                      </Link>
                    )
                  }

                </div>
             
            </div>
          </div>

          {isAuthorized && (
            <button onClick={() => logoutHandler(dispatch)}>
              {" "}
              <Link to="/">
                <div className="hidden xl:block hover:bg-cyan-700  px-4 py-1 rounded-md font-semibold">
                  Log out
                </div>
              </Link>
            </button>
          )}{!isAuthorized &&  (
            <Link to="/signin">
              <div className="hidden xl:block hover:bg-cyan-700  px-4 py-1 rounded-md font-semibold">
                Log In
              </div>
            </Link>
          )}
          <div className="-mr-2 flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-8 xl:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              <Link
                to="/"
                className="hover:bg-primary-base hover:bg-cyan-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="hover:bg-primary-base hover:bg-cyan-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </Link>

              <Link
                to="/contactUs"
                className="hover:bg-primary-base hover:bg-cyan-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Us
              </Link>
              {
                    !isAuthorized && (
                  <Link
                    to="/about"
                    className="hover:bg-primary-base hover:bg-cyan-700 hover:text-white  text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About us
                  </Link>
                    )}
                    {
                      !isAuthorized &&(
                      <Link to="/dashboard" 
                      className="hover:bg-primary-base hover:bg-cyan-700 hover:text-white  text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                      >
                        Dashboard
                      </Link>
                    )
                  }
              {!isAuthorized && (
                <Link
                  to="/signin"
                  className="hover:bg-primary-base hover:bg-cyan-700 hover:text-white  text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Log In
                </Link>
              ) }
              {isAuthorized && (
                <button
                onClick={() => logoutHandler(dispatch) }
                className="hover:bg-primary-base hover:bg-cyan-700 hover:text-white  text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                >                   
                  Log out
                  
                </button>
              )}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
