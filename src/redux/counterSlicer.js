import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
  userInfo: {},
  services: [],
  orders: [],
  myServices: [],
};

export const counterSlicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Login_Success: (state, action) => {
      state.isAuthorized = true;
      state.userInfo = action.payload;
      state.orders = action.payload.Orders;
      state.myServices = action.payload.role === "provider"?action.payload.Services: [];
    },
    Logout: (state) => {
      state.isAuthorized = false;
      state.userInfo = {};
      state.orders = [];
      state.myServices = [];
    },
    fetchServices: (state, action) => {
      state.services = action.payload;
    }
  }
})

export const selectIsAuthorized = (state) => state.counter.isAuthorized
export const selectServices = (state) => state.counter.services
export const selectUserInfo = (state) => state.counter.userInfo
export const selectOrders = (state) => state.counter.orders
export const selectMyServices = (state) => state.counter.myServices


export const {Login_Success, Logout, fetchServices} = counterSlicer.actions;
export default counterSlicer.reducer;