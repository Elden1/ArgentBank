import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

let apiUrl = 'http://localhost:3001/api/v1/user/profile';


export let modifAction = createAsyncThunk(
    'modifData/modify',
  async ({userName}, {rejectWithValue}) => {
  try {
console.log({userName})
    let authToken = localStorage.getItem('userToken');

    let { data } = await axios.put(
      apiUrl, {
        'userName': `${userName}`}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });
    console.log(data)
      return data
  } catch (error) {
    if (error.response && error.response.data.body.message) {
      return rejectWithValue(error.response.data.body.message)
    } else {
      return rejectWithValue(error.message)
  }
}
})