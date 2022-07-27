import Location from './components/home/Location'
import Header from './components/shared/Header'
import Card from './components/card/Card'
import useLocation from './hooks/useLocation'
import Footer from './components/shared/Footer'
import usePagination from './hooks/usePagination'
import Pagination from './components/pagination/Pagination'
import './App.css'

function App() {

  const { setSelectDimension, dimension } = useLocation();
  const { arrayResidents, arrayPages, currentPage, setCurrentPage, quantityPages } = usePagination();
  return (
    <div className="App">
      <div className="container">
        <Header dimension={dimension} />
        <Location setSelectDimension={setSelectDimension}/>
        <Pagination 
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
        <div className="card-container">
          {
            arrayResidents?.map( resident => (
              <Card 
                key={resident}
                resident={resident}
              />
            ))
          }
        </div>
        <Pagination 
          arrayPages={arrayPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          quantityPages={quantityPages}
        />
      </div>
     
      <Footer />
    </div>
  )
}

export default App
