import React from 'react'
import {Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <>
    {/* shows the content under this item in the route section */}
    <Outlet/> 
    </>
  )
}

export default MainLayout