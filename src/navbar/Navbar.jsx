import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import style from "./_navbar.module.css"

const Navbar = () => {
  return (
    <div id={style.container}>
        <Logo/>
            <Menu/>
    </div>
  )
}

export default Navbar