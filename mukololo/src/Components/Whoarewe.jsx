import React from 'react'
import "../assets/styles/whoarewe.css"
import Container from '../Pages/container'
import boarwalk from '../assets/images/boardwalk.jpg'


function Whoarewe() {
  return (

    <Container>
    <div className='whoarewe-container'>

       
        <div>
            <h2 className='whoarewe-heading'>Who we are</h2>

        </div>
        <div>
            <div>
            <h3 className='whoarewe-subheading'>We're a team of passionate<br/> travel experts who believe<br/> exploring 
                the world should be<br/> inspiring, not stressful.
            </h3>

            </div>
            <div>
              <img src={boarwalk} className='whoarewe-image'/>
            </div>
            <div>
                <button className='abt-btn'>Get to know us <span></span></button>
            </div>
          

        </div>
       
        
    </div>
    </Container>
 
  )
}

export default Whoarewe