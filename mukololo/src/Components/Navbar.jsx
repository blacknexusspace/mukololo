import React from 'react'
import "../assets/styles/Navbar.css"
import { IoCallOutline } from "react-icons/io5";


function Navbar() {
  return (
    <div className='nav-container'>
      <div>
        <h1>Mukololo Travel & Tour</h1>
      </div>
        <div>
            <ul className='unordered-list text-4xl'>
                <li>Home</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Specials</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
      
      <div className='contact-but'>
          <div className='contact'>
            <div><IoCallOutline size={20} /></div>
            <div><p>+27 76 456 8280</p></div>
          </div>
          <div><button className='book-btn'>Book Now</button></div>
      </div>
    </div>
  )
}

export default Navbar
