import { configureStore } from "@reduxjs/toolkit";
import allDimension from './slices/allDimension.slice'
import dimension from './slices/dimension.slice'
import resident from './slices/resident.slice'

export default configureStore ({
    reducer: {
        allDimension,
        dimension,
        resident
    }
})