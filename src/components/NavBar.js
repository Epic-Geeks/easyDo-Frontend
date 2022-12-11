// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { logoutHandler } from "../actions/AuthActions";
// import { selectIsAuthorized } from "../redux/counterSlicer";

// export default function NavBar() {
//   const isAuthorized = useSelector(selectIsAuthorized);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       {!isAuthorized && (
//         <>
//           <Link to="/signIn">Sign In</Link>
//           <Link to="/signUp">Sign Up</Link>
          
//         </>
//       )}
//       {isAuthorized && (
//         <>
//           <Link to="/dashboard">Dashboard</Link>
//           <button onClick={() => logoutHandler(dispatch)}>
//             <Link to="/">Sign Out</Link>
//           </button>
//           <Link to="/EditProfile">Edit Profile</Link>
//         </>
//       )}
//             <Link to="/">Browse Services</Link>

//     </div>
//   );
// }
