import React from 'react'
import style from "./_navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'
// import Logout from './Logout';

const Menu = () => {
  let navigate = useNavigate()

  let role=window.localStorage.getItem("role")
  let token=window.localStorage.getItem("token")
  console.log(role);

  let handleToken=()=>{
    window.localStorage.removeItem("role")
    window.localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <section id={style.menuList}>
        <article>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>

               {
               role ==="ROLE_ADMIN" ? <li><Link to="/admindashboard">Admin Dashboard</Link></li> : null
               }

                {
                  token ?
                  <li onClick={handleToken}><Link to="/login">Logout</Link></li>
                  :
                  <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                  </>
                }

                <li><Link to="/contact">Contact</Link></li>

            </ul>
        </article>
    </section>
  )
}

export default Menu