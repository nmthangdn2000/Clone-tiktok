import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    txtSearch: '',
  },
  reducers: {
    setTxtSearch: (state, action) => {
      state.txtSearch = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const { setTxtSearch } = searchSlice.actions;
