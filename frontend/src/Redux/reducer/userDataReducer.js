import {FETCH_DATA_SUCCESS } from '../Actions/fetchData'

const initialState = {
  userData: null,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer