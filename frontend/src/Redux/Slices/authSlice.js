import { createSlice } from '@reduxjs/toolkit'
import { userLogin   } from '../Actions/authActions'

let userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

let initialState = {
    userToken : null,
}
let authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {    
      userLogin: (state, action) =>{
        state.userToken = action.payload
      }}
  })

export default authSlice.reducer