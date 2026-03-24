import React from 'react'
import "../assets/styles/Container.css"

function container({children}) {
  return (
    <div className='container-width'>{children}</div>
  )
}

export default container