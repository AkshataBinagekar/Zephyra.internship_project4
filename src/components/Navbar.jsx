import React from 'react'
import  './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <button className='btn'>Deliver to Location</button>
      <input className='search' type='search' />
      <button className='btn'>Signup</button>
    </div>
  )
}

export default Navbar
