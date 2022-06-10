import axios from "axios"
import { useEffect, useState } from "react";

const useApi = () => {
  
  const [location, setLocation] = useState('');

  useEffect(() => {
    const URL = 'https://rickandmortyapi.com/api/location/8';
    axios.get(URL)
      .then(resp => setLocation(resp.data))
      .catch(err => console.log(err))
  
  }, [])
  
  return {location}

}

export default useApi