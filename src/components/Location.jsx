import React from 'react'

const Location = ({location}) => {
    console.log(location)
  return (
    <header>
        <div className="header">
            <h1>{location?.name}</h1>
        </div>
        <div>
            <p><span>Type: </span>{location?.type}</p>
            <p><span>Dimension: </span>{location?.dimension}</p>
            <p><span>Residents: </span>{location?.residents.length}</p>
        </div>
    </header>
  )
}

export default Location