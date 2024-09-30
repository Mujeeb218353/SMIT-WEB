import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ThemeChanger from '../components/ThemeChanger'

const AdminLayout = () => {
  const { theme } = useContext(GlobalContext)
  return (
    <div className=" text-2xl flex justify-center items-center border">
      {/* <aside> */}
        <Sidebar />
      {/* </aside> */}
      <Outlet />
      <Footer />
      <ThemeChanger position={'fixed bottom-1 right-1 lg:bottom-4 lg:left-4'}/>
    </div>
  )
}

export default AdminLayout