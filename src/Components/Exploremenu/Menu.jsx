import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = () => {
  return (
    <div className='Menu' id='Menu'>
      <h1>Explore our Menu</h1>
      <p className='MenuText'>jrvjerfnvikfvnefnviefnviefnvrnevjirenviernviren.ierrnijrnvi</p>
      <div className="menulist">
             {menu_list.map((item,index)=>{
                return(
                <div key={index} className='menulistitem'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div> 
                )
             })}
      </div>
    
    <hr />
    </div>
  )
}

export default Menu
