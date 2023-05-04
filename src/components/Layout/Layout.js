import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Sidebar/Sidebar'

const Layout = () => {
  return (
    <>   {/*si usa per gesire piu tag fratelli, perche se non utilizzo questo mi darà errore */}
    <header>
    <SideBar></SideBar> {/*Sidebar che scorre da sinistra verso destra  */}
    </header>
    <main>
        <Outlet></Outlet>
    </main>
   
   
    </>
  )
}

export default Layout