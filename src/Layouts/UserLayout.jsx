import React, { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

import { GlobalContext } from "../context/AppContext";
import { useContext, useState } from "react";



const UserLayout = () => {


  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div className=' w-full overflow-hidden' >
        <NavigationBar/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default UserLayout