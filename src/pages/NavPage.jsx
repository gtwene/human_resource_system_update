import React from 'react'
import {Routes, Route} from "react-router-dom"
import Employees from '../partials/SubSideBarItems/Employees'
import Main from '../partials/SubSideBarItems/Main'
import Orders from '../partials/SubSideBarItems/Orders'


function NavPage() {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/employees' element={<Employees />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/main-admin' element={<Main />} />
        </Routes>
    </React.Fragment>
  )
}

export default NavPage
