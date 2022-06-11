import React from 'react'
import img from '../assets/js/img'
const Location = ({location}) => {
  return (
    <header>
        <div className="header">
          
          </div>
          <div className="header-content">
            <p><span>Type: </span>{location?.type}</p>
            <p><span>Dimension: </span>{location?.dimension}</p>
            <p><span>Residents: </span>{location?.residents?.length}</p>
          </div>
          <div className="header-title">
            <h1>{location?.name}</h1>
          </div>
    </header>
  )
}

export default Location