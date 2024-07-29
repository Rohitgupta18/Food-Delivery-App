// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Order from './Pages/Orderplace/Order'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/Order' element={<Order/>}/>
    
  </Routes>
    </div>
  )
}

export default App
