import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const dimension = createSlice({
    name: 'dimension',
    initialState: [],
    reducers: {
        setDimension: (state, action) => action.payload
    }
})

export const { setDimension } = dimension.actions;
export const getDimension = (id) => (dispatch) => {
    return axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then( res => dispatch(setDimension(res.data)))
        .catch( err => console.log(err.data))
}
export default dimension.reducer;
