import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface appSliceState {
  currentUser: {
    username?: string;
    picture?: string;
    email?: string;
    savedCodes?: string[];
  };
  isLoggedIn: boolean;
  windowWidth: number;
}

const initialState: appSliceState = {
  currentUser: {},
  isLoggedIn: false,
  windowWidth: window.innerWidth,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    updateCurrentUser: (
      state,
      action: PayloadAction<appSliceState["currentUser"]>
    ) => {
      state.currentUser = action.payload;
    },
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    updateWindowWidth: (state, action: PayloadAction<number>) => {
      state.windowWidth = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { updateCurrentUser, updateIsLoggedIn, updateWindowWidth } =
  appSlice.actions;
