import React from 'react'
import cookies from 'react-cookies';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsAuthorized } from '../../redux/counterSlicer';
import Orders from '../Orders';

export default function UserDashboard() {
  const isAuthorized = useSelector(selectIsAuthorized);
  return (
    <>
    {isAuthorized && (
      
      <div>Dashboard for User {cookies.load("name")}</div>
      )}
      <Orders />
      </>
  )
}
