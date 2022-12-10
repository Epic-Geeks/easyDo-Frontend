import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../actions/AuthActions";
import { selectIsAuthorized } from "../redux/counterSlicer";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";

export default function NavBar() {
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {!isAuthorized && (
        <AppBar position="fixed" sx={{ background: "rgba(0,0,0,0.2)", color: "white" }}>
          <Toolbar>
            <Typography variant="h6">EasyDo</Typography>
            <Tabs sx={{ marginLeft: "15%" }}
              value={value} onChange={handleChange}
              textColor="white"
              indicatorColor="white"
              centered
            >
              <Tab href="/" label='Home'></Tab>
              <Tab href="/services" label='Services'></Tab>
              <Tab href="/about" label='About'></Tab>
              <Tab href="/contact" label='contact'></Tab>
            </Tabs>
            <Button href="/signIn" sx={{ marginLeft: 'auto', color: "inherit" }}>SignIn</Button>
            <Button href="/signUp" sx={{ marginLeft: '10px', color: "inherit" }}>SignUp</Button>
          </Toolbar>
        </AppBar>
      )}
      {isAuthorized && (
        <AppBar position="fixed" sx={{ background: "transparent", color: "black" }}>
          <Toolbar>
            <Typography variant="h6">EasyDo</Typography>
            <Tabs sx={{ marginLeft: "15%" }}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab href="/dashboard" label='Dash Board'></Tab>
              <Tab href="/EditProfile" label='Edit Profile'></Tab>
            </Tabs>
            <Button sx={{ marginLeft: 'auto', color: "inherit" }} onClick={() => logoutHandler(dispatch)}>Sign Out</Button>
          </Toolbar>
        </AppBar>
      )}
      {/*<Link to="/">Browse Services</Link>*/}
    </React.Fragment>
  );
}
