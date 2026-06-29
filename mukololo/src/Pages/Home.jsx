import React from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import "../assets/styles/Home.css"
import Whoarewe from '../Components/whoarewe'
import Services from '../Components/Services'
import Gallery from '../Components/Gallery'
import Special from '../Components/Special'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
    <div className='hero-background'>
       
        <Navbar/>
        <Herosection/>
        
    </div>
      <Whoarewe/>
      <Services/>
      <Gallery/>
      <Special/>
      <Footer />

      </div>
  )
}

export default Home