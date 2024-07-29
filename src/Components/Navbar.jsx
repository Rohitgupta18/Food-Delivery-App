
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './navbar.css';
import { assets } from '../assets/assets';
const Navbar = () => {
  const [menu,setMenu]=useState("menu");
  return (

    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-ape")} className={menu==="mobile-ape"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbarright">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>

    </div>
  )
}

export default Navbar
