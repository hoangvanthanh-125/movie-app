import { createSlice } from "@reduxjs/toolkit";
export interface USER {
  displayName: string;
  email: string;
  uid: string;
}
interface USERDATA {
  user: null | USER;
}

const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
  },
});
export const { reducer: userReducer } = userSlice;
export const { actions: userActions } = userSlice;
