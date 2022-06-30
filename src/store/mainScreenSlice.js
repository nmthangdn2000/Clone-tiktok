import { createSlice } from '@reduxjs/toolkit';

const mainScreenSlice = createSlice({
  name: 'search',
  initialState: {
    isShowComment: false,
  },
  reducers: {
    setIsShowComment: (state, action) => {
      state.isShowComment = action.payload;
    },
  },
});

export default mainScreenSlice.reducer;

export const { setIsShowComment } = mainScreenSlice.actions;
