import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userIntel: null,
  loading: false,
  error: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.userIntel = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} = userDataSlice.actions

export default userDataSlice.reducer