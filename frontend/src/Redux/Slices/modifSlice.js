import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userName:null,
    loading: false,
    error: null
};

const modifSlice = createSlice({
  name: 'modifData',
  initialState,
  reducers: {
    modifyDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    modifyDataSuccess(state, action) {
      state.userName = action.payload;
      state.loading = false;
      state.error = null;
    },
    modifyDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  modifyDataStart,
  modifyDataSuccess,
  modifyDataFailure,
} = modifSlice.actions

export default modifSlice.reducer