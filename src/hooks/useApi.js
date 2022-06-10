import axios from "axios"
import { useEffect, useState } from "react";

const useApi = () => {
  
  const [users, setUsers] = useState('');

  useEffect(() => {
    const URL = 'https://rickandmortyapi.com/api/location';
    axios.get(URL)
      .then(resp => setUsers(resp.data))
      .catch(err => console.log(err))
  
  }, [])
  
  return {users}

}

export default useApi