import React from 'react'
import cookies from "react-cookies"
const ProviderProfile = () => {
  return (
    <div>{cookies.load("name")} Profile</div>

  )
}

export default ProviderProfile