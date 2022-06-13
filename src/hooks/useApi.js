import axios from "axios"
import { useEffect, useState } from "react";

const useApi = () => {
  
  const [location, setLocation] = useState('');

  const locationId = Math.ceil(Math.random() * 126);
  console.log(locationId);
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${locationId}`;
    axios.get(URL)
      .then(resp => setLocation(resp.data))
      .catch(err => console.log(err))
  
  }, [])
  
  return {location}

}

export default useApi