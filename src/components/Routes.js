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
import Home from "./Home";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import UserDashboard from "./user/UserDashboard";
import ProviderDashboard from "./provider/ProviderDashboard";
import CreateOrderForm from "./user/CreateOrderForm";
import CreateServiceForm from "./provider/CreateServiceForm";
import EditProfile from "./EditProfile";



function AppRoutes() {
    
    const isAuthorized = useSelector(selectIsAuthorized);
    const userInfo = useSelector(selectUserInfo);
  return (
    <div className="App" data-testid="homePage">
        <>
        <Router>
          <NavBar />
          <Routes >
              <Route
                path="/signIn/*"
                element={isAuthorized && userInfo.role === "customer" ? <UserDashboard /> : isAuthorized && userInfo.role === "provider" ? <ProviderDashboard /> : <SignIn />}
              />
              <Route
                path="/signUp/*"
                element={isAuthorized && userInfo.role === "customer" ? <UserDashboard /> : isAuthorized && userInfo.role === "provider" ? <ProviderDashboard /> : <SignUp />}
              />
                <Route
                path="/dashboard/*"
                element={isAuthorized && userInfo.role === "customer" ? <UserDashboard /> : isAuthorized && userInfo.role === "provider" ? <ProviderDashboard /> :<Navigate to="/signIn" />}
                />
              <Route
              path="/createOrder/:id"
              element={<CreateOrderForm />}
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

          </Routes>
        </Router>
      </>
    </div>
    );
}

export default AppRoutes;
