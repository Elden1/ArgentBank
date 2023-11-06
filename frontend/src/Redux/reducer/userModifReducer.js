import {CHANGE_DATA_SUCCESS } from '../Actions/modifUsername'

const initialState = {
  userData: null,
};

const userModifReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATA_SUCCESS:
      return {
        ...state,
        userNameDataCh: action.payload,
      };
    default:
      return state;
  }
};

export default userModifReducer