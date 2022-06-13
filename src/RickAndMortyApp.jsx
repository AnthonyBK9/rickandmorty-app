import React from 'react'
import './App.css'
import useApi from './hooks/useApi'
import CardUser from './components/CardUser';
import Location from './components/Location';
import img from './assets/js/img'
import InputSearch from './components/InputSearch';

const RickAndMortyApp = () => {
    const {location} = useApi();
    return (
      <>
        <img src={img[1].img} alt={img[1].title} className="header-img"/>
        <div className="App">
          <Location 
              location={location}
          />
          <InputSearch />
          <div className="card-container">
              { location?.residents?.map(resident => (
                <CardUser 
                  resident={resident} 
                  key={resident}
                />
                ))}
          </div>
        </div>
      </>
    )
}

export default RickAndMortyApp
