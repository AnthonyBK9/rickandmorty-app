import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const resident = createSlice({
    name: 'resident',
    initialState: [],
    reducers: {
        setResident: (state, action) => action.payload
    }
})

export const { setResident } = resident.actions;

    export const getResident = (URL) => (dispatch) => {
        return axios.get(URL)
            .then( res => dispatch(setResident(res.data)))
            .catch( err => console.log(err.data))
    }

export default resident.reducer;
