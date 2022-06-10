import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CardUser = ({resident}) => {
  const [getResident, setGetResident] = useState();
  useEffect(()=> {
    axios.get(resident)
      .then(res => setGetResident(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(getResident)
  return (
    <article className='card'>
        <div className="card_header">
            <img src={getResident?.image} alt={getResident?.name} />
        </div>
        <div className="card_body">

        </div>
    </article>
  )
}

export default CardUser