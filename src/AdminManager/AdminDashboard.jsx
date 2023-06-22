import React from 'react'
// import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminMainbar from './AdminMainbar'

const AdminDashboard = () => {
  return (
    <>
     <div style={{display:"flex"}}>
        <AdminSidebar/>
        <AdminMainbar/>
     </div>
    </>
  )
}

export default AdminDashboard