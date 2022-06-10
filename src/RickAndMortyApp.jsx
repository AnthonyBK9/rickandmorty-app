import React from 'react'
import './App.css'
import useApi from './hooks/useApi'
import CardUser from './components/CardUser';
import Location from './components/Location';

const RickAndMortyApp = () => {
    const {location} = useApi();
    return (
      <div className="App">
        <Location 
            location={location}
        />
        <div className="card-container">
            { location?.residents?.map(resident => (
              <CardUser 
                resident={resident} 
                key={resident}
              />
              ))}
        </div>
      </div>
    )
}

export default RickAndMortyApp
