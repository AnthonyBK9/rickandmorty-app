import { getAllDimension } from '../../store/slices/allDimension.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Select from 'react-select'
import './style/location.css'

const Location = ({setSelectDimension}) => {

    const dispatch = useDispatch()
    const allDimension = useSelector(state => state.allDimension)
    useEffect(() => {
        dispatch(getAllDimension())
    }, [dispatch])
    const dimensionOptions = allDimension?.results?.map((e) => ({
      value: e.id,
      label: e.name,
    }))

  return (
    <div className="select">
      <Select 
        options={dimensionOptions} 
        onChange={setSelectDimension} 
        className="select-dimension"
        
        />
    </div>
  )
}

export default Location