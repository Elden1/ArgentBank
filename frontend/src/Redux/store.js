import { configureStore } from "@reduxjs/toolkit"
import fetchSlice from './Slices/fetchDataSlice'
import modifSlice from "./Slices/modifSlice"
import authSlice from "./Slices/authSlice"

let store = configureStore ({
    reducer : {
        auth : authSlice,
        userData: fetchSlice,
        modifData:modifSlice
    }
})
export default store