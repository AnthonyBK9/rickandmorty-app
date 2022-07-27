import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDimension } from '../store/slices/dimension.slice'

const useLocation = () => {
    const [selectDimension, setSelectDimension] = useState()
    const locationId = Math.ceil(Math.random() * 126);
    const dispatch = useDispatch()
    const dimension = useSelector(state => state.dimension)
        useEffect(() => {
            dispatch(getDimension(locationId))
        }, [dispatch])

        useEffect(() => {
        if (selectDimension !== undefined) {
            dispatch(getDimension(selectDimension.value))
        }
        }, [selectDimension])

  return { selectDimension, setSelectDimension, dimension }
}

export default useLocation