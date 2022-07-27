import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const allDimension = createSlice({
    name: 'allDimension',
    initialState: [],
    reducers: {
        setAllDimension: (state, action) => action.payload
    }
})

export const { setAllDimension } = allDimension.actions;
export const getAllDimension = (id) => (dispatch) => {
        return axios.get(`https://rickandmortyapi.com/api/location/`)
            .then( res => dispatch(setAllDimension(res.data)))
            .catch( err => console.log(err.data))
    }

export default allDimension.reducer;
