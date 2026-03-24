import React from 'react'
import "../assets/styles/Herosection.css"
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import Container from '../Pages/container'

function Herosection() {
  return (
    <div className='hero-container'>

      <Container>

      <div className='hero-txt'>

        <div className='stars'>
        <IoStarSharp color='white' size={24} />
        <IoStarSharp color='white' size={24} />
        <IoStarSharp color='white' size={24} />
        <IoStarSharp color='white' size={24} />
        <IoIosStarOutline color='white' size={24} />
        <span className='star-txt'>4.9 rate by 100+ reviews</span>
        
        </div>

        <div>
            <h1 className='hero-heading'>Explore Africa. Travel Without Stress.<br/> Create Memories.</h1>
            <p className='hero-subheading'>We help you book flights, hotels, and unforgettable road trips across Southern Africa.<br/> From relaxing beach holidays to exciting adventure tours, we make your travel simple and memorable. </p>
        </div>
        <div className='hero-btn'>
            <button className='btn-book'>Book Your Trip With Us</button>
            <button className='explore-btn'>Explore Destinations</button>

        </div>

        </div>
        </Container>


    </div>
  )
}

export default Herosection