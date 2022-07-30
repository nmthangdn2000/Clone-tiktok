import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CurrentBottomTab = 'Trang chủ' | undefined;

interface InitialState {
  currentBottomTab: CurrentBottomTab;
  bottomSheetSignIn: boolean;
  currentUser: string;
  modalSignIn: boolean;
  bottomSheetSettingProfile: boolean;
  bottomSheetLogout: boolean;
}

const initialState: InitialState = {
  currentBottomTab: 'Trang chủ',
  bottomSheetSignIn: false,
  currentUser: '',
  modalSignIn: false,
  bottomSheetSettingProfile: false,
  bottomSheetLogout: false,
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setCurrentBottomTab: (state, action: PayloadAction<InitialState>) => {
      state.currentBottomTab = action.payload.currentBottomTab;
    },
    setBottomSheetSignIn: (state, action: PayloadAction<InitialState>) => {
      state.bottomSheetSignIn = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<InitialState>) => {
      state.currentUser = action.payload;
    },
    setModalSignIn: (state, action: PayloadAction<InitialState>) => {
      state.modalSignIn = action.payload;
    },
    setBottomSheetSettingProfile: (state, action: PayloadAction<InitialState>) => {
      state.bottomSheetSettingProfile = action.payload;
    },
    setBottomSheetLogout: (state, action: PayloadAction<InitialState>) => {
      state.bottomSheetLogout = action.payload;
    },
  },
});

export default indexSlice.reducer;

export const {
  setCurrentBottomTab,
  setBottomSheetSignIn,
  setCurrentUser,
  setModalSignIn,
  setBottomSheetSettingProfile,
  setBottomSheetLogout
} = indexSlice.actions;
