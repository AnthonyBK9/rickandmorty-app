import './App.css'
import useApi from './hooks/useApi'

function App() {

  const {users} = useApi();
  console.log(users);
  return (
    <div className="App">

    </div>
  )
}

export default App
