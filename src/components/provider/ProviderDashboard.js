import React from 'react'
import cookies from 'react-cookies';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsAuthorized } from '../../redux/counterSlicer';
import Orders from '../Orders';
import MyServices from './MyServices';

export default function ProviderDashboard() {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <>
    {isAuthorized && (
      
      <div>Dashboard for Provider {cookies.load("name")}</div>
      )}
      <Link to="/createService">Create Service</Link>
      <Orders />
      <MyServices />
      </>
  )
}
