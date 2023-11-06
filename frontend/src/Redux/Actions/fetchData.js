import axios from 'axios';
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
}  from '../Slices/fetchDataSlice';

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart())

    const authToken = localStorage.getItem('userToken');
    const apiUrl = 'http://localhost:3001/api/v1/user/profile';

    const response = await axios.post(apiUrl, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    });

    const responseData = response.data.body;

    dispatch(fetchDataSuccess(responseData))
  } catch (error) {
     dispatch(fetchDataFailure(error.message))
    console.error('Error fetching data:', error);
  }
}