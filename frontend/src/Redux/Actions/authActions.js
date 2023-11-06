import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

let backendURL = 'http://localhost:3001'

export let userLogin = createAsyncThunk(
    'auth/register',
    async ({email, password}, {rejectWithValue}) => {
        try {
        let config = {
            headers: {  
                'Content-Type': 'application/json',
            }
        }

        let {  data } = await axios.post(
            `${backendURL}/api/v1/user/login`,
            { email, password },
            config
            )
            localStorage.setItem('userToken', data.body.token)

          
            return data
          } catch (error) {
            if (error.response && error.response.data.body.message) {
              return rejectWithValue(error.response.data.body.message)
            } else {
              return rejectWithValue(error.message)
            }
          }
        }
      )