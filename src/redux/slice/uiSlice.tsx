import { createSlice } from "@reduxjs/toolkit";
interface UI {
  openSidebar:boolean,
  openSearch:boolean
}
const initialState = {
  openSidebar:false,
  openSearch:false
} as UI

const uiSlice = createSlice({
  name:'uiSlice',
  initialState,
  reducers:{
  toggleSidebar:(state) => {
    state.openSidebar = !state.openSidebar
  },
  toggleSearch:(state) => {
    state.openSearch = !state.openSearch
  }
  }

})
export const {reducer:uiReducer} = uiSlice;
export const {actions:uiActions} = uiSlice;