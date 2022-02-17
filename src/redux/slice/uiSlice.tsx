import { createSlice } from "@reduxjs/toolkit";
interface UI {
  openSidebar:boolean
}
const initialState = {
  openSidebar:false
} as UI

const uiSlice = createSlice({
  name:'uiSlice',
  initialState,
  reducers:{
  toggleSidebar:(state) => {
    state.openSidebar = !state.openSidebar
  }
  }

})
export const {reducer:uiReducer} = uiSlice;
export const {actions:uiActions} = uiSlice;