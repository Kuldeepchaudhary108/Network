import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Layout(props) {
  return props.isAuthenticated?
    <>
        <Outlet/>
    </>
    :
    <Navigate replace to="/login"/>
}

export default Layout