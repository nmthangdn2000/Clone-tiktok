import { createSlice } from '@reduxjs/toolkit';

const mainScreenSlice = createSlice({
  name: 'search',
  initialState: {
    isShowComment: false,
    currentComment: '',
  },
  reducers: {
    setIsShowComment: (state, action) => {
      state.isShowComment = action.payload;
    },
    setCurrentComment: (state, action) => {
      state.currentComment = action.payload;
    },
  },
});

export default mainScreenSlice.reducer;

export const { setIsShowComment } = mainScreenSlice.actions;
