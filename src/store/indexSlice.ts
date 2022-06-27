import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CurrentBottomTab =
  | { currentBottomTab: 'Trang chủ' }
  | { currentBottomTab: undefined };

const initialState: CurrentBottomTab = { currentBottomTab: 'Trang chủ' };

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setCurrentBottomTab: (state, action: PayloadAction<CurrentBottomTab>) => {
      state.currentBottomTab = action.payload.currentBottomTab;
    },
  },
});

export default indexSlice.reducer;

export const { setCurrentBottomTab } = indexSlice.actions;
