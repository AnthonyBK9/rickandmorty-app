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
      </div>
    )
}

export default RickAndMortyApp
