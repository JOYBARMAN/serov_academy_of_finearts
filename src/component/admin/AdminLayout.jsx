import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'

const AdminLayout = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

export default AdminLayout