import axios from "axios";
import { useEffect, useState } from "react";
import './style/card.css'

const Card = ({resident}) => {
    const [getResident, setGetResident] = useState()
    useEffect(() => {
        axios.get(resident)
        .then(res => setGetResident(res.data))
        .catch()
    }, [])

  return (
    <article className="card-resident">
        <div className="card__header">
            <img src={getResident?.image} alt={getResident?.name} />
        </div>
        <div className="card__body">
            <h3 className="card__title">{getResident?.name}</h3>
            <div className="card__container__status">
                <p><span>Status: </span> {getResident?.status}</p>
                <div className={`card__status bg-${getResident?.status}`}></div>
            </div>
            <div className="card__container__character">
                <p className="card__info"><span>Specie: </span> {getResident?.species}</p>
                <p className="card__info"><span>Location:</span> {getResident?.location.name}</p>
                <p className="card__info"><span>Episode:</span> {getResident?.episode.length}</p>
            </div>
        </div>  
    </article>
  )
}

export default Card