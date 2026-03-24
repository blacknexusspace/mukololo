import React from 'react'
import "../assets/styles/Navbar.css"
import { IoCallOutline } from "react-icons/io5";


function Navbar() {
  return (
    <div className='nav-container'>
      <div>
        <h1 className='logo'>Mukololo Travel & Tour</h1>
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
         
          <div><button className='book-btn'>Book Now</button></div>
      </div>
    </div>
  )
}

export default Navbar
