import React from 'react'
import { Link } from 'react-router-dom'
import side from "./module.css/sidebar.module.css"
// import { AiFillEye } from "react-icons/ai";
// import { MdAccountCircle } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { GrView } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi2";

const AdminSidebar = () => {

  return (
    <div id={side.container}>
        <ul>

           <li>
            <h3 style={{fontSize:"40px", color:"green"}}>AdminDashBoard</h3>
           </li>

            <li>
                <span style={{marginRight:"10px"}}><GrUserManager/></span>
                <Link to="/adminDashboard/addmanager" className={side.link}>Add Academy Manager</Link>
                </li>

            <li>
                <span style={{marginRight:"10px"}}><GrView/></span>
                <Link to="/adminDashboard/viewacademymanager" className={side.link}>View Academy Manager</Link>
                </li>

            <li>
                <span style={{marginRight:"10px"}}><GrView/></span>
                <Link to="/adminDashboard/viewacademy" className={side.link}>View Academy</Link>
                </li>

            <li>
                <span style={{marginRight:"10px"}}><GrView/></span>
                <Link to="/adminDashboard/viewbranch" className={side.link}>View Branch</Link>
                </li>

            <li>
                <span style={{marginRight:"10px"}}><GrView/></span>
                <Link to="/adminDashboard/viewcourse" className={side.link}>View Course</Link>
                </li>

            <li>
                <span style={{marginRight:"10px"}}><HiOutlineHome/></span>
                <Link to="/home" className={side.link}>Home</Link>
                </li>

        </ul>

    </div>
  )
}

export default AdminSidebar