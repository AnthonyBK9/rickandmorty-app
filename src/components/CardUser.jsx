import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CardUser = ({resident}) => {
  const [getResident, setGetResident] = useState();
  useEffect(()=> {
    axios.get(resident)
      .then(res => setGetResident(res.data))
      .catch(err => console.log(err))
  }, [])

    let color;
    if (getResident?.status === 'Dead') {
      color = '#7B241C'
    } else if (getResident?.status === 'Alive'){
      color = '#239B56'
    } else {
      color = '#BFC9CA';
    }

  return (
    <article className='card'>
        <div className="card_header">
            <img src={getResident?.image} alt={getResident?.name} />
        </div>
        <div className="card_body">
          <div className="card_name">
            <h2>{getResident?.name}</h2>
          </div>
          <div className="card_content">
            <p><span className="circle" style={{backgroundColor: color}}></span> {getResident?.status} / {getResident?.species}</p>
            <p><span>Origin: </span>{getResident?.origin?.name}</p>
            <p><span>Episodes where appear: </span>{getResident?.episode?.length}</p>
          </div>
        </div>
    </article>
  )
}

export default CardUser