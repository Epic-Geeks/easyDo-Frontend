import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { selectIsAuthorized, selectUserInfo } from '../redux/counterSlicer';
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Navbar from "./navbar/Navbar";
import SignUp from "./SignUp";
import UserDashboard from "./user/UserDashboard";
import ProviderDashboard from "./provider/ProviderDashboard";
import CreateServiceForm from "./provider/CreateService";
import EditProfile from "./EditProfile";
import Footer from "./footer/Footer";

import Services from "./services/Services";


import About from "./About/About";
import ContactUs from "./ContactUs";
import Orders from "./user/Orders";
import Reviews from "./reviews/reviews";
import SingleServicePage from "../components/services/OneServicePage";




function AppRoutes() {

  const isAuthorized = useSelector(selectIsAuthorized);
  const userInfo = useSelector(selectUserInfo);
  return (
    <div className="App" data-testid="homePage">
      <>
        <Router>
          <Navbar />
          <Routes >
            <Route
              path="/signIn/*"
              element={isAuthorized && userInfo.role === "customer" ? <Navigate to={"/dashboard"} /> : isAuthorized && userInfo.role === "provider" ? <ProviderDashboard /> : <SignIn />}
            />
            <Route
              path="/signUp/*"
              element={isAuthorized && userInfo.role === "customer" ? <UserDashboard /> : isAuthorized && userInfo.role === "provider" ? <ProviderDashboard /> : <SignUp />}
            />
            <Route
              path="/dashboard"
              element={isAuthorized && userInfo.role === "customer" ? <UserDashboard /> : isAuthorized && userInfo.role === "provider" ? <ProviderDashboard /> : <Navigate to="/signIn" />}
            />
            
            <Route
              path="/createService"
              element={<CreateServiceForm />}
            />
            <Route
              path="/EditProfile"
              element={<EditProfile />}
            />
            <Route
              path="/*"
              element={<Home />}
            />
            <Route path="/services"
              element={<Services />}
            />
            <Route
              path="/about"
              element={<About />}
              />
            <Route
              path="/orders"
              element={<Orders />}
            />
        <Route path="services/:serviceId" element={<SingleServicePage />} />

            <Route
              path="/reviews"
              element={<Reviews />}
              />
            <Route
              path="/contactUs"
              element={<ContactUs />}
            />
              </Routes>
          <Footer />

        </Router>
      </>
    </div>
  );
}

export default AppRoutes;
