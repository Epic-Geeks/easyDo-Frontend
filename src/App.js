// import logo from './logo.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './actions/AuthActions';
import { getServices } from './actions/ServicesActions';
import cookies from "react-cookies";




import AppRoutes from "./components/Routes";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
    getServices(dispatch)
    if(cookies.load("token")) getProfile(dispatch)
     }, [])

  return (
            <AppRoutes />
  );
}

export default App;
